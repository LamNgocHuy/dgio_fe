<template>
    <div>
        <h1 class="content-title">Create a new text</h1>
        <form @submit.prevent="postMessage">
            <input type="text" class="form-control mb-4" v-model="message.title" placeholder="Enter title">
            <textarea class="form-control mb-4" v-model="message.content" placeholder="Enter text for the message"></textarea>
            <div class="d-flex flex-row">
                <button type="submit" class="btn btn-primary me-2">Create</button>
                <button class="btn btn-draft me-2">Draft</button>
                <button class="btn btn-cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'MessageCreate',
    beforeCreate() {
        this.$store.dispatch('SIMULATOR/showSimulator')
    },
    data() {
        return {
            message: {
                title: '',
                content: '',
                status: 1
            }
        }
    },
    methods: {
        postMessage() {
            console.log(this.message)
            this.$store.dispatch('MESSAGE/postMessageList', this.message)
        }
    }

}
</script>

<style lang="scss" scoped>
.content-title {
    margin-top: 25px;
    margin-bottom: 25px;
}
textarea {
    height: 40vh !important;
}
</style>