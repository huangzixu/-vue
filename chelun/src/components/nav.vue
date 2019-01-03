<template>
    <div class="nav">
        <ul>
            <li  v-for="(val,index) in navlist" :key="index">{{val.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navlist:[{
                id:0,
                name:"订单提交"
            },{
                id:1,
                name:"填写收货地址"
            },{
                id:2,
                name:"正在办理"
            },{
                id:3,
                name:"办理完成"
            }]
        }
    }
}
</script>

<style lang="scss">
.nav{
    width: 100%;
    height: 44px;
    background: #fff;
    ul{
        width: 100%;
        height: 44px;
        display: flex;
        li{
            width: 25%;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            text-align: center;
            color:rgb(113, 113, 248);
        }
    }
}

</style>
