

<template>
  <div class="product">
    <h1>상품정보</h1>
    <p>이 페이지는 ID.{{id}}의 상세를 출력합니다.</p>
  </div>
</template>

<script>

export default {
  props: {id : Number}
}

console.log("test");
</script>