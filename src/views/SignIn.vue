<template>
  <div class="auth-form-container">
    <div class="bg-container">
      <img alt="" />
    </div>
    <div class="auth-form">
      <form action="submit" @submit.prevent="handleSubmit">
        <h3>LOGIN</h3>
        <div class="input-box">
          <input type="email" required v-model="userLogin.email" />
          <label for="">Email</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="userLogin.password" />
          <label for="">Password</label>
        </div>
        <button class="main-btn">Log In</button>
      </form>
      <div class="form-footer">
        <p>
          Don't have an account? <router-link to="sign-up">Sign up</router-link>
        </p>
        <div>
          <a href="">Forgot password</a>
          <router-link to="/">Back to homepage</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      email: "",
      password: "",
    });
    const handleSubmit = () => {
      store.dispatch("user/signInAction", { userLogin, router });
    };
    return { handleSubmit, userLogin };
  },
};
</script>

<style lang="scss">
.auth-form-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .bg-container {
    background-color: var(--gray);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/bg1.jpg);

    animation: change 30s infinite ease-out;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    justify-content: center;
    background-position: center;
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
    }
    // img {

    // }
  }
  .auth-form {
    position: relative;
    width: 45rem;
    padding: 2rem 5rem;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    backdrop-filter: blur(15px);
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    z-index: 1;
    // &::before {
    //   content: "";
    //   position: absolute;
    //   inset: -3px;
    //   box-shadow: 0 0 0 5px #070c23;
    //   background: linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4);
    //   z-index: -1;
    // }
    // &::after {
    //   content: "";
    //   position: absolute;
    //   inset: -3px;
    //   background: linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4);
    //   z-index: -1;
    //   filter: blur(20px);
    // }
    .input-box {
      position: relative;
      width: 35rem;
      margin: 4rem 0;
      border-bottom: 2px solid #fff;
      label {
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1em;
        pointer-events: none;
        transition: 0.5s;
      }
      input:focus ~ label {
        top: -5px;
        color: yellow;
      }
      input:valid ~ label {
        top: -5px;
        color: yellow;
      }
      input {
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 35px 0 5px;
        color: #fff;
      }
    }

    .form-footer {
      color: #fff;
      margin-top: 2rem;
      p a {
        color: #fff;
        color: var(--light-yellow);
        &:hover {
          color: var(--yellow);
        }
      }
      div {
        margin-top: 2rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        a {
          color: var(--light-yellow);
          border-bottom: 0.1rem solid var(--light-yellow);
        }
      }
    }
  }
}
@keyframes change {
  0% {
    background-image: url(../assets/bg1.jpg);
  }
  25% {
    background-image: url(../assets/bg2.jpg);
  }
  50% {
    background-image: url(../assets/bg3.jpg);
  }
  75% {
    background-image: url(../assets/bg4.jpg);
  }
}
</style>
