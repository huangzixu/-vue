<template>
  <div class="footer">
        <router-link v-for="(val,index) in footerin" :key="index" :to="val.url" tag="dl">
            <dt :class="val.icon"></dt>
            <dd>{{val.title}}</dd>
        </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerin: [
        {
          icon: "iconfont icon-07",
          title: "发现",
          url:"/"
        },
        {
          icon: "iconfont icon-tian",
          title: "视频",
          url:"/shi"
        },
        {
          icon: "iconfont icon-douban1",
          title: "我的",
          url:"/mine"
        },
        {
          icon: "iconfont icon-shezhi",
          title: "朋友",
          url:"/friend"
        },
        {
          icon: "iconfont icon-shezhi",
          title: "账号",
          url:"/zhang"
        }
      ]
    };
  }
};
</script>

<style>

</style>
