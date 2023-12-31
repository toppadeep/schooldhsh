<template>
  <div
    class="
      flex
      justify-start
      items-center
      flex-row flex-wrap
      max-w-7xl
      w-full
      mt-10
      mb-10
      box-border
      relative
      space-y-10
    "
  >
    <div class="flex w-full justify-between items-center">
      <h2 class="flex tracking-widest">FAQ</h2>
    </div>
    <h3 class="flex w-full text-start">Часто задаваемые вопросы</h3>
    <div
      class="
        flex
        w-full
        justify-between
        h-full
        items-center
        flex-row flex-wrap
        mt-10
        mb-10
      "
    >
      <accordion />
    </div>
  </div>
</template>

<script>
import Accordion from "../accordion-components/accordion.vue";
export default {
  components: {
    Accordion,
  },
  data() {
    return {};
  },
};
</script>