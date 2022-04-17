
#!/usr/local/bin/perl
# 09 string_eq.pl

$long = "Tell me what\'s up.";  # '는 특수한 문자이므로 \를 사용
                                # 하여 excape시킵니다.
if( $long =~ /hat/ )   # 보셨죠 ? 문자열 $long에 hat이라는 문자열
{                      # 이 들어있는지 시험합니다.
  print "Yes, it contains \"hat\".\n"; # "도 escape시켜야 됩니다.
}
else
{
  print "No, it does not.\n";
}

print "\n";
$test = "i am who i am";

if ($test =~ /who/) {
  print "who!!!";
}
else {
print "no who";
}

print "\n";
$test = "how do you do?";

if ($test =~ /y.u/) {
  print "you";
}
else {
  print "no you";
}