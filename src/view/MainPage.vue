<template>
    <div class="d-flex flex-column container-fluid px-0">
        <!-- Header -->
        <div class="header">

        </div> 

        <div class="row container-fluid px-0">
            <!-- Sidebar -->
            <div class="col-2 pe-0 border-end">
                <Sidebar :isSchedule="true"/>
            </div>

            <div class="content col-10 d-flex flex-row">
                <div class="col content-body">
                    <router-view></router-view>
                </div>

                <!-- Simulator -->
                <div v-if="isSimulator" class="d-flex">
                    <Simulator/>
                </div>
            </div>
        </div>
        <Loader :opacityLoader='0.7'/>  
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Simulator from '../components/Simulator.vue'
import Loader from '../components/Loader.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'MainPage',
    components: {
        Sidebar,
        Simulator,
        Loader
    },
    computed: {
        ...mapGetters({
            isSimulator: 'SIMULATOR/isSimulator'
        })
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 7vh;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    z-index: 4;
}

.content {
    background: #fff;
    padding-left: 20px;
}

.content-body {
    height: 93vh;
    overflow-y: auto;
    padding-right: 30px;
}
</style>