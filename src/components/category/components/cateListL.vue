<template>
  <!-- 左边 -->
  <div class="l-content wrapper">
    <ul>
      <li
        v-for="(item,index) in cateList"
        :key="index"
        :class="currentIndex == index? 'on':'' "
        @click="changeCata(index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { getCateList } from "@/api/index.js";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      cateList: [],
      currentIndex: 0
    };
  },
  methods: {
    changeCata(index) {
      this.currentIndex = index;
      console.log(this.currentIndex)
    }
  },
  created() {
    getCateList().then(data => {
      this.cateList = data.result.data;
      this.$nextTick(() => {
        new BScroll(".wrapper");
      });
    });
  }
};
</script>
<style lang="less">
.l-content {
  height: 100%;
  ul {
    color: #333;
    li {
      width: 158px;
      height: 96px;
      text-align: center;
      line-height: 96px;
      font-size: 30px;
      background: #f0f0f0;
      position: relative;
      &::after {
        content: "";
        width: 100px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 29px;
        background: #dddddd;
      }
    }
    .on {
      // height: 96px;
      // width: 4px;
      background: #ffffff;
      color: #f20c59;
      &::after {
        content: "";
        width: 6px;
        height: 100px;
        position: absolute;
        left: 0;
        background: #f20c59;
      }
    }
  }
}
</style>
