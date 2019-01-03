<template>
  <div class="pric">
    <dl v-for="(val,index) in prc" :key="index">
      <dt>
        <span >+</span>
      </dt>
      <dd>{{val.tit}}</dd>
    </dl>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      prc: [
        {
          id: 0,
          tit: "身份证正面"
        },
        {
          id: 1,
          tit: "身份证反面"
        },
        {
          id: 2,
          tit: "驾驶员正页"
        },
        {
          id: 3,
          tit: "驾驶员副页"
        },
        {
          id: 4,
          tit: "白底半身照"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pric {
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 10px;
  margin-bottom: 10px;
  background: #fff;
  dl {
    width: 20%;
    height: 100px;
    padding:0 7px;
    text-align: center;
    box-sizing: border-box;
   dt {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: solid 2px #eee;
      border-radius: 4px;
      span {
        width: 30px;
        height: 30px;
        display: inline-block;
        text-align: center;
        line-height: 25px;
        border: solid 2px #ccc;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
  }
}
</style>

