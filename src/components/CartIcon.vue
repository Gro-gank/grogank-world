<template>
  <a class="cart-icon" @click="testAlert"
    ><i class="fa-solid fa-cart-shopping">{{ cart }}</i></a
  >
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const store = useStore();
    const cart = ref(0);
    try {
      const userDetail = computed(() => store.state.user.user);
      store.dispatch("user/getUserPersonalAction", userDetail.value[0].userId);
      const userPersonal = computed(() => store.state?.user?.userPersonal);
      if (userDetail.value[0] && userPersonal.value[0]) {
        const cartList = computed(() => userPersonal.value[0].cart);
        cart.value = cartList.value.length;
      }
    } catch (err) {
      cart.value = 0;
    }
    const testAlert = () => {
      Swal.fire({
        title: "Hello",
        height: 600,
        width: 600,
        fontSize: 100,
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
    };
    return {
      cart,
      testAlert,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-icon {
  position: fixed;
  bottom: 20rem;
  right: 3rem;
  z-index: 99;
  height: 4rem;
  padding: 0.5rem;
  width: 5rem;
  text-align: center;
  background-color: var(--yellow);
  cursor: pointer;
  border-radius: 10px;
  font-size: 2rem;
  transition: 0.7s;

  &:hover {
    background-color: #fff;
    color: rgb(18, 18, 18);
  }
  i {
    color: rgb(18, 18, 18);
  }
}
</style>
