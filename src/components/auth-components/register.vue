<template>
  <div class="flex w-full p-5 flex-col flex-nowrap">
    <form
      @submit.prevent="register"
      class="flex flex-col flex-nowrap justify-around items-center"
    >
      <input
        name="name"
        v-model="user.name"
        type="text"
        placeholder="Введите имя"
        required
      />
      <ul v-if="error">
        <li v-for="err of this.errors.name" :key="err">
          {{ err }}
        </li>
      </ul>
      <input
        @focus="reset()"
        name="login"
        autocomplete="username"
        v-model="user.login"
        type="text"
        placeholder="Придумайте логин"
        required
        :class="{ 'ring-2 ring-red-600': this.errors.login }"
      />
      <ul v-if="error">
        <li v-for="err of this.errors.login" :key="err">
          {{ err }}
        </li>
      </ul>
      <input
        name="password"
        autocomplete="new-password"
        v-model="user.password"
        type="password"
        placeholder="Пароль"
        required
        :class="{ 'ring-2 ring-red-600': this.errors.password }"
      />
      <input
        autocomplete="new-password"
        name="password_confirmation"
        v-model="user.password_confirmation"
        type="password"
        required
        placeholder="Подтвердите пароль"
        :class="{ 'ring-2 ring-red-600': confirmed }"
      />
      <li v-if="confirmed">Пароли не совпадают</li>
      <ul v-if="error">
        <li v-for="err of this.errors.password" :key="err">
          {{ err }}
        </li>
      </ul>
      <input
        type="file"
        class="
          file:mr-4
          file:py-2
          file:px-4
          file:rounded-full
          file:border-0
          file:text-sm
          file:font-semibold
          file:bg-red-800
          file:text-white
          hover:file:bg-red-900
        "
        name="avatar"
        @change="onFileChange"
      />
      <input
        type="submit"
        :class="{
          'cursor-not-allowed':
            user.name == null ||
            user.login == null ||
            user.password == null ||
            user.password_confirmation == null ||
            this.confirmed == true,
        }"
        value="Регистрация"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        login: null,
        password: null,
        password_confirmation: null,
        avatar: null,
      },
    };
  },
  computed: {
    error: function () {
      return this.$store.getters.authStatus == "error";
    },
    errors() {
      return this.$store.getters.errors;
    },
    confirmed() {
      if (this.user.password != this.user.password_confirmation) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    onFileChange(e) {
      this.user.avatar = e.target.files[0];
    },
    async register() {
      const user = new FormData();
      user.append("name", this.user.name);
      user.append("login", this.user.login);
      user.append("password", this.user.password);
      user.append("password_confirmation", this.user.password_confirmation);
      user.append("avatar", this.user.avatar);

      this.$store.dispatch("Register", user).then(() => {
          document.location.reload();
      });
    },
    reset() {
      this.$store.dispatch("ChangeStatus");
    },
  },
};
</script>


<style scoped>
li {
  @apply list-disc;
}
</style>