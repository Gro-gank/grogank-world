<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h4>Filter</h4>
      <p @click="handleResetFilter">Reset</p>
    </div>
    <div class="option">
      <input type="search" placeholder="keywords" v-model="keyword" />
    </div>
    <div class="option">
      <div class="title">
        <p>Category :</p>
        <!-- <i class="fas fa-chevron-down"></i> -->
      </div>
      <select name="" id="" v-model="categoryOption">
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="sport">Sport</option>
        <option value="strategy">Strategy</option>
        <option value="order">Order</option>
      </select>
    </div>
    <div class="option">
      <div class="title">
        <p>Genre :</p>
        <!-- <i class="fas fa-chevron-down"></i> -->
      </div>
      <select name="" id="" v-model="gerneOption">
        <option
          :value="genre.categoryId"
          v-for="(genre, index) in genreList"
          :key="index"
        >
          {{ genre.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const keyword = ref("");
    const categoryOption = ref();
    const gerneOption = ref();
    watch(keyword, (newKeyWord) => {
      store.dispatch("item/getItembySearchAction", newKeyWord);
    });

    watch(categoryOption, (newKeyWord) => {
      store.dispatch("item/getItembyCategoryAction", newKeyWord);
      store.dispatch("category/getGenrebyCategoryAction", newKeyWord);
    });
    watch(gerneOption, (newKeyWord) => {
      store.dispatch("item/getItembyCategoryAction", newKeyWord);
    });

    const genreList = computed(() => store.state.category.genreList);
    const handleResetFilter = () => {
      keyword.value = "";
      categoryOption.value = "";
      gerneOption.value = "";
    };
    return {
      keyword,
      genreList,
      categoryOption,
      gerneOption,
      handleResetFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 25rem;
  padding: 1rem;
  width: 100%;
  .sidebar-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      cursor: pointer;
    }
  }
  .option {
    margin-top: 2rem;
    padding: 0.5rem 0;
    width: 100%;

    .title {
      padding: 0.1rem 2rem 0.1rem 0;
      display: flex;
      justify-content: space-between;
      i {
        font-size: 1.5rem;
        padding: 1rem 0;
      }
    }

    input {
      background-color: var(--gray);
      color: #fff;
      width: 100%;
      font-size: 2rem;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
    }
    select {
      background-color: rgb(18, 18, 18);
      color: #fff;
      font-size: 2rem;
      padding: 1rem 0;
      width: 98%;
      margin: 1.5rem 0;
      //   appearance: none;
      border: 0.1rem solid #fff;
      text-align: center;
      option {
        background-color: var(--gray);
        &:hover {
          background-color: var(--gray);
        }
      }
    }
  }
}
</style>
