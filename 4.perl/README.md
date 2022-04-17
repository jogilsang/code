# manual-perl


### perl
```
perl은 시스템관리와 텍스트 처리 에 최적화된 언어이다.
shell 같은 스크립트나 awk의 정규표현식,sed의 치환편집 같은 프로그램의 장점을 다 가져왔다
다른 언어들은 어느 수준에 도달해야 원하는 해결책을 만들 수 있지만, perl은 내가 알고있는 수준에 맞는 해결책을 만들 수 있다.
인터프리팅 언어라 전체 개발과정이 짧은 장점이있다.

perl 의 자향점 : 완전함, 사용하기쉬움, 효율성
perl 의 덕목 : 참지말기, 게으름 , 교만

perl은 "hunble language"
Perl이 다른 언어를 누르고 최고의 언어로 군림하려는 것이 아닌, 다른 언어의 부족한 부분을 채우거나, 다른 도구들이 하기 어려운 것을 대체하여 ``일이 되도록'' 하는데 촛점을 맞추고 있기 때문입니다.
```

### perl utf-8
```
use utf8;      # so literals and identifiers can be in UTF-8
use v5.12;     # or later to get "unicode_strings" feature
use strict;    # quote strings, declare variables
use warnings;  # on by default
use warnings  qw(FATAL utf8);    # fatalize encoding glitches
use open      qw(:std :encoding(UTF-8)); # undeclared streams in UTF-8
use charnames qw(:full :short);  # unneeded in v5.16
use Encode qw(decode);

use HTTP::Request::Common qw(POST);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;
```

```
use utf8;      # so literals and identifiers can be in UTF-8
use v5.12;     # or later to get "unicode_strings" feature
use strict;    # quote strings, declare variables
use warnings;  # on by default
use warnings  qw(FATAL utf8);    # fatalize encoding glitches
use open      qw(:std :encoding(UTF-8)); # undeclared streams in UTF-8
use charnames qw(:full :short);  # unneeded in v5.16
use Encode qw(decode);

use HTTP::Request::Common qw(GET);
use HTTP::Request::Common qw(POST);
use HTTP::Status qw(is_client_error);
use LWP::UserAgent;
use JSON;
use JSON qw(decode_json);
use JSON qw(from_json);

use Data::Dumper;
```

### perl 포스팅
```
JSON 활용 : https://blog.naver.com/jogilsang/222290060386
```

### perl 
```
@ECHO OFF
SET TERM=dumb
perl D:\project\svn\test\hooks\post-commit.pl %1 %2 %3
```

### perl을 시작하는 사이트
```
https://perldoc.perl.org/perlko
```

### perl 유니코드
```
https://runebook.dev/ko/docs/perl/perlunicook
```

### Web Sites
https://www.tutorialspoint.com/perl/index.htm  : 외국어
http://perl.apache.org/   
http://www.perl.or.kr/glossary   
https://www.cpan.org/   

