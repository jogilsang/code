
#!/usr/local/bin/perl
# 12_arr.pl

@arr = ( 3, 7, "Not number", 8, "String" );
@arr2 = @arr[1..3];   # 배열에 배열을 복사합니다.
$n = 4;

print "@arr\n";   # ""로 출력하면 각요소 사이에
                  # 공백이 들어간다고 했습니다.
print "@arr[1..$n]\n";
print "@arr2\n";
print "$arr2[1]\n";

print "\n";

@arr3 = (1,2,3,4,5);
$value1 = 6;
$value2 = 7;

@arr4=(@arr3,$value1, $value2);

print '@arr3 : ',"@arr3";
print "\n";
print '@arr4 : ',"@arr4";

# @arr3 : 1 2 3 4 5
# @arr4 : 1 2 3 4 5 6 7

($a,$b,$c,$d,$e) = @arr3;
print "\n";
print '$a : ',"$a","\n" ;
print '$b : ',"$b","\n" ;
print '$c : ',"$c","\n" ;
print '$d : ',"$d","\n" ;
print '$e : ',"$e","\n" ;

# $a : 1
# $b : 2
# $c : 3
# $d : 4
# $e : 5
print "\n";
print 'before shift,pop : ',"@arr3","\n" ;
$firstData = shift( @arr3 ); # 첫번째 요소는 $firstData에
                                 # 할당된 후 사라집니다.
$lastData  = pop( @arr3 );   # 마지막 요소가 $lastData에
                                 # 할당된 후 사라집니다.
print '$firstData : ',"$firstData","\n" ;
print '$lastData : ',"$lastData","\n" ;

print 'after shift,pop : ',"@arr3","\n" ;

print "\n";
@arr = ( 1, 2, 3, 4, 5, 6 );

# while
# pop을 shift로 바꾸어서도 해보세요.
while( $elem = pop( @arr ) )  
  {  print "$elem\n";  }

print "BOOM ! @arr\n";
print "\n";

# 6
# 5
# 4
# 3
# 2
# 1
# BOOM !

# 배열에 변수를 넣을수도있고, 배열도 넣을수있음
@arr = ( 1, 2, 3, 4, 5, 6 );
$first = shift( @arr );
push( @arr, "last" );
push( @arr, "again", "more" );
@arr3 = ( "not", "again" );
push( @arr, @arr3 );
push( @arr, ( "Oh,", "stop", "it !" ) );
print "$first @arr\n";

# 1 2 3 4 5 6 last again more not again Oh, stop it !