<template>
  <div class="font-sans">
    <div class="w-64 bg-white hidden lg:inline-block">
      <div class="w-full h-screen">
        <div class="flex items-center justify-center pt-10 w-full">
          <img src="/img/reddit.png" class="w-8" alt="" />
        </div>

        <div class="ml-3 body-font pt-8 text-center lg:inline-block hidden">
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
              :class="active === 'Popular' ? 'changed' : ''"
              @click="popular()"
            >
              <span class="mx-4 font-medium">Popular</span>
            </button>
          </div>

          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              :class="active === 'Unpopular' ? 'changed' : ''"
              @click="least()"
            >
              <span class="mx-4 font-medium">UnPopular</span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              :class="active === 'Recent' ? 'changed' : ''"
              @click="recent()"
            >
              <span class="mx-4 font-medium">Recent</span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="old()"
            >
              <span
                class="mx-4 font-medium"
                :class="active === 'Old' ? 'changed' : ''"
                >Old</span
              >
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
    <div class="px-4 bg-white lg:hidden inline-block">
      <div class="w-full h-screen">
        <div class="flex items-center ml-2 pt-10 w-full">
          <img src="/img/reddit.png" class="w-8" alt="" />
        </div>
        <nav class="pt-10">
          <div
            class="text-center"
            :class="active === 'Popular' ? 'changed' : ''"
            @click="popular()"
          >
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span>
                <i class="fas fa-blog"></i>
              </span>
            </button>

            <p class="text-xs">Popular</p>
          </div>

          <div
            class="text-center"
            :class="active === 'Unpopular' ? 'changed' : ''"
            @click="least()"
          >
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span>
                <i class="fab fa-lastfm"></i>
              </span>
            </button>
            <div>
              <p class="text-xs">Unpopular</p>
            </div>
          </div>
          <div
            class="text-center"
            :class="active === 'Recent' ? 'changed' : ''"
            @click="recent()"
          >
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span>
                <i class="far fa-newspaper"></i>
              </span>
            </button>
            <div>
              <p class="text-xs">Recent</p>
            </div>
          </div>
          <div
            class="text-center"
            :class="active === 'Old' ? 'changed' : ''"
            @click="old()"
          >
            <button
              class="flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span>
                <i class="fab fa-old-republic"></i>
              </span>
            </button>
            <div>
              <p class="text-xs">Old</p>
            </div>
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
      active: '',
    }
  },
  methods: {
    search() {
      this.$store.commit('data/duplicateClone', this.searchterm)
    },
    popular() {
      this.active = 'Popular'
      this.$store.commit('data/moreVotes')
    },
    least() {
      this.active = 'Unpopular'
      this.$store.commit('data/lessVotes')
    },
    recent() {
      this.active = 'Recent'
      this.$store.commit('data/mostRecentPosts')
    },
    old() {
      this.active = 'Old'
      this.$store.commit('data/leastRecentPosts')
    },
  },
}
</script>
<style scoped>
.changed {
  color: red;
}
</style>
