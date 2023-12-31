<template>
  <div class="
      flex
      min-w-7xl
      w-full
      h-full
      justify-around 
      items-center
      flex-nowrap flex-col
      relative
    ">
    <div class="
        flex flex-col flex-nowrap
        justify-center
        items-center
        min-w-7xl
        w-full
        h-screen
      ">
      <Slider :slides="images" :auto="true" :controls="true"/>
      <div class="
          flex
          w-full
          h-full
          justify-around
          items-center
          flex-col
          absolute 
        ">
        <div class="
            flex
            max-w-7xl
            w-full
            h-max
            flex-col flex-nowrap
            justify-around
            text-center
            items-center mb-5
          ">
          <h1 class="
              mb-5
              uppercase
              text-4xl
              md:text-8xl text-second
            ">
            ДЕТСКАЯ ХУДОЖЕСТВЕННАЯ ШКОЛА
          </h1>
          <p class="font-light mb-5 text-xl dark:text-white text-daar">
            МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ
          </p>
          <button class=" text-xl px-4em py-2em">Поступить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../carousel-components/slider.vue";
export default {
  data() {
    return {
      images: [
        { url: 'offer-3.png' },
      ]
    }
  },
  components: { Slider },
  beforeCreate() {
    this.$store.dispatch("GetCources");
  },
  computed: {
    cources() {
      return this.$store.state.auth.cources;
    },
  },
};
</script>
