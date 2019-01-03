<template>
  <div class="type">
    <ul>
      <li v-for="(val,index) in list" :key="index">
        <p>{{val.info}}</p>
        <span @click="typeClick(index)" ref="changeType">{{val.right}}</span>
      </li>
    </ul>
    <section class="propy">
      <van-popup v-model="showType" overlay>
        <van-picker :columns="typeArray" show-toolbar title="服务样式" @cancel="cancelType" @confirm="confirmType" />
      </van-popup>
    </section>
    <a href="javascript">常见问题</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showType:false,
      typeArray:['换驾照','补驾照'],
      form:{
        type:""
      },
      list: [
        {
          id: 0,
          info: "服务类型",
          right: "换驾照"
        },
        {
          id: 1,
          info: "当前驾照签发城市",
          right: "请选择签发地"
        },
        {
          id: 2,
          info: "可补换的城市",
          right: "请选择补换地"
        },
        {
          id: 3,
          info: "服务费",
          right: "￥399"
        },
        {
          id: 4,
          info: "优惠",
          right: "登录后查看"
        }
      ]
    };
  },

  methods:{
      typeClick(index){
        index===0?this.showType=true:"";
        index===1?console.log(11):""
      },
      cancelType(){
        this.showType=false
      },
      confirmType(value){
        // this.form.type=value;
        this.$refs.changeType[0].innerHTML=value
        this.cancelType()
      }
  },
  mounted(){
    fetch("/api/ExchangeJiaZhao/getCostList?order_type=1&city_id=110100000000&province_id=110")
  }
};
</script>

<style lang="scss" scoped>
.type {
  width: 100%;
  height: auto;
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
      &:nth-child(4) {
        margin-bottom: 10px;
        span {
          color: #f00;
        }
      }
      &:nth-child(2),&:nth-child(3){
          span{
              color:#999;
          }
      }
    }
  }
  .van-popup{
    width: 50%;
    border-radius: 10px;
  }
  a{
      width: 100%;
      text-align: center;
      display: inline-block;
      line-height: 40px;
  }
}
</style>

