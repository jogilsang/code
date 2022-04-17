##!/bin/bash
#
# @title : POST_jira_issuesstatus_to_slack
# @author : cho_gilsang
#
# @created :  v1 JIRA GET ISSUE(duedate가 당일인 것), 2021/07/08
#
# @modifyed : v2 argument로 코드분리, jQL param 추가 2021/07/12
#             v3 dev,prd 추가 2021/07/13
#             v4 알람로직 변경하기 - 숫자넣기, 멘션변경, 정규표현식 추가 삭제 2021-07-21
#
# @user : 시스템관리자 및 개발자
# 
# @usecase :
# CASE 1. 매일오전 8시, 오후 17시 (관리자 대상)
#    - JIRA상태가 접수/계획, 릴리스 요청 단계에서 확인이 필요한 건
#      jQL : project = {projectkey} AND status in ("접수/계획", "릴리스 요청")
# CASE 2. 매일 오전 9시 (개발자 대상)
#    - JIRA상태가 완료가 아니면서, 배포일정(duedate = today) 인 Issue건
#      JQL : project = {projectkey} AND status not in ("DROP", "완료") AND due <= 2021-7-12
# CASE 3. 매주 월요일 오전 9시 (개발자 대상)
#    - JIRA상태가 완료가 아니면서, 배포일정 초과(duedate < today) 인 Issue건
#      JQL : project = {projectkey} AND status not in ("DROP", "완료") AND due >= 2021-7-05 AND due <= 2021-7-12

use utf8;      # so literals and identifiers can be in UTF-8
use v5.12;     # or later to get "unicode_strings" feature
use strict;    # quote strings, declare variables
use warnings;  # on by default
use warnings  qw(FATAL utf8);    # fatalize encoding glitches
use open      qw(:std :encoding(UTF-8)); # undeclared streams in UTF-8
use charnames qw(:full :short);  # unneeded in v5.16
use Encode qw(decode);

use HTTP::Request::Common qw(GET);
use HTTP::Request::Common qw(POST);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;
use JSON qw(decode_json);
use JSON qw(from_json);

use Data::Dumper;

use Time::Piece;
use POSIX qw/strftime/;

# TODO
my $jira_id = "";
my $jira_pw = "";
my $jira_domain = "";
my $slack_dev_channel = "";
my $slack_prd_channel = "";

# variable
my $jira_project_key = "";
my $jira_url = $jira_domain."/browse/";
my $jira_query_link = $jira_domain."/issues/?jql=project%20%3D%20".$jira_project_key;
my $due_date = "";
my $API_response = "";
my $SET_response = "";
my $url = "";

# Perl 실행 시, Argument 필요
# 0 -> 프로젝트 키
if(!$ARGV[0]){
    print STDERR "ERROR : JIRA의 프로젝트 키는 필수입니다.";
    exit(0);
}
else {
    $jira_project_key = $ARGV[0];
}

# 1 -> 0,1,2
if(!$ARGV[1]) {
      print STDERR "ERROR : argument는 필수입니다. 1,2,3 을 입력해주세요";
      exit(0);
}
else {
    if($ARGV[1] == 1) {

    }
    elsif($ARGV[1] == 2) {

    }
    elsif($ARGV[1] == 3) {

    }
    else {
        print STDERR "ERROR : argument로 1,2,3 외의 값은 허용하지않습니다.";
        exit(0);
    }
}

my $date_today = getDateToday();
my $date_after_one_week = getDateAfterOneWeek();

my $index = $ARGV[1]-1;

# variable
my $jira_jql = "";
my @jql_list = (
    "$jira_project_key"." AND status in (\"접수/계획\", \"릴리스 요청\") ORDER BY assignee ASC",
    "$jira_project_key"." AND status not in (\"릴리스\", \"DROP\", \"완료\", \"운영 테스트\") AND due <= $date_today ORDER BY assignee ASC",
    "$jira_project_key"." AND status not in (\"DROP\", \"완료\") AND due <= $date_after_one_week ORDER BY assignee ASC"
);

my $slack_message = "";
my @slack_message_list = (
    "접수/계획, 릴리스 요청 작업건입니다. 이랜드임직원은 JIRA승인 바랍니다",
    "금일까지 개발완료 예정입니다. 지연인경우, JIRA의 기한(duedate) 수정 부탁드립니다.", 
    "완료예정일(duedate)이 지나거나 당일인 작업(TASK)입니다. 상태변경, 작업취소 또는 기한(duedate) 수정 부탁드립니다."
);

