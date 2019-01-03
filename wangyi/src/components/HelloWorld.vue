<template>
  <div class="home">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./common/header"
export default {
  components:{
    Header
  }
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
