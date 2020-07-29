<template>
  <div class="flex flex-row items-center justify-between">
    <div class="">
      <Side />
    </div>
    <div class="flex-grow">
      <Main />
    </div>
  </div>
</template>
<script>
import Side from './sidebar'
import Main from './main'

export default {
  components: {
    Side,
    Main,
  },
}
</script>
<style scoped></style>
