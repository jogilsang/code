
#!/usr/local/bin/perl
# 11 regex.pl

# perlre.htm

# Quantifier follows nothing in regex; marked by <-- HERE in m/* <-- HERE p/ at 11_regix.pl line 15.
# /*p/

# . : 글자 하나를 나타냄. 
# * : 모든 글자가 될 수 있음. (앞에 글자가 하나 필요)
#      0 또는 몇 개의 o와 p가 있는 것
#     -> EX : o*p -> p, op, opp, oopp, oooooooooop

# + : 1 또는 몇 개의 o와 p가 있는 것
#     -> EX : o+p -> p, op, opp, oopp, oooooooooop

$test0 = "o"; # "case mis matched";
$test1 = "p"; # case matched
$test2 = "op"; # case matched
$test3 = "oopp"; # case matched
$test4 = "oop"; # case matched
$test5 = "opp"; # case matched
 
 print '* case : ', "\n";
if ( $test5 =~ /p+/) {
  print "O matched";
}
else {
    print "X matched";
}
print "\n\n";


# ? : 0 또는 1개의 문자에 일치됩니다. (앞글자가 적용되던지, 적용안되던지)
#     -> EX : o?p는 p 아니면 op입니다.

$test_0_0 = "o"; # "case mis matched";
$test_0_1 = "p"; # case matched
$test_0_2 = "op"; # case matched

print '? case : ', "\n";
if ( $test_0_0 =~ /o*p/) {
  print "O matched";
}
else {
    print "X matched";
}

$test = '2003-02-22 17:44:49 -0600 (Sat, 22 Feb 2003)';

if( $test =~ /(.*?)[+0900]/){
  $result = $1;
  print $result;
}
else{
  print 'fail';
}

# ^는 문자열의 맨 처음을, $는 맨 끝을 나타냅니다.
# t.e             the, tie, toe, 등등. settle에도 포함되어 있죠.
# ^t.e            위와 같으나 문자열/줄의 처음에 있을 경우.
#                 settle은 안됨.
#                 thebody는 가능
# ^.e             he, me, regard 등이 문자열/줄의 처음에 있을 경우.
# t.e$            toe, necktie 등으로 끝나는 문자열.
# s*he            she, he, ssssssssshe, the, tshe
# s+he            she, sshe, sssssshe, tshe 등. he, the는 안 됨.
# s?he            he 또는 she.
# ^s?he$  "he" 또는 "she". 한 줄에 이 두가지만이 허용됩니다.
# .*              개행문자를 제외한 모든 글자들.
# ^$              빈 줄/문자열.

# []로 쌓여있는 글자들은 몇 자가 되든 단 한 글자만을 대변하며, 포함된 모든 글자 중 어떤 글자라도 있으면 일치되는 것으로 인정됩니다. 
# []를 character class라고 하더군요.
#
# [st]he  she 또는 the.
# ^[st]he 문자열의 처음에 있는 she 또는 the.
# [a-z]           소문자 한 자. '-'는 between의 의미로 범위를 나타냄.
# [a-zA-Z]        소문자 또는 대문자 한 자.
# [0-9]           십진수 한 자.
# [-0-9]          '-'부호와 십진수 중 한 자. 빼기 부호를 사용하려면
#                 맨 앞에 두어야만 합니다. 안 그러면 범위를 나타내는
#                 '-'부호와 헷갈리겠죠 ?
# [0-9a-fA-F]     십육진수 한 자.
# h[eao]y         hey, hay, hoy.
# ^h[eao]y        문자열의 첫머리에 있는 hey, hay, hoy.
# h[^eao]y        hey, hay, hoy를 "제외한" /h.y/. 즉 hiy, hfy, huy 등.
#                 문자클래스(character class)안에서의 ^ 부호는 not 또는
#                 except를 의미합니다.
# [^a-z]          소문자 빼고 모두 다.
# [a-z]+          소문자가 한 자 또는 줄줄이 있는 것들.
#                 w, kdfns, oie, jfowjdngjwerh 등등.
# [tT][hH][eE]    the, thE, tHe, tHE, The, ThE, THe, THE, 등.

# - 수직 막대, | 는 or 부호이고, ()는 글자들의 그룹입니다. -
# /clean|dirty/           clean 또는 dirty
# (eg|le)gs               eggs 또는 legs
# ba(na)+                 bana, banana, bananananana


# - 특수문자들도 유용합니다. -
# \n      개행문자.
# \t      탭.
# \w      문자 또는 숫자. [a-zA-Z0-9]와 같습니다.
# \W      \w가 아닌 것. [^a-zA-Z0-9]와 같습니다.
# \d      십진수. [0-9]와 같습니다.
# \D      십진수 아닌 것. [^0-9]와 같습니다.
# \s      공백문자. space, 탭, 개행문자 등.
# \S      공백문자 아닌 것.
# \b      단어의 경계(boundary). [ ]의 바깥에서만 사용.
#         "the green grass of home"의 \bthe\b, \bgreen\b,
#            \bgrass\b, \bof\b, \bhome\b.
#         \bthe\b와 \bhome\b도 포함됨에 유의하세요.
# \B      단어의 경계가 아닌 것.

# - {}는 문자, 그룹의 개수를 지정합니다. -
# ba(na){2}       banana만 해당.
# ba(na){1,2}     bana, banana만 해당.
# ba(na){2,5}     banana, bananana, banananana, bananananana만 해당.
# o{2,4}p         oop, ooop, oooop.