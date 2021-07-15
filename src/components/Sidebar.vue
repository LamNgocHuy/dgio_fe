<template>
    <div class="flex-shrink-0 px-3 sidebar">
      <a href="/" class="d-flex align-items-center justify-content-center py-3 mb-3 text-decoration-none border-bottom">
        <img src="../assets/logo.png" alt="logo-sidebar" width="100px" height="100px">
      </a>
      <ul class="list-unstyled ps-2" @click="hideSimulator" >
        <li class="mb-1">
          <router-link :to="{name: 'ScheduleSend'}" class="btn align-items-center mb-2 w-100" >Schedule send</router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name: 'MessageContents'}" class="btn align-items-center mb-2 w-100">Message content</router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name: 'SegmentList'}" class="btn align-items-center mb-2 w-100">Segment list</router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name: 'ChatBox'}" class="btn align-items-center mb-2 w-100">Chat box</router-link>
        </li>
        <li class="mb-1">
          <a href="#" class="btn align-items-center mb-2 w-100" @click="toggleLoader">Loading</a>
        </li>
      </ul>
    </div>
</template>

<script>
import SimulatorMixin from '../mixins/simulator-mixins'
export default {
    name: 'Sidebar',
    methods: {
      async toggleLoader() {
        this.$store.dispatch('LOADER/showLoader')
        await new Promise(resolve => setTimeout(resolve, 5000))
        this.$store.dispatch('LOADER/hideLoader')
      }
    },
    mixins: [SimulatorMixin]
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 93vh;
  background: #fff;
}
li > a {
  text-align: left !important;
  font-weight: 400 !important;
  font-size: 1.2rem;
  &:focus, &:active {
    box-shadow: none;
  }
}
.router-link-active {
  background: #da5f9c;
  color: #fff;
  &:hover {
    color: #fff;
  }
}
</style>