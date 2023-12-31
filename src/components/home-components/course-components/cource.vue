<template>
  <div
    class="
      flex
      justify-center
      items-center
      flex-col flex-nowrap
      max-w-7xl
      w-full
      h-max
      relative
      rounded-lg
      space-y-10 backdrop-blur-lg
    "
  >
    <div class="flex w-full justify-between items-center">
      <h2 class="flex tracking-widest">Направления</h2>
      <router-link to="/cources">Посмотреть все</router-link>
    </div>
    <h3 class="flex w-full text-start">
      В нашем образовательном учреждении мы предлагаем множество программ и
      преимуществ для успешного обучения ваших детей, позволяя при этом
      оставаться активным, творческим и здоровым
    </h3>
    <Carousel :cources="cources" :loop="2" :swipes="cources.length" />
  </div>
</template>

<script>
import Carousel from "../../carousel-components/carousel.vue";
export default {
  data() {
    return {
      cources: [],
    };
  },
  components: { Carousel },
  async created() {
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/course`, {
      method: "GET",
    });
    this.cources = await response.json();
  },
};
</script>
