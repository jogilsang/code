use HTTP::Request::Common qw(GET);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;

use Encode;
use Encode::Guess;

# example : http://docs.adaptivecomputing.com/9-0-1/MWS/Content/topics/moabWebServices/7-references/clientCodeSamples/perl.htm
# example
#   $ua->request(GET 'http://www.sn.no',
#                    If_Match => 'foo',
#                    From     => 'gisle@aas.no',
#               );

my $ua = LWP::UserAgent->new;
$ua->timeout(15);

my $url = "https://.....?";
my $query = "field=1&field=2";
my $endpoint = $url.$query;

my $req = GET( "$endpoint");

$req->content_type('application/json');
$req->authorization_basic("id", "pw");

my $s = $req->as_string;
print STDERR "Request:\n$s\n";

my $res = $ua->request($req);
$s = $res->as_string;
$s = encode("euc-kr", decode("utf-8", "$s"));
print STDERR "Response:\n$s\n";
