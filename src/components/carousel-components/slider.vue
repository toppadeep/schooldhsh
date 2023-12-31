<template>
  <div
    class="
      flex
      justify-center
      items-center
      flex-col flex-nowrap
      w-full
      h-full
      relative rounded-lg
    "
  >
    <div
      v-for="(slide, index) in this.slides"
      :key="index"
      class="w-full justify-center items-center h-full"
      :class="{ flex: index == currentSlide, hidden: index != currentSlide }"
    >
      <transition
      enter-to-class="animate__animated animate__fadeInLeft"
      leave-to-enter-class="animate__animated animate__rollOut"
      >
        <div v-if="index == currentSlide" class="flex w-full h-full relative">
          <img
            class="w-full h-full rounded-xl"
            :src="require(`@/assets/offerImages/${slide.url}`)"
            :aria-hidden="[index != currentSlide]"
            alt=""
          />
        </div>
      </transition>
    </div>
    <div
      v-if="controls"
      class="
         hidden md:flex flex-row flex-nowrap w-96
        justify-between
        items-center
        absolute
        left-5
        bottom-5 z-30
      "
    >
      <button
        class="flex justify-center items-center rounded-full w-10 h-10 m-5"
        :class="{ disabled: currentSlide == 0 }"
        @click="prewSlide"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span
        v-for="(indicate, index) of swipes"
        :key="index"
        style="width: 40px"
        class="flex h-[1px] rounded-full bg-gray-100 cursor-pointer"
        :class="{ 'bg-red-700 dark:bg-blue-500 w-1 animate-pulse': currentSlide == index }"
        @click="navigateSlide(index)"
      ></span>
      <button
        class="flex justify-center items-center rounded-full w-10 h-10 m-5"
        :class="{ disabled: currentSlide == swipes }"
        @click="nextSlide"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: 10000,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide == this.swipes - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    prewSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    navigateSlide(slide) {
      this.currentSlide = slide;
    },
  },
  mounted() {
    if (this.auto) {
      let is = this;
      setInterval(function name() {
        is.nextSlide();
      }, is.interval);
    }
  },
  computed: {
    swipes() {
      if (this.slides.length !== 0) {
        return this.slides.length;
      }
      return 0;
    },
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    auto: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    loop: {
        type: Number,
        default: 1
    }
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  @apply animate-pulse;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>