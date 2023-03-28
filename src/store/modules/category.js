import { getGernebyCategoryApi } from "@/api/category";

const state = () => {
  return {
    genreList: [],
  };
};
const mutations = {
  getGenrebyCategoryMutation(state, payload) {
    state.genreList = payload;
  },
};
const actions = {
  async getGenrebyCategoryAction({ commit }, payload) {
    const data = await getGernebyCategoryApi(payload);

    commit("getGenrebyCategoryMutation", data);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
