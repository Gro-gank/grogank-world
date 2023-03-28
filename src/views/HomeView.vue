<template>
  <the-banner></the-banner>
  <section>
    <on-sale></on-sale>
    <new-release></new-release>
    <the-category></the-category>
    <rest-item-list></rest-item-list>
    <home-footer></home-footer>
  </section>
  <cart-icon></cart-icon>
  <goto-top-button></goto-top-button>
  <router-view></router-view>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import OnSale from "@/components/OnSale.vue";
import NewRelease from "@/components/NewRelease.vue";
import TheCategory from "@/components/TheCategory.vue";
import RestItemList from "@/components/RestItemList.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
import HomeFooter from "@/components/HomeFooter.vue";

import CartIcon from "@/components/CartIcon.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    TheBanner,
    OnSale,
    NewRelease,
    TheCategory,
    RestItemList,
    GotoTopButton,
    HomeFooter,
    CartIcon,
  },
  setup() {},
};
</script>
