<template>
  <div>
    <div class="font-sans">
      <div class="w-64 bg-white hidden lg:inline-block">
        <div class="w-full h-screen">
          <div class="flex items-center justify-center pt-10 w-full">
            <img src="/img/reddit.png" class="w-8" alt="" />
          </div>

          <div class="body-font pt-8 text-center">
            <input
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 border-t-0 border-r-0 border-l-0"
              placeholder="Search"
              type="text"
            />
          </div>

          <nav class="mt-10">
            <div>
              <button
                class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span class="mx-4 font-medium">Popular</span>
              </button>
            </div>

            <div>
              <button
                class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span class="mx-4 font-medium">All</span>
              </button>
            </div>

            <div>
              <button
                class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span class="mx-4 font-medium">Random</span>
              </button>
            </div>
            <div>
              <button
                class="w-full text-left py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span class="mx-4 font-medium">Users</span>
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
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 px-2 py-2 w-full text-sm border-t-0 border-r-0 border-l-0"
              placeholder="Search"
              type="text"
            />
          </div>
          <nav class="pt-10">
            <div>
              <button
                class="w-full flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span>
                  <i class="fas fa-fire-alt"></i>
                </span>
              </button>
            </div>

            <div>
              <button
                class="w-full flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span>
                  <i class="fas fa-globe"></i>
                </span>
              </button>
            </div>

            <div>
              <button
                class="w-full flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span>
                  <i class="fas fa-random"></i>
                </span>
              </button>
            </div>
            <div>
              <button
                class="w-full flex ml-4 items-center py-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              >
                <span>
                  <i class="fas fa-users"></i>
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
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
