#!/usr/local/bin/perl
# 03 print.pl

print <<end_of_hello;
Hello world.\n
I am here to serve you but not to conquer.
There were many kings and queens in the world,
but I want to be a real friend of yours.
end_of_hello

print "Ending our greeting\n";

# Hello world.

# I am here to serve you but not to conquer.
# There were many kings and queens in the world,
# but I want to be a real friend of yours.
# Ending our greeting

print "Say yes or no : ";
$answer = <STDIN>;
chomp $answer; # $answer 뒤의 \n을 잘라낸다.

if( $answer eq 'yes') {
    print <<EOY;
you said $answer.
i wll keep going on.
EOY
}
else {
    print"you said 'no.'\n";
}

# ``은 시스템명령으로 간주되어 실행

print "cd : ", `cd`, "\n";

@heys = ( "Hello", "there", "I\'m", "O.K.", "\n" );

print @heys; # HellothereI'mO.K.
print "@heys"; # Hello there I'm O.K.
print '@heys'; # @heys

%fruits = ( "apple", 3, "pear", 5, "banana", 2 );
print "%fruits\n"; # %fruits