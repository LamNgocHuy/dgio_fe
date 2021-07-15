<template>
    <div>
        <h1 class="content-title">List message contents</h1>
        <div class="accordion w-100" id="accordionSection">
            <div class="accordion-item mb-3">
                <h2 class="accordion-header">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Search Message</button>
                </h2>
                <div class="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionSection">
                    <form>
                        <div class="accordion-body row">
                            <div class="col-10">
                                <div class="row mb-3">
                                    <label class="col-sm-3 text-lg-right">Title</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control">
                                    </div>
                                </div><!-- /.row -->
                                <!-- .row -->
                                <div class="row mb-3">
                                    <label class="col-sm-3 text-lg-right">Message Type</label>
                                    <div class="col-sm-8">
                                        <div class="col-sm-8" data-tooltip="Ctrl+click to choose multiple value">
                                            <input type="text" class="form-control mb-2" readonly v-model="messTypeSelect">
                                            <select class="form-control" multiple v-model="messType" >
                                                <option value="Text">Text</option>
                                                <option value="Imagemap">Imagemap</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><!-- /.row -->
                            </div>
                            <div class="col-2">
                                <input type="submit" class="btn btn-primary" value="Search">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <Table :data='messages' :headers="headers"/>
        <router-link :to="{name: 'MessageCreate'}" class="btn btn-primary mb-2">Create New</router-link>
    </div>
</template>

<script>
import Table from '../components/Table.vue'
import SimulatorMixins from '../mixins/simulator-mixins'
export default {
    name: 'MessageContents',
    components: {
        Table
    },
    computed: {
        messTypeSelect() {
            var str = this.messType.join(', ')
            return str
        }
    },
    data() {
        return {
            messages:[
                {
                    title:"Happy New Year 2022",
                    status: 1,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Birthday To You",
                    status: 5,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Good Morning",
                    status: 2,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"GoodNight",
                    status: 4,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"How are you ?",
                    status: 5,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 1,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 4,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 2,
                    createAt:"06/12/2021 14:00"
                },
            ],
            headers: ['Message Title','Action', 'Status', 'Create At'],
            messType: []
        }
    },
    mixins: [SimulatorMixins]
}
</script>

<style lang="scss" scoped>
.content-title {
    margin-top: 25px;
    margin-bottom: 25px;
}

.w-35 {
    width: 35%;
}

ul, li {
    display:inline
}
</style>