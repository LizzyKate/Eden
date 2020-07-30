<template>
  <div class="bg-gray-200 h-screen overflow-y-scroll">
    <Post
      v-for="(reddit, i) in tweet"
      :key="i"
      :data="reddit.data"
      class="mt-8"
    />
    <Load v-if="wait" />
  </div>
</template>
<script>
import Post from './card'
import Load from '~/components/Reddit/spinner'
export default {
  components: {
    Post,
    Load,
  },
  computed: {
    tweet() {
      return this.$store.state.data.Post
    },
    wait() {
      return this.$store.state.spin.load
    },
  },
  async beforeMount() {
    this.$store.commit('spin/loading', true)
    await this.$store.dispatch('data/getIncidents')
    this.$store.commit('spin/loading', false)
  },
}
</script>
<style scoped></style>
