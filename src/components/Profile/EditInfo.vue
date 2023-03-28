<template>
  <form action="submit">
    <div class="label">
      <label for="name">First Name</label>
      <label for="name">Last Name</label>
      <label for="email">Email :</label>
      <label for="password">Password :</label>
      <label for="text">Birthday :</label>
      <label for="text">Avatar link :</label>
    </div>
    <div class="input-box">
      <input type="text" v-model="newUser.firstName" />

      <input type="text" v-model="newUser.lastName" />

      <input type="text" v-model="newUser.email" />

      <input type="text" v-model="newUser.password" />
      <input type="text" v-model="newUser.birthday" />
      <input type="text" v-model="newUser.avatar" />
    </div>
  </form>
  <div class="avatar">
    <img :src="newUser.avatar" alt="" />
    <button class="main-btn" @click="handleUpdateProfile">Save</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    user: {
      type: Object,
    },
  },
  setup(props) {
    const { user } = toRefs(props);
    const newUser = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      avatar: "",
      userId: "",
    });
    if (user.value) {
      newUser.firstName = user.value.firstName;
      newUser.lastName = user.value.lastName;
      newUser.email = user.value.email;
      newUser.password = user.value.password;
      newUser.birthday = user.value.birthday;
      newUser.avatar = user.value.avatar;
      newUser.userId = user.value.userId;
    }
    const store = useStore();
    const handleUpdateProfile = () => {
      store.dispatch("user/updateProfileAction", newUser);
    };

    return {
      handleUpdateProfile,
      newUser,
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  font-size: 2rem;
  display: flex;
  width: 70%;
  .label {
    display: grid;
    margin: 1.5rem;
  }
  .input-box {
    display: grid;
    margin: 1.5rem;
    input {
      margin-bottom: 1rem;
      font-size: 2rem;
      padding: 0.5rem 1.5rem;
      width: 35rem;
      border-radius: 0.5rem;
    }
  }
}
.avatar {
  width: 25%;
  text-align: center;
  img {
    width: 22rem;
    height: 25rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
