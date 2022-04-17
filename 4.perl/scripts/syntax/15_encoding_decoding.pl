
use Encode;
use Encode::Guess;

$text = 'cho_gilsang - API 프로퍼티 key값 변경';
$text1 = encode("euc-kr", decode("utf-8", "$text"));
$text2 = encode("euc-kr", decode("cp949", "$text"));
$text3 = encode("utf-8", decode("euc-kr", "$text"));
$text4 = encode("utf-8", decode("cp949", "$text"));

$test5 = encode("UTF-8", $text);
$test6 = encode("cp949", $text);
$test7 = decode("UTF-8", $text);
$test8 = decode("cp949", $text);