# 2 -> dev(테스트환경인 슬랙채널), prd(실제운영중인 슬랙채널)
if(!$ARGV[2]) {
      print STDERR "ERROR : dev,prd 표기는 필수입니다.";
      exit(0);
}
else{
    # 목적지 : 슬랙
    # 워크스페이스 : elandomniplatform.slack.com -> 채널 : fass-jira-admin
    # DEV
    if($ARGV[2] =~ /dev/) {
       $url = $slack_dev_channel;
    }
    # PRD
    elsif ($ARGV[2] =~ /prd/){
       $url = $slack_prd_channel;
    }
    else {
        print STDERR "ERROR : argument로 dev,prd 외의 값은 허용하지않습니다.";
        exit(0);
    }
}


$API_response = getIssue_jira_api($jql_list[$index], "", 300);
$slack_message = $slack_message_list[$index];

print $API_response;
$SET_response = set_slack_message_getIssue_jira_api($API_response);


my $post_date = getDateTodayAndTime(); # 슬랙메세지 전송날짜
send_slack_message_getIssue_jira_api($post_date, $SET_response, $jira_query_link, $url, $slack_message);

#################################################################################################

# Method
sub parseStringJSONToJSON {
    my $json = $_[0];
    my $decoded = decode_json($json);

    return $decoded;
}

sub getDateToday {
    return localtime->strftime('%F');
}

sub getDateTodayAndTime {
    return localtime->strftime('%F %T');
}

sub getDateAfterOneWeek {

    my $rightnow = time - (24 * 60 * 60 * 7);
    my $datestring = (localtime $rightnow)->strftime('%F');
    
    return localtime->strftime('%F');
     
}

sub set_slack_message_getIssue_jira_api {

    # @param
    # $_[0] -> parsing 된 API 출력결과

    # @return
    # result

    # required
    # if(!$_[0]) {
    #     print STDERR "ERROR : DATE needed";
    #     exit(0);
    # }

    my $undecoded = $_[0];

    # Parsing
    my $decoded = parseStringJSONToJSON($undecoded); 
    print $decoded;

    my @arr = @{$decoded -> {'issues'}};

    my $result = "";
    my $temp_assignee = "";
    my $temp_assignee_task_num = 0;

    foreach my $i (0..$#arr) {
        # 슬랙메세지 - 구성요소들을 위한 JSON 파싱
        my $issue_key = @arr[$i] -> {"key"}; # 프로젝트 키 -> EX : JIRA-327
        my $issue_summary = @arr[$i] -> {"fields"}{"summary"}; # JIRA제목 -> EX : 운영과제
        my $issue_duedate = @arr[$i] -> {"fields"}{"duedate"}; # JIRA 작업납기일 -> EX : 2021-07-08
        my $issue_status_name = @arr[$i] -> {"fields"}{"status"}{"name"}; # JIRA 상태 -> EX : 완료
        my $issue_assignee_displayName = @arr[$i] -> {"fields"}{"assignee"}{"displayName"}; # JIRA 작업자 -> EX : 조길상

        # 슬랙메세지 - 작업자별로 구분해서 표기하기
        if($temp_assignee ne $issue_assignee_displayName) {

            # TASK-NUM 계산 - 작업자(assignee)별 계산을 위해 for문 진행
            foreach my $j (0..$#arr) {
                # 작업자가 할당된 작업을 발견할때마다
                if($issue_assignee_displayName eq (@arr[$j] -> {"fields"}{"assignee"}{"displayName"})) {
                    # 1명씩 증가한다.
                    $temp_assignee_task_num = $temp_assignee_task_num + 1;
                } 
            }

            $temp_assignee =$issue_assignee_displayName;

            # TODO
            # @ 멘션을 위해 정규표현식을 적용해서 이름만 추출하거나, ()를 제거한다.
            $issue_assignee_displayName =~ s/[\()](.*?)[\)]//g;

            $result = $result."\n"."<\@$issue_assignee_displayName>"." - ${temp_assignee_task_num}건"."\n";
            $temp_assignee_task_num = 0;
        }

        # 메세지 - JIRA 이슈별 클릭링크 생성
        my $issue_url = $jira_url.$issue_key;
        my $issue_link = "<$issue_url|$issue_key>";

        # 최종메세지
        my $context = $issue_link." : *".$issue_summary."*, `".$issue_status_name."`, ".$issue_duedate."\n";
        $result = $result.$context;
    }

    # 출력 - 최종메세지 
    return $result;

}

