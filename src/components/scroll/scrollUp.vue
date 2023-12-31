<template>
  <div
    v-if="show"
    @click="$scrollTop"
    class="
      flex
      w-12
      h-12
      rounded-full hover:animate-pulse
      border border-gray-200
      justify-center
      items-center
      fixed
      bottom-10
      right-10
      z-40
      shadow-lg
      hover:bg-gray-200
      cursor-pointer
    "
  >
    <i class="fa-solid fa-arrow-up text-2xl text-red-900 dark:text-white"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted: function () {
    this.checkScrollPosition();
    window.addEventListener("scroll", this.checkScrollPosition);
  },
  methods: {
    checkScrollPosition() {
      this.show = window.pageYOffset > 500;
    },
  },
};
</script>

<style>
</style>