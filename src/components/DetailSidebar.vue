<template>
  <div class="sidebar">
    <div class="sidebar-img">
      <img :src="item.imageSpan" alt="" />
    </div>
    <div class="price-place sale" v-if="item.isSale === true">
      Price:
      <div class="sale-logo">Sale</div>
      <p>${{ item.price }}{{}}</p>
      <span>> ${{ item.salePrice }}</span>
    </div>
    <div class="price-place" v-else>
      Price: <span>${{ item.price }}</span>
    </div>
    <div class="button-place">
      <router-link
        :to="`/payment/id/${item.itemId}`"
        class="main-btn btn buy-btn"
        @click="handlePayment"
        >GET</router-link
      >
      <div class="main-btn btn" @click="handleAddtoCart">Add to cart</div>
      <div class="main-btn btn">Add to wishlist</div>
    </div>
    <div class="addition-info">
      <div class="info-item">
        <p>Developer :</p>
        <p>{{ item.developer }}</p>
      </div>
      <div class="info-item">
        <p>Release :</p>
        <p>{{ item.release }}</p>
      </div>
      <div class="info-item">
        <p>Platform :</p>
        <p>Windows</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const userDetail = computed(() => store.state.user.user);
    const handleAddtoCart = () => {
      try {
        store.dispatch(
          "user/getUserPersonalAction",
          userDetail.value[0].userId
        );
        const userPersonal = computed(() => store.state.user.userPersonal);
        const itemCart = reactive({
          itemId: props.item.itemId,
          name: props.item.name,
          sale: props.item.isSale,
          price: props.item.price,
          salePrice: props.item.salePrice,
          image: props.item.imageSpan,
        });
        userPersonal.value[0].cart = [...userPersonal.value[0].cart, itemCart];
        const newCart = userPersonal.value[0];
        console.log("newcart", newCart);
        store.dispatch("user/updatePersonalCart", { newCart, router });
      } catch (err) {
        alert("You should log in to continue");
        router.push("/sign-in");
      }
    };
    const handlePayment = () => {
      try {
        store.dispatch(
          "user/getUserPersonalAction",
          userDetail.value[0].userId
        );
      } catch (err) {
        alert("Login First");
        router.push("/sign-in");
      }
    };
    return {
      handleAddtoCart,
      handlePayment,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 27%;
  height: 50rem;
  position: sticky;
  top: 25rem;
  bottom: 70%;
  position: -webkit-sticky;

  .sidebar-img {
    align-items: center;
    text-align: center;
    img {
      width: 33rem;
      height: 18rem;
    }
  }
  .price-place {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 1rem 0.2rem;
    p {
      text-decoration: line-through;
    }
  }
  .sale {
    width: 60%;
  }
  .button-place {
    display: grid;
    width: 98%;
    text-align: center;
    margin: 1rem auto;
    .btn {
      margin: 1rem;
    }
    .buy-btn {
      background-color: rgb(229, 12, 12);
      color: #fff;
      &:hover {
        background-color: rgb(119, 2, 2);
      }
    }
  }
  .addition-info {
    padding: 1rem;

    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      font-size: 1.7rem;
      border-bottom: 0.1rem solid var(--gray);
    }
  }
}

@media (max-width: 991px) {
}
@media (max-width: 768px) {
  .sidebar {
    width: 90%;
    margin: 5rem 0;
    text-align: center;
    align-items: center;
  }
}
@media (max-width: 450px) {
  .sidebar {
    width: 90%;
    margin: 5rem 0;
  }
}
</style>