sub send_slack_message_getIssue_jira_api {

    # @param
    # $_[0] -> date : 출력날짜
    # $_[1] -> response : 각 JIRA 별 링크연결
    # $_[2] -> JIRA 쿼리 조회 Web화면링크
    # $_[3] -> Slack-Endpoint
    # $_[4] -> Slack-Message 

    # @return
    # void

    # required
    if(!$_[0]) {
        print STDERR "ERROR : DATE needed";
        exit(0);
    }

    # JIRA 결과가 없으면, 보낼필요 없음
    # required
    if(!$_[1]) {
        print STDERR "ERROR : response needed";
        exit(0);
    }

    # JIRA-QUERY 결과가 없으면, 보낼필요 없음
    # required
    if(!$_[2]) {
        print STDERR "ERROR : jql query needed";
        exit(0);
    }

    # slack 주소가 없으면, 보낼필요 없음
    # required
    if(!$_[3]) {
        print STDERR "ERROR : slack URL needed";
        exit(0);
    }

    # slack 메세지가 없으면, 보낼필요 없음
    # required
    if(!$_[4]) {
        print STDERR "ERROR : slack message needed";
        exit(0);
    }

    my $DATE = $_[0];
    my $RESPONSE = $_[1];
    my $QUERY_LINK = $_[2];
    my $URL = $_[3];
    my $MESSAGE = $_[4];
    
# 슬랙 payload의 Request Form
# 보내는 양식
my $payload = {
      "text"=> "DATE : $DATE"."\n"."<$QUERY_LINK|$MESSAGE>",
			"blocks"=> [
        {
          "type" => "context",
          "elements" => [
            {
              "type" => "mrkdwn",
              "text"=> "DATE : $DATE"."\n"."<$QUERY_LINK|$MESSAGE>"
            }
          ]
        },
				{
					"type"=> "divider"
				},
        {
          "type" => "context",
          "elements" => [
            {
              "type" => "mrkdwn",
              "text"=> $RESPONSE
            }
          ]
        }
			]
};

# HTTP POST
# Request
my $ua = LWP::UserAgent->new;
$ua->timeout(15);

my $req = POST( "$URL", ['payload' => encode_json($payload)] );

my $s = $req->as_string;
print STDERR "Request:\n$s\n";

# Result
my $res = $ua->request($req);
$s = $res->as_string;
print STDERR "Response:\n$s\n";

}

# Reference 
# https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/
sub getIssue_jira_api {

    # param
    # $_[0] -> project : 프로젝트 key
    # $_[1] -> author : 작업자
    # $_[2] -> maxResults : 최대출력결과

    # return
    # str

    my $url = "https://jira.eland.co.kr/rest/api/2/search?";
    my $query = "";

    # param1 -> JIRA프로젝트 키 (required)
    # required
    if(!$_[0]) {
        print STDERR "ERROR : getIssue_jira_api (Method) -> Project key(param) needed";
        exit(0);
    }

    # param2 -> 작업자 값이 없으면 전체작업자
    # optional
    if(!$_[1]) {
        $query = "jql=project="."$_[0]"
        ."&maxResults="."$_[2]"
        ."&fields=key,summary,duedate,status,assignee";
    }
    else {
        $query = "jql=project="."$_[0]"
        ." AND assignee="."$_[1]"
        ."&maxResults="."$_[2]"
        ."&fields=key,summary,duedate,status,assignee";
    }

    # param3 -> 최대 호출갯수
    # required
    if(!$_[2]) {
        print STDERR "ERROR : getIssue_jira_api (Method) -> maxResults(param) needed";
        exit(2);
    }

    # HTTP GET
    # REQUEST
    my $ua = LWP::UserAgent->new;
    $ua->timeout(15);

    my $endpoint = $url.$query;

    my $req = GET("$endpoint");

    $req->content_type('application/json');
    $req->authorization_basic($jira_id, $jira_pw);

    my $s = $req->as_string;

    # RESULT
    my $res = $ua->request($req);
    $s = $res->content;

    return $s;

    
}

