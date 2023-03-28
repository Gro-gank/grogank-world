<template @click="handleCloseSearchForm">
  <header class="header" id="header">
    <div class="header-list">
      <i class="fa-solid fa-bars" @click="openHeaderList"></i>
      <ul v-if="isOpenHeaderList" class="list" id="list">
        <!-- v-if="isOpenHeaderList" -->
        <li>Hello {{ user[0].lastName }}!</li>
        <li>Games</li>
        <li>Softwares</li>
        <li>Profile</li>
        <li @click="handleSignOut">
          <a> SignOut </a>
        </li>
        <li @click="closeHeaderList">
          <i class="fa-solid fa-xmark"></i> Close
        </li>
      </ul>
    </div>
    <router-link to="/" class="logo"
      ><div><span>Grogank</span> World</div></router-link
    >
    <div class="header-item">
      <div class="left-side">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/browse">Games</router-link></li>
          <li><a href="">Softwares</a></li>
          <li><a href="">Forums</a></li>
        </ul>
      </div>
      <div class="right-side">
        <div class="user-place" v-if="user[0]">
          <div class="user-name">
            Hi <span> {{ user[0].lastName }}</span>
          </div>
          <div class="user-option-list">
            <ul>
              <li>
                <router-link to="/profile"> Profile </router-link>
              </li>
              <li @click="handleSignOut">
                <a href=""> SignOut </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn-place" v-else>
          <router-link to="/sign-in">
            <div class="main-btn">SignIn</div>
          </router-link>
          <router-link to="/sign-up">
            <div class="main-btn">SignUp</div>
          </router-link>
        </div>
        <div
          class="fa fa-search btn-search"
          @click="handleOpenSearchForm"
        ></div>
        <div
          class="close"
          v-if="isOpenSearchForm"
          @click="handleCloseSearchForm"
        >
          <i class="fa fa-times"></i>
        </div>
      </div>
    </div>

    <search-form v-if="isOpenSearchForm"></search-form>
  </header>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SearchForm from "./SearchForm.vue";
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
export default {
  components: { SearchForm },
  setup() {
    const isOpenHeaderList = ref(false);
    const openHeaderList = () => {
      isOpenHeaderList.value = true;
    };
    const closeHeaderList = () => {
      isOpenHeaderList.value = false;
    };
    const store = useStore();
    const router = useRouter();
    store.dispatch("user/loadUserLoginFromLocalStorageAction");
    const user = computed(() => store.state.user.user);
    const handleSignOut = () => {
      store.dispatch("user/signOutAction", router);
    };
    const isOpenSearchForm = ref(false);
    const handleOpenSearchForm = () => {
      isOpenSearchForm.value = true;
    };
    const handleCloseSearchForm = () => {
      isOpenSearchForm.value = false;
    };
    return {
      isOpenHeaderList,
      handleSignOut,
      openHeaderList,
      closeHeaderList,
      user,
      isOpenSearchForm,
      handleOpenSearchForm,
      handleCloseSearchForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  left: 0;
  right: 0;
  min-width: 100vw;
  padding: 0.8rem 10%;
  transition: 0.5s;
  font-size: 2rem;
  background-color: var(--gray);
  color: var(--light-color);
  box-shadow: var(--box-shadow);
  align-content: center;
  align-items: center;
  z-index: 100;
  .logo {
    font-size: 3rem;
    font-weight: 600;
    color: var(--light-color);
    span {
      color: var(--yellow);
    }
  }
  .header-list {
    position: absolute;
    left: 0;
    margin: 1rem;
    display: none;
    .list {
      width: 30rem;
      margin-top: 2rem;
      background-color: var(--gray);
      border-radius: 0.4rem;
      transition: 0.5s;
      transform: scaleY(1);
      transform-origin: top;
      position: absolute;

      li {
        position: relative;
        padding: 2rem 1rem;
        border-top: 0.1rem solid var(--light-color);
        a {
          color: var(--light-color);
        }
      }
    }
  }
  .header-item {
    width: 80%;
    display: flex;
    .left-side {
      width: 78%;
      padding: 1.1rem auto;

      display: flex;
      justify-content: space-between;
      ul {
        width: 100%;
        list-style: none;
        display: flex;
        padding: 1.3rem;
        align-content: center;
        text-align: center;
        justify-content: center;

        margin: 0 2rem;
        li {
          margin: 0rem auto;
          a {
            color: var(--light-color);
            padding-bottom: 1rem;
            border-radius: 0.2rem;
            transition: 0.2s;
            &:hover {
              color: var(--light-yellow);
              border-bottom: 0.5rem solid var(--yellow);
            }
          }
        }
      }
    }
    .right-side {
      padding: 1.2rem 0.1rem;
      display: flex;
      .user-place {
        font-size: 2rem;
        .user-name {
          cursor: pointer;
          span {
            color: var(--light-yellow);
          }
        }
        &:hover > .user-option-list {
          display: block;
        }
        .user-option-list {
          position: absolute;
          right: 25rem;
          display: none;
          transition: 0.2s;
          ul {
            list-style: none;
            margin-top: 2.5rem;
            li {
              cursor: pointer;
              padding: 0.5rem 5rem;
              margin-bottom: 0.2rem;
              background-color: var(--light-color);
              border-radius: 1rem;
              a {
                color: black;
              }
              &:hover {
                border: 0.1rem solid var(--yellow);
                background-color: var(--light-yellow);
              }
            }
          }
        }
      }
      .btn-place {
        display: flex;
      }

      .btn-search {
        padding: 0.5rem 0rem 0 2rem;
      }
      .close {
        position: absolute;
        font-size: 2rem;
        top: 8.5rem;
        right: 16rem;
        z-index: 2;
        align-items: center;
        transform: translateX(-50);
        cursor: pointer;
        &:hover {
          color: yellow;
        }
      }
    }
  }
}

.sticky {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  .header {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    font-size: 1.7rem;
  }
}
@media (max-width: 991px) {
  .header {
    padding: 2rem;
    align-content: center;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .header {
    display: flex;
    font-size: 2rem;
    align-content: center;
    align-items: center;
    max-width: 100vw;
    padding: 0 4rem;

    .logo {
      width: 30%;

      //   font-size: 2.5rem;
    }
    .header-item {
      align-items: center;
      .left-side {
        ul {
          li {
            margin: 0rem 0.5rem;
          }
        }
      }
      .right-side {
        padding: 0.5rem;
      }
    }
  }
}
@media (max-width: 450px) {
  .header {
    justify-content: center;

    .header-list {
      display: block;
    }
    .logo {
      width: 60%;
      text-align: center;
    }
    .header-item {
      display: none;
    }
  }
}
</style>
