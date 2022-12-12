
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

#### 숫자와 . 공백 일괄선택하기
`EX : 1. 22. 33. 1123213. `
```regex
^[0-9].*\. 
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

### .../.../... 한개 가져오기
state가 alerting인경우, resourceName을 가져올 수 있습니다
```
^([a-zA-Z0-9])+\/([a-zA-Z0-9\-])+\/([a-zA-Z0-9,]){1,16}
```
![image](https://user-images.githubusercontent.com/20831981/207009419-239a7546-0fac-4243-8ffc-8c38ebff3f95.png)


### .../.../... 여러개 가져오기

```
([a-zA-Z0-9])+\/([a-zA-Z0-9\-])+\/([a-zA-Z0-9])+
```
![image](https://user-images.githubusercontent.com/20831981/207009261-1f05af5d-0d5c-4266-a421-c6f1d05d5329.png)






