<template>
  <div class="lg:flex lg:flex-col p-3 lg:p-0">
    <div
      class="lg:mx-3 xl:ml-3 w-full lg:w-auto m-0 p-5 w-10/12 bg-white h-full rounded-lg lg:p-8"
    >
      <div class="lg:flex flex-row items-center hidden">
        <div class="flex flex-col items-center">
          <div>
            <i class="fas fa-sort-up"></i>
          </div>
          <div class="text-sm">{{ data.ups }}</div>
          <div>
            <i class="fas fa-sort-down"></i>
          </div>
        </div>
        <div v-if="fix(data.thumbnail)" class="ml-4 w-40">
          <div>
            <img :src="data.thumbnail" class="w-full" alt="" />
          </div>
        </div>
        <div class="ml-8 flex-1">
          <div class="p-1">
            <a :href="'https://www.reddit.com' + data.permalink">
              <h5 class="mb-0 cursor-pointer hover:text-red-400">
                {{ data.title }}
              </h5>
            </a>
          </div>
          <div class="p-1">
            <p class="text-sm mb-0">Subreddit: {{ data.subreddit }}</p>
          </div>
          <div class="p-1">
            <p class="text-sm text-red-900 mb-0">Posted by {{ data.author }}</p>
          </div>
          <div class="p-1 text-justify mt-4">
            <p class="text-sm mb-0">
              {{ data.created | formatDate }}
            </p>
          </div>
        </div>
      </div>
      <div class="lg:hidden inline-block w-full">
        <div v-if="fix(data.thumbnail)" class="w-full">
          <img :src="data.thumbnail" class="w-full" alt="" />
        </div>
        <div class="mt-8">
          <h5 class="break-word">{{ data.title }}</h5>
        </div>
        <div class="mt-8">
          <p class="text-base mb-0 break-word text-red-900">
            Posted By: {{ data.author }}
          </p>
        </div>
        <div class="flex flex-row items-center justify-between mt-4">
          <div class="flex flex-col items-center">
            <div class="text-sm">
              <span class="text-xs">votes : </span>{{ data.ups }}
            </div>
          </div>
          <div class="">
            <p class="text-base mb-0 break-word">
              {{ data.created | formatDate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    formatDate(date) {
      const x = new Date(date * 1000)
      return x.toLocaleDateString()
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fix(value) {
      if (value === 'self' || value === 'default') {
        return false
      }
      return true
    },
  },
}
</script>
<style scoped>
.moving-item {
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}
</style>
