var app = new Vue({
    el: '#app', // id
    data: {
        message: 'hello Vue.js' // {{ }}
    }
})

// console : app_2.list.push('오렌지')
var app_2 = new Vue({
    el: '#app_2', // id
    data: {
        list: ['사과', '바나나', '딸기']
    }

})

// console : app_3, 이벤트 사용하기
// result : [object HTMLButtonElement]
var app_3 = new Vue({
    el: '#app_3', // id
    methods: {
        handleClick: function (event) {
            alert(event.target)
        }
    }
})

// app_4 : 동기화
// result : 초기 메세지 dfdfdfdf df
var app_4 = new Vue({
    el: '#app_4', // id
    data : {
        message : '초기 메세지',
        count : 5
    }
})

// app_5 : 조건분기
// result : v-if 디렉티브 사용 시, 조건분기를 실시
var app_5 = new Vue({
    el: '#app_5', // id
    data : {
        show : true
    }
})

// app_6 : 트랜지션
// result : v-if 디렉티브 사용 시, 조건분기를 실시
var app_6 = new Vue({
    el: '#app_6', // id
    data : {
        show : true
    }
})

// app_7 : 데이터 변경
// result : 클릭으로 카운트 수 늘려보기
var app_7 = new Vue({
    el: '#app_7', // id
    data : {
        count : 1
    },
    methods : {
        increment : function () {
            this.count += 1;
        }
    }
})

//
// app_8 : 클래스와 스타일 데이터 바인딩
// 
var app_8 = new Vue({
    el: '#app_8', // id
    data : {
        isChild : true,
        isActive : true,
        textColor : 'red',
        bgColor : 'lightgray',
        styleObject : {
            color : 'red',
            backgroundColor:'lightgray'
        }
    }
})

// 
// app_9 : v-if, v-else-if, v-else
// 
var app_9 = new Vue({
    el : '#app_9',
    data : {
        type : 'B'
    }
})

//
// app_10 : $el, $ref
// 컴포넌트로 만든 <canvas> 요소로 접근할 때 사용

var app_10 = new Vue({
    el : '#app_10',
    mounted : function() {
        console.log(this.$el)
        console.log(this.$refs.hello) // p 요소를 DOM으로 다룰 수 있음
    }
})

console.log(app.message)