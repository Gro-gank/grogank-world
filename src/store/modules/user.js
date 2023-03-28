import {
  createPersionalApi,
  deleteCartApi,
  getPersionalApi,
  getProfileApi,
  signInApi,
  signUpAPI,
  updateCartApi,
  updatePersonalApi,
  updateProfileApi,
} from "@/api/user";
import Swal from "sweetalert2";

const state = () => {
  return {
    user: [],
    userPersonal: [],
  };
};
const mutations = {
  userLoginMutation(state, payload) {
    localStorage.setItem("user", JSON.stringify(payload));
    state.user = payload;
  },
  getUserProfileMutation(state, payload) {
    state.user = payload;
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.user = payload;
  },
  getUserPersonalMutation(state, payload) {
    state.userPersonal = payload;
  },
};
const actions = {
  async signInAction({ commit }, { userLogin, router }) {
    const user = await signInApi(userLogin.email);
    if (user[0].password == userLogin.password) {
      Swal.fire(
        {
          title: "Sign In successful",
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
        },
        router.go(-1)
      );
      // .then((result) => {
      //   /* Read more about isConfirmed, isDenied below */
      //   if (result.isConfirmed) {
      //     router.go(-1);
      //   }
      // });
      commit("userLoginMutation", user);
    } else {
      Swal.fire({
        title: "Wrong username or Password",
        icon: "error",
      });
      localStorage;
    }
  },
  async signUpAction({ commit }, { userData, router }) {
    await signUpAPI(userData);
    console.log(commit);
    alert("Sign up successfully");
    router.push("/");
  },
  async getUserInfoAction({ commit }, payload) {
    const data = await getProfileApi(payload);
    commit("getUserProfileMutation", data);
  },
  async createUserPersonalAction({ commit }, dataPersional) {
    await createPersionalApi(dataPersional);
    console.log(commit);
  },
  async getUserPersonalAction({ commit }, userId) {
    const data = await getPersionalApi(userId);
    commit("getUserPersonalMutation", data);
  },
  loadUserLoginFromLocalStorageAction({ commit }) {
    let user = {};
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    commit("setUserLoginFromLocalStorage", user);
  },
  signOutAction(context, router) {
    localStorage.removeItem("user");
    console.log(context);
    router.push("/");
  },
  async updatePersonalPayment({ commit }, { newpayment, router }) {
    console.log(commit);
    await updatePersonalApi(newpayment);
    alert("Payment successfully");
    router.push("/");
  },
  async updatePersonalCart({ commit }, { newCart, router }) {
    await updateCartApi(newCart);
    router.push("");
    console.log(router, commit);
  },
  async updateProfileAction({ dispatch }, payload) {
    await updateProfileApi(payload);
    dispatch("getUserInfoAction", payload.userId);
    Swal.fire({
      title: "Update successfully",
      icon: "success",
    });
  },
  async deleteCartAction({ dispatch }, payload) {
    await deleteCartApi(payload);
    dispatch("getUserPersonalAction", payload.userId);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
