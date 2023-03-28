import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import ItemDetail from "../views/ItemDetail.vue";
import ItemList from "../views/ItemList.vue";
import PaymentView from "../views/PaymentView.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUn",
    component: SignUp,
  },
  {
    path: "/browse",
    name: "List",
    component: ItemList,
  },
  {
    path: "/detail/id/:itemId",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/payment/id/:itemId",
    name: "Payment",
    component: PaymentView,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // return desired position
    return { top: 0 };
  },
});

export default router;
