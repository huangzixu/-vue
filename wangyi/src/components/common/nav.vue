<template>
  <div class="nav">
    <dl v-for="(val,index) in navlist" :key="index">
      <dt :class="val.icon"></dt>
      <dd>{{val.title}}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navlist: [
        {
          icon: "iconfont icon-07",
          title: "私人FM"
        },
        {
          icon: "iconfont icon-tian",
          title: "每日推荐"
        },
        {
          icon: "iconfont icon-douban1",
          title: "歌单"
        },
        {
          icon: "iconfont icon-shezhi",
          title: "排行榜"
        }
      ]
    };
  }
};
</script>

<style>
@import "../../fonts2/iconfont.css";
.nav{
    width: 100%;
    height: 100px;
    display: flex;
    margin-top:80px;
    border-bottom:solid 1px #ccc;
}
.nav dl{
    width: 25%;
    height: 80px;
    text-align: center;
}
.nav dl dt{
    display: inline-block;
    font-size: 20px;
    padding: 15px;
    background: #666;
    border-radius: 50%;
    color:#fff;
}
.nav dl dd{
    padding-top:10px;
    font-size: 14px;
}
</style>
