<template>
  <div class="flex max-w-7xl w-full justify-center items-center flex-row flex-nowrap mt-2 mb-2 overflow-hidden">
    <ul class="flex flex-row flex-wrap justify-center list-none w-max relative">
      <li
      class="flex justify-center items-center first:ml-2"
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{ linked: !!breadcrumb.link }"
      >
        <a class="text-gray-400"  :class="{ linked: !breadcrumb.link }">{{ breadcrumb.name  }}</a>
      </li>
      {{ $route.params.crumbs }}
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link)
        this.$router.push(this.breadcrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style scoped>
ul > li:not(:last-child)::after {
  content: "›";
  font-size: 0.8em;
  margin: 0 0.5em;
  cursor: default;
}

.linked {
  cursor: pointer;
  font-weight: normal;
  color:rgb(209, 209, 209)
}

ul:before {
    display: block;                  
    width: 1000px;                  
    content: '';                     
    position: absolute;         
    border-bottom: 1px dashed rgb(209, 209, 209);
    top:50%;                   
    right: 100%;
}
ul:after {
    display: block;
    width: 1000px;                  
    content: '';
    position: absolute;
    border-bottom: 1px dashed rgb(209, 209, 209);
    top:50%;
    left: 100%; 
}
</style>