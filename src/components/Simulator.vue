<template>
    <div id="simulator">
    <Pixel4/>
    </div>
</template>

<script>
import Pixel4 from '../components/Pixel4.vue'
export default {
    name: 'Simulator',
    components:{
        Pixel4
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
#simulator {
    width: 20vw;
    height: 100%;
    background-color: #fff;
    margin-left: 0;
    padding: 10px;
}
</style>