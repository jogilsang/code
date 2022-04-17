
#!/usr/local/bin/perl
# 08 for.pl

for( $i = 0; $i < 109; $i++ )
{
  print "hit";
}

  print "\n";

for (1..109){
     print "hat";
}

  print "\n";

# 일반변수가 안보여미녀, $_ 할당
for (1..10," hello ", "world ", "again\n"){
     print($_);
}

# 12345678910 hello world again

@arr = (1,2,3,4,5,6);

print 'foreach $i (0..$#arr) : ', "\n";

foreach $i (0..$#arr) {
    print @arr[$i]; # 각 요소는 일반변수이므로
                           # @가 아닌 $를 붙인다 했습니다.
    print "\n";
}

# foreach $i (0..$#arr) :
# 1
# 2
# 3
# 4
# 5
# 6

%hash = (
"apple",3,
"pear",10,
"banana",4,
"monkey",2,
);

$total=0;
print 'foreach $key (keys %hash) : ', "\n";
foreach $key (keys %hash) # key라는 함수는 hash의 '키'들
                              # 만을 모아 배열로 묶어줍니다.
{
    print "$Key\t", $hash{$key}, "\n";
    $total += $hash{$key};
}

print "\nTotal\t$total\n"; # \t는 탭입니다.

# foreach $key (keys %hash) :
#         10
#         4
#         2
#         3