<template>
  <div v-for="(item, index) in paginatedData" :key="index">
    <slot :item="item"></slot>
  </div>
  <div class="btn-list">
    <button
      class="paginate-btn"
      @click="firstPage"
      :class="{ active: page == 1 }"
    >
      First
    </button>
    <button @click="backPage" class="paginate-btn">Prev</button>

    <button
      v-for="numPage in Math.ceil(itemList.length / perPage)"
      :key="numPage"
      @click="() => goToPage(numPage)"
      class="paginate-btn"
      :class="{ active: page == numPage }"
    >
      {{ numPage }}
    </button>
    <button @click="nextPage" class="paginate-btn">Next</button>
    <button
      class="paginate-btn"
      @click="lastPage"
      :class="{ active: page == Math.ceil(itemList.length / perPage) }"
    >
      Last
    </button>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
  components: {},
  props: {
    itemList: {
      type: Array,
    },
  },
  setup(props) {
    let page = ref(1);
    const { itemList } = toRefs(props);
    // const data = Array.from(Array(24).keys()).map((item) => {
    //   return { index: item, value: `this_${item}` };
    // });
    // const data = itemList.value;
    const perPage = 12;
    const paginatedData = computed(() =>
      itemList.value.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(itemList.value.length / perPage)) {
        page.value += 1;
      }
    };

    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };

    const goToPage = (numPage) => {
      page.value = numPage;
    };
    const firstPage = () => {
      page.value = 1;
    };
    const lastPage = () => {
      page.value = Math.ceil(itemList.value.length / perPage);
    };
    return {
      paginatedData,
      perPage,
      page,
      nextPage,
      backPage,
      goToPage,
      firstPage,
      lastPage,
    };
  },
};
</script>

<style lang="scss">
.btn-list {
  position: absolute;
  text-align: center;
  bottom: 8rem;
  left: 45rem;
  .paginate-btn {
    font-size: 1.5rem;
    background-color: rgb(18, 18, 18);
    color: var(--light-color);
    border: 0.1rem solid var(--light-color);
    padding: 0.5rem 2rem;
    &:hover {
      background-color: var(--gray);
    }
  }
  .paginate-btn.active {
    color: var(--light-yellow);
    background-color: var(--gray);
  }
}
@media (max-width: 450px) {
  .btn-list {
    left: 2rem;
    bottom: 2rem;
  }
}
</style>
