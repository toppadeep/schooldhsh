<template>
  <div
    class="
      flex
      w-full
      h-full
      justify-center
      items-center
      flex-col flex-nowrap
      pt-16
      px-2
      relative
    "
  >
    <Nav />
    <Bread-crumbs />
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn">
      <router-view :key="$route.path" />
    </transition>
    <Footer />
    <Cookies-accept />
    <Scroll-up />
  </div>
</template>

<script>
export default {
  components: {
    Nav: () => import("../components/home-components/nav-components/nav.vue"),
    Footer: () => import("../components/home-components/footer/footer.vue"),
    CookiesAccept: () => import("../components/cookies/cookiesAccept.vue"),
    ScrollUp: () => import("../components/scroll/scrollUp.vue"),
    BreadCrumbs: () =>
      import("../components/home-components/nav-components/breadCrumbs.vue"),
  },
};
</script>
