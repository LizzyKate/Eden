<template>
  <div class="bg-gray-200 h-screen overflow-y-scroll">
    <div class="pt-8 text-center lg:hidden inline-block w-full px-3">
      <input
        v-model="searchterm"
        class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 px-2 py-2 text-sm w-full border-t-0 border-r-0 border-l-0"
        placeholder="Search"
        type="text"
        @input="search"
      />
    </div>
    <div v-if="tweet.length > 0">
      <transition-group name="flip-list">
        <Post
          v-for="reddit in tweet"
          :key="reddit.data.id"
          :data="reddit.data"
          class="mt-8"
        />
      </transition-group>
    </div>
    <div v-else class="mt-40">
      <h3 class="text-center text-xl">No Post Found</h3>
    </div>
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
  data() {
    return {
      searchterm: '',
    }
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
  methods: {
    search() {
      this.$store.commit('data/duplicateClone', this.searchterm)
    },
  },
}
</script>
<style>
.flip-list-move {
  transition: transform 1s;
}
</style>
