<template>
  <div
    class="
      flex
      justify-between
      items-start
      w-full
      h-max
      flex-col flex-nowrap
      p-5
      rounded-lg
      mb-5
      space-y-4
    "
  >
    <div
      class="
        flex
        justify-center
        items-center
        flex-col flex-nowrap
        md:flex-nowrap
        w-full
        h-full
        cursor-pointer
        relative
      "
    >
      <div class="flex justify-center items-start w-full flex-col flex-nowrap">
        <div class="flex w-full flex-row justify-start items-center">
          <img
            :src="post.userAvatar"
            class="w-5 h-5 rounded-full"
            :title="post.userLogin"
            :alt="post.userLogin"
          />
          <h4 class="ml-2">{{ post.userLogin }}</h4>
        </div>
        <router-link
          class="line-clamp-2 font-bold text-xl mt-2"
          :title="post.title"
          :to="{
            name: 'posts-post',
            params: { post: post.slug, crumbs: post.title },
          }"
          >{{ post.title }}</router-link
        >
        <h3 class="line-clamp-2 mt-2">{{ post.subtitle }}</h3>
      </div>
      <!-- <div
        class="w-full h-64 rounded-lg"
        :style="{
          'background-image': 'url(' + post.cover + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
        }"
      ></div> -->
    </div>
    <div
      class="
        flex flex-row
        w-full
        justify-between
        items-center
        border-t border-gray-200
        pt-4
      "
    >
      <div class="flex flex-row items-center flex-wrap space-x-4">
        <p><i class="fa-solid fa-calendar-days"></i> {{ post.date }}</p>
        <i class="fa-solid fa-circle text-[5px] text-gray-700"></i>
        <router-link to="/">
          <i class="fa-solid fa-tag"></i>
          {{ post.category }}
        </router-link>
      </div>
      <div class="flex flex-row flex-wrap space-x-4">
        <i
          v-if="isLoggedIn"
          @click="favorite(post.id)"
          class="fa-solid fa-bookmark hover:text-blue-500 cursor-pointer"
          :class="{ 'text-yellow-400': post.isBookmark }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    async favorite(postId) {
      this.fav = !this.fav;
      const userId = this.userId;
      this.$store.dispatch("favoritePosts", { userId, postId });
    },
  },
  computed: {
    userId() {
      return this.$store.state.auth.user.id;
    },
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>


