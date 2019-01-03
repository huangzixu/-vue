<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/common/footer';
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
@import "./fonts2/iconfont.css";
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  #app{
    display: flex;
    flex-direction: column;
  }
  #app router-view{
    flex: 1;
  }
.footer {
  width: 100%;
  height: 44px;
  background:rgba(255, 255, 255, .6);
  display: flex;
  /* position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1; */
  
}
.footer dl{
    width:20%;
    text-align: center;
}
.footer dl dt{
    font-size: 20px;
    padding-top:5px;
    box-sizing: border-box
}
.footer dl dd{
    font-size: 12px;
}
</style>
