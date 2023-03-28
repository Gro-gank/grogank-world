<template>
  <p class="heading">Payment History</p>
  <div class="content">
    <div class="payment-list">
      <div
        class="payment-item"
        v-for="(item, index) in paymentList"
        :key="index"
      >
        <div class="item-image">
          <img :src="item.image" alt="" />
        </div>
        <div class="item-info">
          <div class="header">
            <p>{{ item.name }}</p>
            <router-link :to="`/detail/id/${item.itemId}`"
              >Go to detail</router-link
            >
          </div>
          <p>Price: {{ item.price }} $</p>
          <p>
            Sale: <span v-if="item.isSale === true">Yes</span>
            <span v-else>No</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user.user);
    store.dispatch("user/getUserPersonalAction", user.value[0].userId);
    const userPersonal = computed(() => store.state.user.userPersonal);
    console.log("userPersonal", userPersonal.value);
    const paymentList = userPersonal.value[0].paymentHistory;
    return {
      paymentList,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 90%;

  .payment-list {
    width: 100%;

    .payment-item {
      display: flex;
      padding: 1.5rem;
      margin: 1rem 0;
      width: 100%;
      border: 0.2rem solid rgb(18, 18, 18);
      &:hover {
        border: 0.2rem solid var(--light-color);
      }
      .item-image {
        img {
          width: 25rem;
          height: 17rem;
          border-radius: 1rem;
        }
      }
      .item-info {
        margin: 1rem 5rem;
        width: 70%;
        font-size: 2rem;
        .header {
          display: flex;
          width: 70%;
          justify-content: space-between;
          a {
            color: var(--light-color);
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
