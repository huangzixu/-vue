<template>
    <div class="main">
        <Banner></Banner>
        <Nav></Nav>
        <List></List>
        <SwiperTwo></SwiperTwo>
    </div>
</template>

<script>
import Banner from './banner';
import Nav from './nav';
import List from './list';
import SwiperTwo from './swiperTwo';
export default {
    components:{
        Banner,
        Nav,
        List,
        SwiperTwo
    }
}
</script>

<style scoped>
.main{
    width:100%;
    flex: 1;
    overflow: auto;
    position: relative;
}

</style>
