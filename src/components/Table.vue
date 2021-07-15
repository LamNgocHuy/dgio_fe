<template>
    <table class="table">
            <thead>
                <tr>
                    <th v-for="(value,index) in headers" :key="index">{{value}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value,index) in data" :key="index" >
                    <td style="width: 30%">{{value.title}}</td>
                    <td style="width: 30%" class="action">
                        <span data-tooltip="Simulator"></span>
                        <i class='bx bx-cast bx-border-circle' data-tooltip="Simulator" @click="toggleSimulator(index)"></i>
                        <i class='bx bxs-folder-open bx-border-circle' data-tooltip="Delivery content ID"></i>
                        <i class='bx bxs-group bx-border-circle' data-tooltip="Segment"></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bxs-pencil bx-border-circle' data-tooltip="Edit"></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bx-mobile bx-border-circle' data-tooltip="Test"></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bx-trash bx-border-circle' data-tooltip="Delete"></i>
                    </td>
                    <td style="width: 15%" >
                        <span v-if="value.status==4" class="badge badge-sent">Sent</span>
                        <span v-if="value.status==2" class="badge badge-wait">Wait to Sent</span>
                        <span v-if="value.status==1" class="badge badge-draft">Draft</span>
                        <span v-if="value.status==5" class="badge badge-fail">Failed</span>
                    </td>
                    <td style="width: 25%">
                        <span style="color: #F64E60" v-if="(value.status == 1 || value.status == 2) && compareVsCurrentDate(value.createAt)"></span>
                        <span v-else>{{toLocalDate(value.createAt)}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
import SimulatorMixin from '../mixins/simulator-mixins'

export default {
    name: 'Table',
    props: {
        data: [],
        headers: []
    },
    methods: {
        compareVsCurrentDate(datetime) {
            var argumentDate = new Date(datetime); 
            var currentdate = new Date(datetime); 
            var isGreaterThan = argumentDate.getTime() > currentdate.getTime()
            return isGreaterThan
        },
        toLocalDate(datetime) {
            var currentdate = new Date(datetime); 
            
            var dateResult =   currentdate.toLocaleString()
            
            return dateResult;
        }
    },
    mixins: [SimulatorMixin]
}
</script>

<style lang="scss" scoped>
.action > i {
    color: #B5B5C3;
    margin-right: 0.5rem;
    &:hover {
        color: #4A94E5;
        background: #F3F6F9;
    }
    cursor: pointer;
}

table {
    color: #000;
    letter-spacing: 1px;
}

table td, table th {
    padding: 10px 0;
}

.badge {
    font-size: 1.05rem;
}

.badge-sent {
    color: #1BC5BD;
    background-color: #C9F7F5;
}

.badge-wait {
    color: #3699FF;
    background-color: #E1F0FF;
}

.badge-draft {
    color: #B5B5C3;
    background-color: #F3F6F9;
}

.badge-fail {
    color: #F64E60;
    background-color: #FFE2E5;
}
</style>