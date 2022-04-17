
### Perl 문서보기
```perl
perldoc perl
```

#### 날짜구하기, 날짜연산하기
```
use Time::Piece;
use POSIX qw/strftime/;

    my $rightnow = time - (24 * 60 * 60 * 7);
    my $datestring = (localtime $rightnow)->strftime('%F');
    print $datestring."\n";
    // 출력 : 2021-07-08

    $due_date = localtime->strftime('%F');
    print $due_date."\n";
    // 출력 : 2021-07-15
```
