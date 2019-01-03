<template>
    <div class="list">
        <div class="listtit1">
            <h4>推荐歌单</h4>
            <span class="iconfont icon-angle-right"></span>
        </div>
        <div class="toplist1">
            <dl v-for="(val,index) in list" :key="index">
                <dt><img :src="val.img" alt=""></dt>
                <dd>{{val.info}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                id:0,
                img:"http://p1.music.126.net/H9dJuU5ZGiusoQbnSgijrA==/109951163746048762.jpg?param=140y140",
                info:"时光匆匆，一年不知不觉又要过去了"
            },{
                id:1,
                img:"http://p2.music.126.net/VSHLOoUEg4pdd5lXvxCOnQ==/109951163747716978.webp?imageView&thumbnail=247x0&quality=75&tostatic=0&type=webp",
                info:"电子汽水 | 气泡节奏颠覆感官"
            },{
                id:2,
                img:"http://p2.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.webp?imageView&thumbnail=247x0&quality=75&tostatic=0&type=webp",
                info:"温柔暴击 | 沉溺于男友音的甜蜜乡"
            },{
                id:3,
                img:"http://p2.music.126.net/Fs0DjAvcAAyAZa1dgXzFfQ==/109951163571833739.webp?imageView&thumbnail=247x0&quality=75&tostatic=0&type=webp",
                info:"听说你也在找好听的华语歌"
            },{
                id:4,
                img:"http://p2.music.126.net/M52Xkv5BdKkOu2PGaZv8WA==/109951163703748277.webp?imageView&thumbnail=247x0&quality=75&tostatic=0&type=webp",
                info:"遥不可及 | 还有多远才能进入你的心"
            },{
                id:5,
                img:"http://p2.music.126.net/1N8HiCwgY7DqO-wILpJTeQ==/3438172872014843.webp?imageView&thumbnail=247x0&quality=75&tostatic=0&type=webp",
                info:"惊艳耳朵的华语女声翻唱"
            }]
        }
    }
}
</script>

<style scoped>
.list{
    width: 100%;
    height: auto;
    padding: 0 10px;
    box-sizing: border-box;
}
.list>.listtit1{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
}
.listtit1>span{
    font-size: 20px;
    padding-top:3px;
}
.toplist1{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.toplist1>dl{
    width: 32%;
    height: 150px;
}
.toplist1>dl>dt {
    width: 100%;
}
.toplist1>dl>dt>img{
    width: 100%;
}
.toplist1>dl>dd{
    font-size: 12px;
    padding: 0 4px;
}
</style>
