<template>
  <div
    class="
      flex
      justify-center
      items-center
      mx-auto
      min-w-7xl
      w-full
      min-h-full
      flex-col flex-nowrap
      relative
      md:pt-0
    "
  >
    <Nav />
    <Header />
    <Cource/> 
    <Offer />
    <Blog />
    <FAQ />
    <Footer />
    <Cookies-accept />
    <Scroll-up />
  </div>
</template>

<script>
import Blog from "../components/blog-components/blog.vue";
import Cource from '../components/home-components/course-components/cource.vue';
import CookiesAccept from "../components/cookies/cookiesAccept.vue";
import FAQ from "../components/home-components/accordion-components/FAQ.vue";
import Footer from "../components/home-components/footer/footer.vue";
import Header from "../components/home-components/header.vue";
import Nav from "../components/home-components/nav-components/nav.vue";
import Offer from "../components/home-components/offer-components/offer.vue";
import ScrollUp from "../components/scroll/scrollUp.vue";
export default {
  data() {
    return {
      title: "ДХШ - Главная",
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  components: {
    Header,
    Cource,
    Nav,
    Blog,
    Offer,
    FAQ,
    Footer,
    CookiesAccept,
    ScrollUp,
  },
};
</script>
