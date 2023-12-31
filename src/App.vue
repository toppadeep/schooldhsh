<template>
  <div id="app" class="bg-white dark:bg-dark-800 text-black dark:text-white">
    <router-view :key="$router.path" />
  </div>
</template>

<style>
#app {
  font-family: 'Jost', sans-serif;
  font-family: 'Montserrat Alternates', sans-serif;
  font-family: 'Playfair Display', serif;
}
</style>