<template>
  <section class="container">
    <div class="profile-sidebar">
      <ul>
        <li
          @click="handleChooseContent(1)"
          :class="{ active: contentNumber == 1 }"
        >
          <a>Profile</a>
        </li>
        <li
          @click="handleChooseContent(2)"
          :class="{ active: contentNumber == 2 }"
        >
          <a>Payment History</a>
        </li>
        <li
          @click="handleChooseContent(3)"
          :class="{ active: contentNumber == 3 }"
        >
          <a>Cart</a>
        </li>
      </ul>
    </div>
    <div class="profile-content">
      <profile-detail v-if="contentNumber == 1"></profile-detail>
      <profile-payment v-else-if="contentNumber == 2"></profile-payment>
      <profile-cart v-else-if="contentNumber == 3"></profile-cart>
    </div>
  </section>
  <goto-top-button></goto-top-button>
</template>

<script>
import { ref } from "vue";
import ProfileDetail from "@/components/Profile/ProfileDetail.vue";
import ProfilePayment from "@/components/Profile/ProfilePayment.vue";
import ProfileCart from "@/components/Profile/ProfileCart.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
export default {
  components: { ProfileDetail, ProfilePayment, ProfileCart, GotoTopButton },
  setup() {
    const contentNumber = ref(1);
    const handleChooseContent = (num) => {
      contentNumber.value = num;
    };

    return { handleChooseContent, contentNumber };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  font-size: 1.7rem;
  margin-top: 5rem;
  position: relative;
  .profile-sidebar {
    position: sticky;
    width: 15%;
    top: 30rem;
    ul {
      list-style: none;
      cursor: pointer;
      li {
        padding: 1.5rem 2rem;
        border: 0.2rem solid var(--gray);
        border-left: 0.5rem solid rgb(18, 18, 18);
        &:hover {
          background-color: var(--gray);
        }
        a {
          color: var(--light-color);
        }
      }
      .active {
        border-left: 0.3rem solid var(--light-yellow);
        background-color: var(--gray);
      }
    }
  }
  .profile-content {
    width: 80%;
    margin-left: 2rem;
    padding: 1rem;
    border-left: 0.1rem solid var(--light-color);
  }
}
</style>
