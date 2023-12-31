<template>
  <div
    class="
      flex flex-shrink-0 flex-grow-0
      basis-full
      h-max
      rounded-xl
      relative
    "
  >
    <div
      class="
        flex
        w-full
        justify-center
        items-center
        flex-col flex-nowrap
        p-5
        rounded-xl
      "
    >
      <div
        :style="{
          backgroundImage: `url(${cource.cover})`,
          backgroundSize: 'cover',
        }"
        :title="cource.title"
        class="flex rounded-sm shadow-2xl w-full h-72"
      ></div>
      <router-link
        :title="cource.title"
        :to="{
          name: 'courses-cource',
          params: { cource: cource.slug, crumbs: cource.title },
        }"
      >
        {{ cource.title }}
      </router-link>
    </div>
    <div
      class="
        flex
        pl-5
        pr-5
        p-2
        rounded-tl-lg
        justify-center
        items-center
        absolute
        top-0
        left-0
        bg-second
      "
    >
      <span class="text-white">{{ cource.payment }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cource: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
