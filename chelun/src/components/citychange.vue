<template>
    <ul>
      <li v-for="(val,index) in citylist" :key="index">
        <p>{{val.info}}</p>
        <span @click="typeClick(index)" ref="changeType">{{val.right}}</span>
      </li>
    </ul>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data() {
    return {
      citylist: [
        {
          id: 0,
          info: "当前驾照签发城市",
          right: "请选择签发地"
        },
        {
          id: 1,
          info: "可补换的城市",
          right: "请选择补换地"
        },
        {
          id: 2,
          info: "服务费",
          right: "￥399"
        },
        {
          id: 3,
          info: "优惠",
          right: "登录后查看"
        }
      ]
    };
  },
  methods:{
      typeClick(type){
          console.log(type)
      }
  }
};
</script>

<style lang="scss" scoped>
ul {
    width: 100%;
    height: auto;
    li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      padding: 0 10px;
      box-sizing: border-box;
      background: #fff;
      p {
        flex: 1;
      }
      &:nth-child(3) {
        margin-bottom: 10px;
        span {
          color: #f00;
        }
      }
      &:nth-child(1),&:nth-child(2){
          span{
              color:#999;
          }
      }
    }
  }
</style>

