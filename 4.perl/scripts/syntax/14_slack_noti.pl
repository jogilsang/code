use HTTP::Request::Common qw(POST);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;

use Encode;
use Encode::Guess;

my $ua = LWP::UserAgent->new;
$ua->timeout(15);

my $url = "https://hooks.slack.com/services/***";
my $data = "hello world";

# 보내는 양식
# my $payload = {
#     'text'  => $data,
# };

$text = 'cho_gilsang - API 프로퍼티 key값 변경';
$test7 = decode("UTF-8", $text);

$text_complete = $test7;

my $payload = {
	"attachments"=> [
		{
			"blocks"=> [
				{
					"type"=> "section",
					"text"=> {
						"type"=> "mrkdwn",
						"text"=> $text_complete
					}
				},
				{
					"type"=> "section",
					"text"=> {
						"type"=> "mrkdwn",
						"text"=> "Branch : `develop`\nRevision : `7850`"
					}
				},
				{
					"type"=> "divider"
				},
				{
					"type"=> "section",
					"text"=> {
						"type"=> "mrkdwn",
						"text"=> "U : 4\n```service-web/src/main/java/com/app/biz/products/service/ProductServiceImpl.java```"
					}
				},
				{
					"type"=> "section",
					"text"=> {
						"type"=> "mrkdwn",
						"text"=> "A : 1\n```service-web/src/main/java/com/app/biz/products/service/ProductServiceImpl.java```"
					}
				},
				{
					"type"=> "section",
					"text"=> {
						"type"=> "mrkdwn",
						"text"=> "D : 1\n```service-web/src/main/java/com/app/biz/products/service/ProductServiceImpl.java```"
					}
				}
			]
		}
	]
};

my $req = POST( "$url", ['payload' => encode_json($payload)] );

# $request->authorization_basic($user, $pass); 

my $s = $req->as_string;
print STDERR "Request:\n$s\n";

my $res = $ua->request($req);
$s = $res->as_string;
print STDERR "Response:\n$s\n";