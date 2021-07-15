export default {
    data() {
        return {
            isHideSimulator: null,
            
        }
    },
    methods: {
        hideSimulator() {
            this.$store.dispatch('SIMULATOR/hideSimulator')
        },
        async toggleSimulator(index) {
            if (this.isHideSimulator === index) {
                this.$store.dispatch('SIMULATOR/toggleSimulator')
            } else {
                this.$store.dispatch('SIMULATOR/hideSimulator')
                await new Promise(resolve => setTimeout(resolve, 350))
                this.$store.dispatch('SIMULATOR/showSimulator')
            }
            this.isHideSimulator = index
        },
        showSimulator() {
            this.$store.dispatch('SIMULATOR/showSimulator')
        }
    }
}