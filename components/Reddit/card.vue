<template>
  <div>
    <!-- <div v-if="data.preview" class="container lg:p-8 p-4"> -->
    <div class="flex flex-col">
      <div class="mx-auto w-10/12 bg-white h-full rounded-lg p-8">
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
          <!-- <div class="ml-8 w-56">
              {{ data.preview.images[0].source.url.replace('external-', '') }}
              <img
                :src="
                  data.preview.images[0].source.url.replace('external-', '')
                "
                class="w-full"
                alt=""
              />
            </div> -->
          <!-- <div class="ml-4 w-24">
                <div v-if="data.preview.images">
                  <img
                    :src="data.preview.images[0].source.url"
                    class="w-full"
                    alt=""
                  />
                </div>
                <div v-else>
                  <client-only>
                    <video
                      :src="data.reddit_video_preview.fallback_url"
                      controls
                    ></video>
                  </client-only>
                </div>
              </div> -->
          <div class="ml-8 flex flex-col">
            <div class="p-1">
              <a :href="'https://www.reddit.com' + data.permalink">
                <h5 class="mb-0 cursor-pointer hover:text-red-400">
                  {{ data.title }}
                </h5>
              </a>
            </div>
            <div class="p-1">
              <p class="text-sm mb-0">
                {{ data.subreddit }}
              </p>
            </div>
            <div class="p-1">
              <p class="text-sm mb-0">
                Posted by {{ data.author }} | {{ data.created | formatDate }}
              </p>
            </div>
          </div>
        </div>
        <div class="lg:hidden inline-block">
          <div class="flex flex-row items-center">
            <div>
              <div class="flex flex-col items-center">
                <div>
                  <i class="fas fa-sort-up"></i>
                </div>
                <div class="text-sm">{{ data.ups }}</div>
                <div>
                  <i class="fas fa-sort-down"></i>
                </div>
              </div>
            </div>
            <!-- <div class="ml-4 w-24">
                <div v-if="data.preview.images">
                  <img
                    :src="data.preview.images[0].source.url"
                    class="w-full"
                    alt=""
                  />
                </div>
                <div v-else>
                  <client-only>
                    <video
                      :src="data.reddit_video_preview.fallback_url"
                      controls
                    ></video>
                  </client-only>
                </div>
              </div>
            </div> -->
            <div class="mt-4 flex flex-col">
              <div class="p-1">
                <h5 class="break-word">{{ data.title }}</h5>
              </div>
              <div class="p-1">
                <p class="text-base mb-0 break-word">
                  Posted by {{ data.author }} {{ data.created | formatDate }}
                </p>
              </div>
            </div>
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
      const x = new Date(date)
      return x.toLocaleDateString()
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    reply() {
      return this.$store.state.comment.Comment
    },
  },
}
</script>
<style scoped></style>
