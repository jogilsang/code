
### Reference

- [정규식사용VSCode](https://docs.microsoft.com/ko-kr/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2022)

### Regular Expression ???
```
stephen cole kleene, 1951 
grep, sed, awk
```

### Example
#### JIRA issue key
`EX : CI-100, NOWRAP-8670, JENKINS-200, SPACE : 1`
```perl
my $target = 'NOWRAP-8670 : tested code commited';
my $match = $target =~ /([A-Z]*)-([1-9]?[0-9]*)/g;
```

#### 여러개 숫자로 시작하는 문장
`EX : 1. 선택정렬을 설명하고, 코드로 구현해보세요`   
`EX : 22. 동적계획법은 무엇인가요?`
```regex
^([0-9]+). .*
```

#### 숫자와 _ 추출하기
`EX : 9_20210627_잠실`   
`EX : 10_20210630_서울`
```
(^[0-9]{0,2}._)
```

### 한줄에 2단어가 포함되는 줄 찾기
`EX : 공백이 포함되고 alert와 oms, OMS 단어`
```
^(\s).*alert.*(OMS).*(\);)
```
