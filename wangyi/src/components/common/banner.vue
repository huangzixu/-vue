<template>
    <div class="">
        <div class="oo"></div>
        <div class="swiper-container banner">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <img src="http://p1.music.126.net/Jp6yvwYLiY_1NaaY-bmgiQ==/109951163747807381.jpg" alt="">
                </li>
                <li class="swiper-slide">
                    <img src="http://p1.music.126.net/3FAubLoTACnQPX0--rc_2Q==/109951163749719226.jpg" alt="">
                </li>
                <li class="swiper-slide">
                    <img src="http://p1.music.126.net/YdaBUHysTlduRtTAttr2-g==/109951163750039319.jpg" alt="">
                </li>
                <li class="swiper-slide">
                    <img src="http://p1.music.126.net/l9GBHNqW9iDeYQD4C3DbWQ==/109951163750034086.jpg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"; 
import "swiper/dist/css/swiper.min.css";
export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      }
}
</script>

<style>
.oo{
    width: 100%;
    height: 100px;
    background: #444;
}
.banner{
    width: 100%;
    height: 164px;
    overflow: hidden;
    position: absolute;
    top:0;
    left:0;
    display: flex;
    flex-wrap: nowrap;
}
img{
    width: 100%;
    border-radius: 5px;
}
</style>
