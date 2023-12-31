<template>
  <div class="flex p-5 w-full">
    <form
      @submit.prevent="login"
      class="flex flex-col flex-nowrap justify-around items-center w-full h-max"
    >
      <label class="block w-full">
        <span class="block text-sm font-medium text-slate-700">Логин</span>
        <input
          v-model="user.login"
          autocomplete="username"
          required
          type="text"
        />
      </label>
      <label class="block w-full">
        <span class="block text-sm font-medium text-slate-700">Пароль</span>
        <input
          autocomplete="current-password"
          required
          v-model="user.password"
          type="password"
        />
      </label>
      <input
        @keyup.enter="login"
        type="submit"
        value="Войти"
        :class="{ 'cursor-not-allowed': !user.login || !user.password }"
        class="hover:bg-red-900 hover:text-white"
      />
      <p v-if="error" class="font-bold text-red-700" id="error">
        Неправильный логин или пароль
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch("LogIn", this.user).then(() => {
        console.log(this.user);
        this.$router.push("/");
      });
    },
  },
  computed: {
    error: function () {
      return this.$store.getters.authStatus == "error";
    },
  },
};
</script>


