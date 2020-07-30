<template>
  <div class="font-sans">
    <div class="w-64 bg-white hidden lg:inline-block">
      <div class="w-full h-screen">
        <div class="flex items-center justify-center pt-10 w-full">
          <img src="/img/reddit.png" class="w-8" alt="" />
        </div>

        <div class="body-font pt-8 text-center">
          <input
            v-model="searchterm"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 border-t-0 border-r-0 border-l-0"
            placeholder="Search"
            type="text"
            @input="search"
          />
        </div>

        <nav class="mt-10">
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="popular()"
            >
              <span class="mx-4 font-medium">Most Popular</span>
            </button>
          </div>

          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="least()"
            >
              <span class="mx-4 font-medium">Least Popular</span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="recent()"
            >
              <span class="mx-4 font-medium">Recent Posts</span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="old()"
            >
              <span class="mx-4 font-medium">Old Posts</span>
            </button>
          </div>
        </nav>

        <div class="absolute bottom-0 my-8">
          <span class="px-8">
            <i class="ml-2 fas fa-shoe-prints"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="w-24 px-4 bg-white lg:hidden inline-block">
      <div class="w-full h-screen">
        <div class="flex items-center ml-2 pt-10 w-full">
          <img src="/img/reddit.png" class="w-8" alt="" />
        </div>
        <div class="pt-8">
          <input
            v-model="searchterm"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 px-2 py-2 w-full text-sm border-t-0 border-r-0 border-l-0"
            placeholder="Search"
            type="text"
            @input="search"
          />
        </div>
        <nav class="pt-10">
          <div class="text-center">
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="popular()"
            >
              <span>
                <i class="fas fa-blog"></i>
              </span>
            </button>
          </div>

          <div class="text-center">
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="least()"
            >
              <span>
                <i class="fab fa-lastfm"></i>
              </span>
            </button>
          </div>
          <div class="text-center">
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="recent()"
            >
              <span>
                <i class="far fa-newspaper"></i>
              </span>
            </button>
          </div>
          <div class="text-center">
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="old()"
            >
              <span>
                <i class="fab fa-old-republic"></i>
              </span>
            </button>
          </div>
        </nav>

        <div class="absolute bottom-0 my-8">
          <i class="ml-4 fas fa-shoe-prints"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchterm: '',
    }
  },
  methods: {
    search() {
      this.$store.commit('data/duplicateClone', this.searchterm)
    },
    popular() {
      this.$store.commit('data/moreVotes')
    },
    least() {
      this.$store.commit('data/lessVotes')
    },
    recent() {
      this.$store.commit('data/mostRecentPosts')
    },
    old() {
      this.$store.commit('data/leastRecentPosts')
    },
  },
}
</script>
<style scoped></style>
