<template>
  <div
    class="
      flex flex-row flex-nowrap
      w-full
      md:w-1/2
      lg:w-96
      rounded-lg
      h-48
      mb-5
      m-2
      bg-default
    "
  >
    <div
      class="
        flex
        w-full
        justify-center
        flex-col flex-nowrap
        rounded-lg
      "
    >
      <div
        class="flex justify-start items-start flex-row flex-nowrap px-5 pb-2"
      >
        <span class="font-bold text-4xl text-second mr-2">
          0{{ offer.id }}</span
        >
        <h2 class=" text-xl text-white">{{ offer.title }}</h2>
      </div>
      <h3 :class="{ 'line-clamp-2': !more }" class="mt-2 pl-5 pr-5">
        {{ offer.description }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more: false,
    };
  },
  props: {
    offer: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

