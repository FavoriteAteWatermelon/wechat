<template>
  <div class="category">
    <div class="title">{{title}}</div>
    <div class="content">
      <div class="item" v-for="item in list" :key="item.txt">
        <img :src="item.src" alt="">
        <span>{{item.txt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  .title {
    font-size:  12px;
    color: #777;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 80px;
      width: 25%;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 12px;
        color: #333;
      }
    }
  }
}
</style>
