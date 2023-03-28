import {
  getAllItemApi,
  getItembyCategoryApi,
  getItembySearchApi,
  getItemDetailApi,
  getSaleItemApi,
  viewCountApi,
} from "@/api/item";
import {
  newestFirst,
  sortHightoLow,
  sortLowtoHigh,
  sortRate,
  sortView,
} from "@/utils/myUtils";

const state = () => {
  return {
    saleItemList: [],
    allItem: [],
    newReleaseItem: [],
    itembyView: [],
    itembyRate: [],
    itemDetail: {},
    itemPriceHightoLow: [],
    itemPriceLowtoHigh: [],
  };
};
const mutations = {
  getSaleItemMutation(state, payload) {
    state.saleItemList = payload;
  },
  getAllItemMutation(state, payload) {
    state.allItem = payload;
  },
  getItembyCategoryMutation(state, payload) {
    state.allItem = payload;
  },
  getNewReleaseItemMutation(state, payload) {
    state.newReleaseItem = newestFirst(payload);
  },
  getItembyViewMutation(state, payload) {
    state.itembyView = sortView(payload);
  },
  getItembyRateMutation(state, payload) {
    state.itembyRate = sortRate(payload);
  },
  getItemDetailMutation(state, payload) {
    state.itemDetail = sortRate(payload);
  },
  getItembySearchMutation(state, payload) {
    state.allItem = payload;
  },
  getItemPriceHighToLowMutation(state, payload) {
    state.itemPriceHightoLow = sortHightoLow(payload);
  },
  getItemPriceLowToHighMutation(state, payload) {
    state.itemPriceLowtoHigh = sortLowtoHigh(payload);
  },
};
const actions = {
  async getSaleItemAction({ commit }) {
    const data = await getSaleItemApi();
    commit("getSaleItemMutation", data);
  },
  async getAllItemAction({ commit }) {
    const data = await getAllItemApi();
    commit("getAllItemMutation", data);
    commit("getNewReleaseItemMutation", data);
    commit("getItembyViewMutation", data);
    commit("getItembyRateMutation", data);
    commit("getItemPriceHighToLowMutation", data);
    commit("getItemPriceLowToHighMutation", data);
  },
  async getItemDetailAction({ commit }, payload) {
    const data = await getItemDetailApi(payload);
    commit("getItemDetailMutation", data);
  },
  async getItembySearchAction({ commit }, payload) {
    const data = await getItembySearchApi(payload);
    commit("getItembySearchMutation", data);
  },
  async getItembyCategoryAction({ commit }, payload) {
    const data = await getItembyCategoryApi(payload);
    commit("getItembyCategoryMutation", data);
  },
  async countViewAction({ commit }, payload) {
    console.log(commit);
    await viewCountApi(payload);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
