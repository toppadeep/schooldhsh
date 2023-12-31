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
      <h2 class="flex tracking-widest">Преподаватели</h2>
    </div>
    <h3 class="flex w-full text-start">
      Мы стремимся предоставлять широкий спектр услуг для повышения навыков
      ваших детей, чтобы они развивались и повышали базовые знания
    </h3>
    <teacher-item
      v-for="(teacher, index) in teachers"
      :key="index"
      :teacher="teacher"
    />
  </div>
</template>

<script>
import TeacherItem from "./teacher-item.vue";
export default {
  components: {
    TeacherItem,
  },
  data() {
    return {
      teachers: null,
    };
  },
  async created() {
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/teacher`, {
      method: "GET",
    });
    this.teachers = await response.json();
  },
};
</script>