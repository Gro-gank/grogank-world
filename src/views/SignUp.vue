<template>
  <div class="auth-form-container">
    <div class="bg-container">
      <img src="images/bg1.jpg" alt="" />
    </div>
    <div class="auth-form">
      <form action="submit" @submit.prevent="handleSubmit">
        <h3>LOGIN</h3>
        <div class="input-box">
          <input type="email" required v-model="signUpForm.email" />
          <label for="">Email</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="signUpForm.password" />
          <label for="">Password</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="signUpForm.repeatPassword" />
          <label for="">Repeat password</label>
        </div>
        <div class="input-name">
          <div class="name">
            <input type="text" required v-model="signUpForm.firstName" />
            <label for="">First Name</label>
          </div>
          <div class="name">
            <input type="text" required v-model="signUpForm.lastName" />
            <label for="">Last Name</label>
          </div>
        </div>
        <div class="birthday-box">
          <label for="birthday"
            >Enter your day of birth
            <div style="display: flex">
              <select name="" id="" v-model="signUpForm.year">
                <option label="Year">Year</option>
                <option v-for="(year, index) in arrayYear" :key="index">
                  {{ year }}
                </option>
              </select>
              <select name="" id="" v-model="signUpForm.month">
                <option value="" label="Month">Month</option>
                <option v-for="(month, index) in arrayMonth" :key="index">
                  {{ month }}
                </option>
              </select>
              <select name="" id="" v-model="signUpForm.day">
                <option value="" label="Day">Day</option>
                <option v-for="(day, index) in arrayDay" :key="index">
                  {{ day }}
                </option>
              </select>
            </div>
          </label>
        </div>

        <button class="main-btn">Sign Up</button>
      </form>
      <div class="form-footer">
        <p>
          Already have an account?
          <router-link to="sign-in">Sign in</router-link>
        </p>
        <div>
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
import { createArrayNumber, randomId } from "@/utils/myUtils";
export default {
  setup() {
    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1980, 2010);
    const arrayDay = createArrayNumber(1, 31);
    const store = useStore();
    const router = useRouter();
    const signUpForm = reactive({
      email: "",
      password: "",
      repeatPassword: "",
      first: "",
      lastName: "",
      month: "",
      day: "",
      year: "",
    });
    const handleSubmit = () => {
      if (signUpForm.password === signUpForm.repeatPassword) {
        const userData = {
          firstName: signUpForm.firstName,
          lastName: signUpForm.lastName,
          email: signUpForm.email,
          password: signUpForm.password,
          birthday: `${signUpForm.year}/${signUpForm.month}/${signUpForm.day} `,
          type: "CLIENT",
          avatar: "",
          userId: randomId(),
        };
        const dataPersional = {
          name: signUpForm.lastName,
          userId: userData.userId,
          avatar: "",
          email: signUpForm.email,
          cart: [],
          wishList: [],
          paymentHistory: [],
        };
        console.log("data", userData);
        console.log("data", dataPersional);
        store.dispatch("user/signUpAction", { userData, router });
        store.dispatch("user/createUserPersonalAction", dataPersional);
      } else alert("Password and repeat password don't match!!!");
    };
    return { handleSubmit, signUpForm, arrayMonth, arrayYear, arrayDay };
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
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
    }
    img {
      min-width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }
  .auth-form {
    position: relative;
    width: 45rem;
    padding: 2rem 5rem;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    .input-box {
      position: relative;
      width: 35rem;
      margin: 2rem 0;
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
    .input-name {
      display: flex;
      .name {
        position: relative;
        width: 17rem;
        margin: 1rem 0.5rem;
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
    }
    .birthday-box {
      position: relative;
      margin-top: 2px;
      margin-bottom: 40px;
      width: 35rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #fff;

      label {
        margin-left: 0;
        select {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          width: 310px;
          text-align: center;
          margin-left: 0.3rem;
          border-radius: 0.5rem;
          border: 0.1rem solid var(--light-color);
        }
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
</style>
