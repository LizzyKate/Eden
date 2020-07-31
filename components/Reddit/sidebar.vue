<template>
  <div class="font-sans">
    <div class="w-64 bg-white hidden lg:inline-block">
      <div class="w-full h-screen">
        <div
          class="flex items-center justify-center pt-10 w-full cursor-pointer"
          @click="home()"
        >
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
        <!-- Sort By -->

        <nav class="mt-5">
          <!-- <h3>Subreddits</h3> -->
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              :class="active === 'Trump' ? 'changed' : ''"
              @click="getSubReddit('Trump')"
            >
              <span class="mx-4 font-medium">Trump</span>
            </button>
          </div>

          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              :class="active === 'Sports' ? 'changed' : ''"
              @click="getSubReddit('Sports')"
            >
              <span class="mx-4 font-medium"> Sports </span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              :class="active === 'Fashion' ? 'changed' : ''"
              @click="getSubReddit('Fashion')"
            >
              <span class="mx-4 font-medium">Fashion</span>
            </button>
          </div>
          <div>
            <button
              class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              @click="getSubReddit('Politics')"
            >
              <span
                class="mx-4 font-medium"
                :class="active === 'Politics' ? 'changed' : ''"
                >Politics</span
              >
            </button>
          </div>
          <DropDown />
          <FilterComponent />
        </nav>
      </div>
    </div>

    <!-- mobile version -->
    <div class="px-4 bg-white lg:hidden inline-block">
      <div class="h-screen w-10 md:w-24">
        <div class="flex items-center ml-2 pt-10 w-full" @click="home()">
          <img src="/img/reddit.png" class="w-8" alt="" />
        </div>
        <nav class="pt-10">
          <div
            class
            :class="active === 'Trump' ? 'changed' : ''"
            @click="getSubReddit('Trump')"
          >
            <p class="text-xs">Trump</p>
          </div>

          <div
            class
            :class="active === 'Sports' ? 'changed' : ''"
            @click="getSubReddit('Sports')"
          >
            <div class="mt-6">
              <p class="text-xs">Sports</p>
            </div>
          </div>
          <div
            class
            :class="active === 'Fashion' ? 'changed' : ''"
            @click="getSubReddit('Fashion')"
          >
            <div class="mt-6">
              <p class="text-xs">Fashion</p>
            </div>
          </div>
          <div
            class
            :class="active === 'Politics' ? 'changed' : ''"
            @click="getSubReddit('Politics')"
          >
            <div class="mt-6">
              <p class="text-xs">Politics</p>
            </div>
          </div>
          <DropDown />
          <FilterComponent />
        </nav>

        <div class="absolute bottom-0 my-8">
          <i class="ml-4 fas fa-shoe-prints"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDown from './sort-dropdown'
import FilterComponent from './filter'
export default {
  components: {
    DropDown,
    FilterComponent,
  },
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
    async getSubReddit(value) {
      this.$store.commit('spin/loading', true)
      this.active = value
      await this.$store.dispatch('data/getSubrreddits', value)
      this.$store.commit('spin/loading', false)
    },
    async home() {
      this.$store.commit('spin/loading', true)
      await this.$store.dispatch('data/getIncidents')
      this.$store.commit('spin/loading')
    },
  },
}
</script>
<style scoped>
.changed {
  color: red;
}
</style>
