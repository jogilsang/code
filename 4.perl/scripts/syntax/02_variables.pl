#!/usr/local/bin/perl
# 02_variables.pl

# 1. scalar variable. ? : 문자,숫자 등을 포함한 모든 것. -> $test1
$test1=1000;
$test2='2000';
$test3=$test1+$test2;
print "$test3\n";

# print
# 3000

# 2. array. -> @test2
# 배열의 구성요소는 스칼라 변수

@myarray;

$myarray[0]=0; # 0번 굴비에게는 파리 0마리,
$myarray[1]=1; # 0번 굴비에게는 파리 5마리
$myarray[2]="i do not want string";

print "$myarray[2]\n";

# 마지막 참조번호
$lastindex=$#myarray;

print "before lastindex : $lastindex\n";

# 배열사이즈 줄여버리기
$#myarray=1;

$lastindex=$#myarray;

print "after lastindex : $lastindex\n";

# 배열의 이름은 배열의 사이즈
@arr = (1,2,3,"last member");
$size=@arr; print "size : $size\n";

# 3. associative array. (hash)

@myarray = (1,3,5,2,6);
$fourth = $myarray[3]; # 2

%myhash = ("apple",3,"pear",10, "banana",4,"monkey",2);
$howmany = $myhash{"banana"}; # return 4
$howmany = $myhash{"apple"}; # return 3
$myhash{"pear"} = 9; #

print "$myhash{'banana'}\n";
print "$myhash{'pear'}";


