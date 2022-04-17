

#!/usr/bin/perl

# Function definition

sub Hello {
    print "Hello, World!\n";
}

# Function call
Hello();

# _가 param의 배열명
sub Average {
    # get total number of arguments passed.
    $n = scalar(@_);
    # $n = $#_+1;
    $sum = 0;

    foreach $item (@_) {
        $sum += $item;
    }
    $average = $sum / $n;

    print "Average for the given numbers : $average\n";

    return $average;
}

$average = Average(10,20,30,50,60);

sub PrintList {
    my @list = @_;
    print "Given list is @list\n";
}

sub PrintList {
    my @list = @_;
    print "Given list is @list\n";
    print "Given list is @_\n";
}
$a =10;
@b= (1,2,3,4);

PrintList ($a, @b);

sub PrintHash {
    my (%hash) = @_;

    foreach my $key ( keys %hash ) {
        my $value = $hash{$key};
        print "$key : $value\n";
    }
}

%hash = ('name' => 'Tom', 'age' => 19);
PrintHash($hash);


