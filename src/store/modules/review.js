import { addReviewApi, addReviewtoItem, getItemReviewApi } from "@/api/review";

const state = () => {
  return {
    reviewList: [],
  };
};
const mutations = {
  getItemReviewMutation(state, payload) {
    state.reviewList = payload;
  },
};
const actions = {
  async getItemReviewAction({ commit }, payload) {
    const data = await getItemReviewApi(payload);
    console.log("id", payload);
    commit("getItemReviewMutation", data);
  },
  async addReviewAction({ dispatch }, { userReview, newItem, router }) {
    await addReviewApi(userReview);
    await addReviewtoItem(newItem);
    router.go(0);
    dispatch("getItemReviewAction");
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
