<template>
  <div class="search-form">
    <input type="search" v-model="keyword" id="search-box" />

    <!-- <label for="search-box" class="fas fa-search"></label> -->
  </div>

  <ul v-if="itemList.length > 0 && keyword" class="list-item">
    <li v-for="(item, index) in itemList.slice(0, 4)" :key="index">
      <router-link :to="`/detail/id/${item.itemId}`">
        <div class="search-image">
          <img :src="item.imageSpan" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const keyword = ref();
    const store = useStore();
    watch(keyword, (newKeyWord) => {
      store.dispatch("item/getItembySearchAction", newKeyWord);
    });
    const itemList = computed(() => store.state.item.allItem);
    return {
      keyword,
      itemList,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  position: absolute;
  margin-top: 2rem;
  display: flex;
  top: 5.5rem;
  right: 15rem;

  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem 3rem;
    border-radius: 1rem;
    display: flex;
    border: 0.1rem solid var(--light-color);
    background-color: var(--gray);
    color: #fff;
  }
  label {
    margin-right: 2rem;
    border-radius: 20rem;
  }
}
.list-item {
  position: absolute;
  list-style: none;
  background-color: var(--gray);
  border-radius: 0.5rem;
  top: 13rem;
  right: 15rem;

  a {
    display: flex;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem 0 1rem;
    font-size: 2rem;
    align-items: center;
    color: var(--light-color);
    border: 0.1rem solid var(--gray);
    &:hover {
      border: 0.1rem solid var(--light-color);
    }
    img {
      width: 11.2rem;
      height: 6.3rem;
      margin-right: 2rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
