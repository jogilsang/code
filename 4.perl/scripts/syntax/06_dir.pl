#!/usr/local/bin/perl
# 06 dir.pl

# readdir.pl

opendir(dirHandle, ".") || die "Failed opening.\n";
@files = readdir( dirHandle );
closedir dirHandle;  # 꼭 닫읍...

print @files;    # 알아먹기 힘들게 프린트됩니다.
print "\n";

print "@files";  # 이것은 볼만하지요 ?  잠깐 말씀 드린 적이
                 # 있는데 배열이 치환될 때에 각 요소 사이에
                 # 공백이 하나씩 들어갑니다.
print "\n";
