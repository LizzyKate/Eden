<template>
  <div class="lg:p-10">
    <h2 class="text-xl font-bold text-gray-700 hidden lg:block">Filter By</h2>
    <div class="mt-4 lg:mt-0 text-xs">
      Votes

      <div class="lg:flex inline-block justify-between w-full lg:mt-0 mt-3">
        <div>
          <input
            v-model="fromVote"
            class="h-8 lg:w-20 w-full bg-gray-300 p-1 rounded-sm"
            min="0"
            type="number"
          />
          <span class="text-sm text-red-700"> min </span>
        </div>
        <span> </span>
        <div>
          <input
            v-model="toVote"
            class="h-8 lg:w-20 w-full bg-gray-300 p-1 rounded-sm"
            :min="fromVote"
            type="number"
          />
          <span class="text-sm text-red-700"> max </span>
        </div>
      </div>
      <button
        class="w-full bg-black text-white mt-3 rounded-sm text-xs lg:text-sm py-2"
        @click="filterPost"
      >
        Filter
      </button>
    </div>
  </div>
</template>
<style scoped></style>

<script>
export default {
  data() {
    return {
      fromDate: '',
      fromVote: 1000,
      toVote: 2000,
    }
  },
  watch: {
    fromVote() {
      if (this.fromVote >= this.toVote) {
        this.toVote = +this.fromVote + 10
      }
    },
  },
  methods: {
    filterPost() {
      this.$store.commit('data/filterPost', {
        from: this.fromVote,
        to: this.toVote,
        date: this.fromDate,
      })
    },
  },
}
</script>
