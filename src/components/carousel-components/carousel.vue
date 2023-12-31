<template>
  <div class="flex justify-start items-center relative w-full">
    <div
      class="
        w-full
        absolute
        bottom-0
        mt-2
        z-10
        flex flex-row
        justify-center
        items-center
        m-2
        space-x-2
      "
    >
      <span
        v-for="index in group"
        :key="index"
        class="flex w-2 h-2 rounded-full bg-gray-300 cursor-pointer"
        :class="{ 'bg-second': currnetSlideIndex == index - 1 }"
        @click="navigateSlide(index - 1)"
      ></span>
    </div>
    <div
      :class="{ hidden: currnetSlideIndex == this.cources.length }"
      @click="nextSlide"
      class="
        hidden
        md:flex
        justify-center
        items-center
        opacity-50
        absolute
        top-0
        right-0
        z-10
        w-12
        h-full
      "
    >
      <i class="fa-solid fa-chevron-right"></i>
    </div>
    <div
      :class="{ hidden: currnetSlideIndex == 0 }"
      @click="prewSlide"
      class="
        hidden
        md:flex
        justify-center
        items-center
        opacity-50
        absolute
        top-0
        left-0
        z-10
        w-12
        h-full
      "
    >
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div
      class="
        flex flex-row flex-nowrap
        space-x-4
        w-full
        overflow-x-scroll
        items
        relative
      "
      @mousedown="hundlerStart"
      @mousemove="move"
      @mouseleave="end"
      @mouseup="end"
      @touchstart="hundlerStart"
      @touchmove="move"
      @touchend="end"
    >
      <Cource-item
        v-for="(cource, index) of cources"
        :key="index"
        :cource="cource"
        :style="{ flex: `0 0 ${100 / loop}%` }"
      />
      <Post-item v-for="post of posts" :key="post.id" :post="post" />
      <Document
        v-for="document in documents"
        :key="document.id"
        :document="document"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "../blog-components/post-item.vue";
import CourceItem from "../home-components/course-components/cource-item.vue";
import Document from "../documents/document-tab.vue";
export default {
  components: {
    CourceItem,
    PostItem,
    Document,
  },
  data() {
    return {
      currnetSlideIndex: 0,
      isDown: false,
      start: 0,
      scrollLeft: 0,
      dist: 0,
    };
  },
  props: {
    swipes: {
      type: Number,
    },
    cources: {
      type: Array,
      default: () => [],
    },
    posts: {
      type: Array,
      default: () => [],
    },
    documents: {
      type: Array,
      default: () => [],
    },
    loop: {
      type: Number,
    },
    // width: {
    //   type: Number,
    // },
    interval: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    group() {
      return Math.ceil(this.swipes / this.loop);
    },
  },
  methods: {
    nextSlide() {
      if (this.currnetSlideIndex == this.swipes - 2) {
        this.currnetSlideIndex = 0;
        const parrent = document.querySelector(".items");
        const first = parrent.firstElementChild;
        first.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      } else {
        this.currnetSlideIndex++;
        const parrent = document.querySelector(".items");
        const nextSibling = parrent.childNodes[this.currnetSlideIndex];
        nextSibling.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
      }
    },
    prewSlide() {
      if (this.currnetSlideIndex > 0) {
        this.currnetSlideIndex--;
        const parrent = document.querySelector(".items");
        const prewSibling = parrent.childNodes[this.currnetSlideIndex];
        prewSibling.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
    },
    navigateSlide(slide) {
      this.currnetSlideIndex = slide;
      const parrent = document.querySelector(".items");
      parrent.childNodes[this.currnetSlideIndex * this.loop].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    },
    end() {
      this.isDown = false;
    },
    hundlerStart(e) {
      const slider = document.querySelector(".items");
      this.isDown = true;
      this.start = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    move(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const slider = document.querySelector(".items");
      const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      this.dist = x - this.start;
      slider.scrollLeft = this.scrollLeft - this.dist;
    },
  },
  // mounted() {
  //   if (this.group > 1) {
  //     let is = this;
  //     setInterval(function name() {
  //       is.nextSlide();
  //     }, is.interval);
  //   }
  // },
};
</script>

<style scoped>
.slider-item {
  flex: 0 0 33%;
}

.next-slide::before {
  content: url("../../assets/icons/arrow-right.png");
  margin-top: 0.5em;
}

.prev-slide::before {
  content: url("../../assets/icons/arrow-left.png");
  margin-top: 0.5em;
}

.f-child:first-child {
  margin-left: 0;
}
</style>
