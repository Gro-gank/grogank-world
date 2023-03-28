<template>
  <p class="heading">Profile Detail</p>
  <div class="content">
    <div class="left-side">
      <div class="information">
        <p>Name: {{ user[0].firstName }} {{ user[0].lastName }}</p>
        <p>Birthday: {{ user[0].birthday }}</p>
        <p>Email: {{ user[0].email }}</p>
        <p>Join date: {{ user[0].createdAt }}</p>
      </div>
      <div class="main-btn" @click="handleOpenEdit">Edit</div>
    </div>
    <div class="right-side">
      <div class="avatar">
        <img :src="user[0].avatar" alt="" />
      </div>
    </div>
  </div>
  <app-modal :isOpenEdit="isOpenEdit" :handleCloseEdit="handleCloseEdit">
    <edit-info :user="user[0]"></edit-info>
  </app-modal>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AppModal from "./AppModal.vue";
import EditInfo from "./EditInfo.vue";
export default {
  components: { AppModal, EditInfo },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user.user);
    store.dispatch("user/getUserPersonalAction", user.value[0].userId);
    const isOpenEdit = ref(false);

    const handleOpenEdit = () => {
      isOpenEdit.value = true;
    };
    const handleCloseEdit = () => {
      isOpenEdit.value = false;
    };
    return {
      user,
      handleOpenEdit,
      isOpenEdit,
      handleCloseEdit,
    };
  },
};
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
}
.content {
  position: relative;
  display: flex;
  padding-top: 5rem;
  padding-left: 5rem;
  .left-side {
    width: 70%;
    .information {
      p {
        margin-bottom: 1rem;
      }
    }
    .main-btn {
      margin-top: 2rem;
      margin-bottom: 30rem;
    }
  }
  .right-side {
    width: 25%;
    .avatar {
      img {
        border-radius: 1rem;
        width: 22rem;
        height: 25rem;
      }
    }
  }
}
</style>
