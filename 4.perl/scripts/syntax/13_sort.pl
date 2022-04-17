
#!/usr/local/bin/perl
# 13_sort.pl
# sort 함수는 배열을 ASCII 순으로 정렬하여 반환합니다.


@array = ( 'daemon', 'cat', 'tail', 'banana', 'camel' );
@sarray = sort @array;
print "@sarray\n"; # 출력된 내용은 'banana camel cat daemon tail' 입니다.

@narray = ( 342, 256, 2, 29, 38, 4, 12 );
@nsarray = sort @narray; 
print "@nsarray\n"; 
# 출력된 내용은 '12, 2 , 256 , 29,  342, 38, 4' 입니다.

@narray = ( 342, 256, 2, 29, 38, 4, 12 );
@nsarray = sort {$a <=> $b} @narray; 
print 'sort {$a <=> $b} : ',"@nsarray\n"; 
# 출력된 내용은 '2 4 12 29 38 256 342' 입니다.

@nsarray = sort {$b <=> $a} @narray; 
print 'sort {$b <=> $a} : ',"@nsarray\n"; 
# 출력된 내용은 '342 256 38 29 12 4 2' 입니다.

$text=<<EOT;
index.html 354
welcome.html 13
sitemap.html 27
product.html 297
service.html 120
board.cgi 75
EOT

chomp $text; # 맨 끝의 \n을 없애 줍시다. 편의상...
@array = split /\n/, $text;
@sarray = sort { &csort($b,$a) } @array; # 카운터가 많은 순으로 비교해 봅시다.
print join( "\n", @sarray, '' );

sub csort {
	my( $ta, $tb ) = @_;
	my( $pa, $ca ) = split / /, $ta;
	my( $pb, $cb ) = split / /, $tb;
	$ca <=> $cb; # 카운터 값을 비교한 값을 반환합니다.
}