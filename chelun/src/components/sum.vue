<template>
    <div class="sum">
        <p>实付：<span class="sumprice">￥399</span></p>
        <span>立即支付</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .sum{
        width:100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        left:0;
        background: #fff;
        p{
            flex: 1;
            line-height: 50px;
            padding-left:10px;
            box-sizing: border-box;
            span{
                color:#f00;
            }
        }
        >span{
            display: inline-block;
            width: 100px;
            height: 50px;
            line-height: 50px;
            background: #777;
            color:#fff;
            text-align: center;
        }
    }
</style>

