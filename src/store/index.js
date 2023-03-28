import { createStore } from "vuex";
import item from "./modules/item";
import user from "./modules/user";
import category from "./modules/category";
import review from "./modules/review";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { item, user, category, review },
});
