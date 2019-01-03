<template>
    <div class="header">
        <div class="top">
            <span class="iconfont icon-yuyin"></span>
            <input type="text" placeholder="猜你喜欢 浮生">
            <span class="iconfont icon-gengduo"></span>
        </div>
        <ul class="con" >
            <div v-for="(val,index) in dataL" :key="index">
                <router-link tag="li" :to="val.url">{{val.tit}}</router-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataL:[{
                id:0,
                tit:"个性推荐",
                url:"/"
            },{
                id:1,
                tit:"主播电台",
                url:"/home/two"
            }]
        }
    }
}
</script>

<style>
@import '../../fonts2/iconfont.css';
.header{
    width: 100%;
    height: 88px;
    background: #444;
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 44px;
    color: #fff;
}
.top{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
}
.top input{
    flex: 1;
    margin: 0 10px;
    border-radius: 20px;
    height: 30px;
    text-align: center;
    border: none;
    outline: none;
    background: #777;
    margin-top:8px;
    color: #ccc;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#ccc;
}
.con{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
}
.con div{
    width: 50%;
    text-align: center;
    font-size: 15px;
}
 .active{
     border-bottom: solid 2px #ccc;
 }
</style>
