<template>
    <div id="loader" v-bind:style="{opacity: opacityLoader}"  v-if="isLoading">
        <div id="image">

        </div>
        <h1 class="text-center">Loading...</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Loader',
    props: {
        opacityLoader: Number,
    },
    computed: {
    ...mapGetters({
        isLoading: 'LOADER/isLoading'
    })
  }
}
</script>

<style lang='scss' scoped>
    #loader {
        background: #FBFBFB;
        height: 100%;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-content: center;
        z-index: 50;
    }
    #image {
        // background: #FBFBFB url('../assets/Golang-Loader.gif') no-repeat center center;
        background: #FBFBFB url('https://res.cloudinary.com/dactech/image/upload/v1626362968/samples/golang_dgio_project/Golang-Loader_r9des1.gif') no-repeat center center;
        background-size: 40%;
        height: 100%;
        width: 100%;
        position: relative;
        right: 5%;
        bottom: 3%;
        z-index: 51;
    }
    h1 {
        width: 100%;
        color: #53D1EA;
        position: absolute;
        bottom: 20%;
        z-index: 52;
        font-weight: 700;
        font-size: 3rem;
    }
</style>