

https://www.youtube.com/watch?v=6C9zyLioTOU

대시보드
어드민
웹지면
트랙커
랜딩페이지
프랜트앤드 기술은 사용됩니다

본격적으로 말씀드리고싶은 내용은
api에 대한 내용을 말씀드릴게요
어플리케이션 프로그래밍 인터페이스가 있습니다
네트워크 api가 떠오르실테고
플랫폼 api 라이브러리api, os api 가 있습니다

추상과 구체를 분리하여 중요하지 않은 것들에
종속되지않으면서 기능을 사용할수있따
서버가 무슨언어로 되어있는지 알필요가없다
나에게 당장 중요한걸 몰라도 사용할수있는 기술이다

restapi부터 시작했습니다.
리소스 중심으로 구성되며
http 메소드로 각 엑션을 구현합니다
포맷은 json과 xml을 사용합니다
장점은 학습과 사용이 쉽습니다
어떤 URL의 요청을 보내면 받은response를
바로 쓸수있습니다
파싱을 할필요도없습니다

하지만 문제점이있었습니다
우리는 배포한게 없고, 변한게 없는데
고장이 났어요
서버에서 무언가 바꿨대요
api스펙이 변경이 됬어요
프론트엔드 팀으로서는 억울할수있습니다
고객들은 늘 찾는건 프론테은드를 찾습니다
자유도가 너무 높아서 스스로 결정해야될게 많습니다
api 버저닝도 있습니다. 손이 많이갑니다
따로 문서를 만들어서 관리하기쉽지만
코드와 문서가 멀리 떨어질수록
이 문서는 죽은문서가 될수있습니다
사용자들은 더이상 문서를 신뢰하지않습니다

openapi를 검토하게됬습니다
openapi는 어떤 필드가 필수다 아니다
타입으로 스트링이다 인트다
할수가있습니다
더욱 중요한 개념은 api우선접근이있습니다
핑퐁을 하다가 많은 것들이 동시에 바뀝니다
api에 대한 규격을 먼저정의하는것이 api 우선접근입니다.
그러면 일반문서랑 뭐가다른거야
라고 하실수있습니다
가장 중요한건 머신리더블 인터페이스입니다
openapi는 기계가 이해할수있습니다
클라이언트가 사용할수있는 클라이언트 라이브러리를 빌드할수있꾸요
서버스텁을 만들수도있구요
즉 IDL변경없이 서버API변경을 불가하게 할수있습니다

그러면 api정의파일은 어떻게관리할가요
잘 관리해야만 서버와 싱크를 할수있짢아요
api정의를 한곳에 모아두는 모노리포를 모아둡니다
버전이 올라가면 ci/cd프로세스가 해당 idl을
각 언어로 컴파일해서 각 패키지로 배포합니다

openapi는 서버디펜던시가 대폭감소됩니다
클라이언트 라이브러리 빌드가 불필요합니다
버져닝이있습니다
근데 openapi는 restapi를 정의하는거기때문에
연장선상에 있습니다
가독성이 아쉽고, 버전규칙이 필요합니다
시맨틱 버저닝을 따라간다고 했을때, 이게 버저닝을
잘 따라가는지는 개발자들이 관리해야합니다

legacy는 나쁜건아니지만, 상속세가있따

graphql도 핫해서 설명드리는게 불필요할거같아요
api를 위한 쿼리언어입니다
서버에서 어떤 스키마를 정의하고
클라이언트에서 원하는 데이터만 쿼리해서 떙겨옵니다
서버에서는 나이나 다른 어트리뷰트도있겠지만
네트워크 비용도 낮추고,복잡성도 낮춥니다
하나의 네트워크요청으로 받을 수 있는게 장점입니다
버전없이 api를 진화했습니다
즉 버저닝이 필요없다는것입니다
서버는 graphql 스키마를 계속 확장하면됩니다

하나의 네트워크 요청으로 여러 리소스 로드가능
마이크로서비스는 

클라이언트 쪽 쿼리 구성으로 인해 코드가 많아짐
하나의 api에서 한번에 여러 서비스를
호출할 일이 생각보다 많지않음

protobuf로 부터 graphql schema를 좀 더 쉽게 빌드하는 도구를 찾습니다

하나의 답은 없고, 상황에 맞는 선택을 해야합니다

