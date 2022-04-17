

#### v-on:click="setQuestion(row, index)"
`클릭 했을경우, 함수실행`

#### v-for="(item, row) in data.questions" v-bind:key="item.key"
`element를 반복하게 해줌`
```
    <ul>
      <li v-for="(item, row) in data.questions" v-bind:key="item.key">
      </li>
    </ul>
```














