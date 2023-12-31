<template>
  <div
    class="
      flex
      justify-between
      items-start
      flex-col
      w-full
      md:w-56
      h-36
      p-5
      rounded-lg
      mr-5
      space-y-4
      cursor-pointer
    "
  >
    <div class="flex flex-row flex-nowrap space-x-4">
      <i
        v-if="document.filetype === 'docx' || document.filetype === 'doc'"
        class="fa-solid fa-file-word text-5xl text-blue-500"
      ></i>
      <i
        v-if="document.filetype === 'pdf'"
        class="fa-solid fa-file-pdf text-5xl text-red-500"
      ></i>
      <i
        v-if="document.filetype === 'xlsx'"
        class="fa-solid fa-file-excel text-5xl text-green-500"
      ></i>
      <span class="w-full break-words line-clamp-2" :title="document.title">{{
        document.title
      }}</span>
    </div>
    <div class="flex w-full flex-row flex-nowrap space-x-4">
      <span class="w-full" :title="document.filesize"
        ><h3>{{ document.filesize }}</h3></span
      >
      <a
        class="
          cursor-pointer
          border border-red-900 dark:border-blue-500
          py-2
          px-5
          w-max
          h-max
          flex
          justify-center
          items-center
          rounded-full
          mb-2
          mr-2
        "
        :href="document.document"
        >Скачать</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      default: () => {},
    },
  },
};
</script>