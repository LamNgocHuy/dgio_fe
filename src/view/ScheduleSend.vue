<template>
    <!-- Content -->
    <div>
        <h1 class="content-title">Schedule send message</h1>
        <div class="accordion w-100" id="accordionSection">
            <div class="accordion-item mb-3">
                <h2 class="accordion-header">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Search Schedule</button>
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
                                        <input type="text" class="form-control">
                                    </div>
                                </div><!-- /.row -->
                                <!-- .row -->
                                <div class="row mb-3">
                                    <label class="col-sm-3 text-lg-right d-flex flex-column">
                                        <p>Status</p>
                                    </label>        

                                    <div class="col-sm-8" data-tooltip="Ctrl+click to choose multiple value">
                                        <input type="text" class="form-control mb-2" readonly v-model="scheduleStatusSelect">
                                        <select class="form-control" multiple v-model="scheduleStatus" >
                                            <option value="0">Draft</option>
                                            <option value="1">Wait to sent</option>
                                            <option value="3">Sent</option>
                                            <option value="4">Failed</option>
                                        </select>
                                    </div>
                                </div><!-- /.row -->
                                <!-- .row -->
                                <div class="row mb-3">
                                <label class="col-sm-3 text-lg-right">Time</label>
                                <div class="col-sm-8 d-flex flex-row">
                                    <input type="datetime-local" class="form-control me-2">
                                    <span class="fs-2">~</span>
                                    <input type="datetime-local" class="form-control ms-2">
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
        <Table :data='messages' :headers='headers'/>
        <button type="button" class="btn btn-primary mb-2">
            Create New
        </button>
    </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
    name: 'ScheduleSend',
    components: {
        Table,
    },
    computed: {
        scheduleStatusSelect() {
            var arr = []
            this.scheduleStatus.forEach((element) => {
                if (element == 0) arr.push('Draft ') 
                else if (element == 1) arr.push('Wait to send') 
                else if (element == 3) arr.push('Sent') 
                else if (element == 4) arr.push('Failed') 
            })
            var str = arr.join(', ')
            return str
        }
    },
    data() {
        return {
            messages:[
                {
                    title:"Happy New Year 2022",
                    status: 1,
                    createAt:"01/15/2021 14:00"
                },
                {
                    title:"Happy Birthday To You",
                    status: 5,
                    createAt:"03/25/2021 14:00"
                },
                {
                    title:"Good Morning",
                    status: 2,
                    createAt:"07/23/2021 14:00"
                },
                {
                    title:"GoodNight",
                    status: 4,
                    createAt:"04/11/2021 14:00"
                },
                {
                    title:"How are you ?",
                    status: 5,
                    createAt:"05/04/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 1,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 4,
                    createAt:"12/06/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 2,
                    createAt:"08/12/2021 14:00"
                },
            ],
            scheduleStatus: [],
            headers: ['Schedule Title','Action', 'Status', 'Send Time'],
        }
    },
}
</script>

<style lang="scss" scoped>

.content-title {
    margin-top: 25px;
    margin-bottom: 25px;
}

</style>