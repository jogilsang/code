#!perl

use HTTP::Request::Common qw(POST);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;

use Encode;
use Encode::Guess;

my $ua = LWP::UserAgent->new;
$ua->timeout(15);

# TODO : Slack Webhook 주소기입하기
my $url = "https://hooks.slack.com/services/***";

# 한국어는 인코딩, 디코딩 작업이 필수
my $data = "Hello World! 슬랙 처리해보기";
$data = decode("UTF-8", $data);

# Request Body
my $payload = {
     'text'  => $data,
 };

my $req = POST( "$url", ['payload' => encode_json($payload)] );

# Sub
my $s = $req->as_string;
print STDERR "Request:\n$s\n";

my $res = $ua->request($req);
$s = $res->as_string;
print STDERR "Response:\n$s\n";

