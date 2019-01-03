<template>
    <div class="ooooo">
        <Banner></Banner>
        <Nav></Nav>
        <nei></nei>
    </div>
</template>

<script>
import Banner from '../common/banner';
import Nav from '../common/nav';
import nei from './nei';
export default {
    components:{
        Banner,
        Nav,
        nei
    }
}
</script>

<style>
.ooooo{
    width:100%;
    flex: 1;
    overflow: auto;
    position: relative;
}

</style>

