<template>
  <div id="app">
    <!-- <button @click="login">点击登录</button> -->
    <Nav></Nav>
    <img src="http://gw.alicdn.com/imgextra/i4/99/O1CN011CbNgMfznWHf5rX_!!99-0-lubanu.jpg" alt>
    <Zhao></Zhao>
    <Type></Type>
    <Sum></Sum>
  </div>
</template>

<script>
const JSBrildge = require("./utils/JSBridge");
import Nav from "./components/nav";
import Zhao from "./components/zhao";
import Type from "./components/type";
import Sum from "./components/sum";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Nav: Nav,
    Zhao: Zhao,
    Type: Type,
    Sum: Sum
  },
  methods: {
    // login(){
    //   // attrs['loginCalBackName']=function(json){
    //   //   alert("登录回调成功")
    //   // };
    //   chelunJSBridge.invoke('app','login',{
    //     loginCalBackName:(res)=>{
    //       console.log('res...',res)
    //     }
    //   })
    // }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #eee;
}
#app > img {
  width: 100%;
}
</style>
