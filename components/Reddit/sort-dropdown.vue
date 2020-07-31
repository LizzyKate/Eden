<template>
  <div>
    <div class="lg:px-10">
      <!-- <div class="dropdown inline-block relative">
        <button
          class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          @click="show = true"
        >
          <span class="mr-1">Sort By</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul
          v-if="show"
          class="dropdown-menu absolute hidden text-gray-700 pt-1"
        >
          <li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Popular</a
            >
          </li>
          <li class="">
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Unpopular</a
            >
          </li>
          <li class="">
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Recent
            </a>
          </li>

          <li class="">
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Old
            </a>
          </li>
        </ul>
      </div> -->

      <div>
        <button
          class="block h-8 overflow-hidden mt-8 lg:mt-4 bg-gray-300 text-xs lg:text-base text-gray-700 lg:font-semibold lg:py-2 py-1 px-2 lg:px-4 rounded inline-flex items-center w-full"
          @click="show = !show"
        >
          Sort <span class="hidden lg:block ml-1"> By </span>
        </button>
        <div
          v-if="show"
          class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute z-10"
        >
          <a
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            @click="sortby('higherVotes')"
            >Highest Votes</a
          >
          <a
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            @click="sortby('LowerVotes')"
            >Lowest Votes</a
          >
          <a
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            @click="sortby('Recents')"
            >Recent Dates</a
          >

          <a
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            @click="sortby('Old')"
            >Older Dates</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    sortby(value) {
      this.show = false
      if (value === 'higherVotes') {
        this.$store.commit('data/moreVotes')
      } else if (value === 'LowerVotes') {
        this.$store.commit('data/lessVotes')
      } else if (value === 'Recent') {
        this.$store.commit('data/mostRecentPosts')
      } else {
        this.$store.commit('data/leastRecentPosts')
      }
    },
  },
}
</script>
