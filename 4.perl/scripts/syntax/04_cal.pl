#!/usr/local/bin/perl
# 04 cal.pl

@a = (1,2,3);
$b = 3;

$b = $a; # ...
print '$b=$a : ',"$b", "\n";

$b = @a; #배열 사이즈
print '$b = @a : ',"$b", "\n";

$b = "@a"; #하나의 공백을 사이에 두고 순서대로 연결되어 저장
print '$b = "$@a" : ',"$b", "\n";
print '$b[2] : ',$b[2], "\n";
print '@b[2] : ',@b[2], "\n";

@c = @a;
print '@c = @a : ', "@c", "\n";

# $b=$a :
# $b = @a : 3
# $b = "$@a" : 1 2 3
# $b[2] :
# @b[2] :
# @c = @a : 1 2 3

print "\n";

$a = "hello"."world";
print "hello . world : " , $a, "\n";
$a = "hello" x 5;
print "hello x 5 : " , $a, "\n";
$a = "hello";
$a .= " world";
print '$a = "hello"',"\n";
print '$a .= " world" : ' , $a, "\n";

# hello . world : helloworld
# hello x 5 : hellohellohellohellohello
# $a = "hello"
# $a .= " world" : hello world

print "\n";

$a = 5; 
$b = 2;
$max=0;
$a > $b && ( $max = $a ); # "그러할 경우에"
print '$a > $b && ( $max = $a ) : ', "$max","\n";
$a <= $b || ( $max = $a ); # "그렇지 않으면"
print '$a <= $b || ( $max = $a ) : ', "$max", "\n";

# $a > $b && ( $max = $a ) : 5
# $a <= $b || ( $max = $a ) : 5

# , 이용한 명령문
# $a = 1, $b = 3, print "@a and @b\n";
