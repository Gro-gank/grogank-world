<template>
  <section class="container">
    <div class="top-side">
      <div class="heading"><h2>All Games</h2></div>
      <div class="option">
        <div class="show">
          <p>Show :</p>
          <div class="show-option">
            <b> {{ showOption }}</b>
            <div class="option-show">
              <p
                class="option-show-item"
                @click="handleChooseNew('New release')"
              >
                New release
              </p>
              <p class="option-show-item" @click="handleChooseRate('Top rate')">
                Top rate
              </p>
              <p
                class="option-show-item"
                @click="handleChooseView('Most view')"
              >
                Most view
              </p>
              <p
                class="option-show-item"
                @click="handleChooseHighLow('Price :High to low')"
              >
                Price :High to low
              </p>
              <p
                class="option-show-item"
                @click="handleChooseLowHigh('Price :Low to high')"
              >
                Price :Low to high
              </p>
              <p class="option-show-item" @click="handleChooseSale('On Sale')">
                On Sale
              </p>
            </div>
          </div>
        </div>
        <div class="list-style">
          <div
            class="list-option"
            @click="handleChooseListOption(false)"
            :class="{ active: listOption == false }"
          >
            <i class="fas fa-th-large"></i>
          </div>
          <div
            class="list-option"
            @click="handleChooseListOption(true)"
            :class="{ active: listOption == true }"
          >
            <i class="fa-solid fa-list"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left-side">
        <item-listby-listing
          :itemList="itemList.value"
          v-if="listOption == true"
        ></item-listby-listing>
        <!-- <test-paginate
          :itemList="itemList.value"
          v-if="listOption == true"
        ></test-paginate> -->
        <item-listby-grid
          :itemList="itemList.value"
          v-if="listOption == false"
        ></item-listby-grid>
      </div>
      <div class="right-side">
        <list-sidebar></list-sidebar>
      </div>
    </div>
  </section>
  <cart-icon></cart-icon>
  <goto-top-button></goto-top-button>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ItemListbyListing from "@/components/ItemListbyListing.vue";
import ItemListbyGrid from "@/components/ItemListbyGrid.vue";
import ListSidebar from "@/components/ListSidebar.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
import CartIcon from "@/components/CartIcon.vue";
// import TestPaginate from "@/components/TestPaginate.vue";
export default {
  components: {
    ItemListbyListing,
    ItemListbyGrid,
    ListSidebar,
    GotoTopButton,
    CartIcon,
    // TestPaginate,
  },
  setup() {
    const store = useStore();

    store.dispatch("item/getAllItemAction");
    const itemList = ref();
    itemList.value = computed(() => store.state.item.allItem);
    const listOption = ref(false);
    const handleChooseListOption = (value) => {
      listOption.value = value;
    };
    const showOption = ref("New release");
    const handleChooseNew = (option) => {
      showOption.value = option;
      store.dispatch("item/getAllItemAction");

      itemList.value = computed(() => store.state.item.newReleaseItem);
    };
    const handleChooseRate = (option) => {
      showOption.value = option;
      store.dispatch("item/getAllItemAction");

      itemList.value = computed(() => store.state.item.itembyRate);
    };
    const handleChooseView = (option) => {
      showOption.value = option;
      store.dispatch("item/getAllItemAction");

      itemList.value = computed(() => store.state.item.itembyView);
    };
    const handleChooseHighLow = (option) => {
      showOption.value = option;
      store.dispatch("item/getAllItemAction");

      itemList.value = computed(() => store.state.item.itemPriceHightoLow);
    };
    const handleChooseLowHigh = (option) => {
      showOption.value = option;
      store.dispatch("item/getAllItemAction");

      itemList.value = computed(() => store.state.item.itemPriceLowtoHigh);
    };
    const handleChooseSale = (option) => {
      showOption.value = option;
      store.dispatch("item/getSaleItemAction");
      itemList.value = computed(() => store.state.item.saleItemList);
    };

    return {
      handleChooseListOption,
      listOption,
      showOption,
      handleChooseNew,
      handleChooseRate,
      handleChooseView,
      handleChooseHighLow,
      handleChooseLowHigh,
      handleChooseSale,
      itemList,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: var(--light-color);
  font-size: 2rem;
  position: relative;
  padding: 6% 7%;
  font-weight: 300;
  .option {
    display: flex;
    width: 70%;
    margin-top: 5rem;
    justify-content: space-between;
  }
  .list-style {
    display: flex;
    width: 5rem;
    justify-content: space-between;
  }
  .active {
    color: var(--light-yellow);
  }
  .show {
    display: flex;
    .show-option {
      margin-left: 2rem;
      cursor: pointer;
      b {
        border-bottom: 0.1rem solid var(--light-color);
      }
      &:hover > .option-show {
        display: block;
      }
      .option-show {
        display: none;
        .option-show-item {
          border: 0.1rem solid rgb(18, 18, 18);
          padding: 0.1rem 0.5rem;

          &:hover {
            border: 0.1rem solid var(--light-color);
          }
        }
      }
    }
  }
  .content {
    display: flex;
    .left-side {
      width: 75%;
      color: var(--light-color);
      margin: 2rem 0;
      padding: 0.5rem 1rem;
    }
    .right-side {
      width: 23%;
      color: var(--light-color);
      margin: 2rem 0;
      margin-left: 7rem;
      padding: 0.5rem 1rem;
    }
  }
}
@media (max-width: 1270px) {
  .container {
    padding: 10% 2%;
  }
  .content {
    display: block;

    .left-side {
      width: 60%;
    }
    .right-side {
      width: 20%;
      margin: 0.5rem;
    }
  }
}
@media (max-width: 1100px) {
}
@media (max-width: 768px) {
  .container {
    display: grid;
    .left-side {
      width: 90%;
    }
  }
}
@media (max-width: 450px) {
  .content {
    display: grid;
  }
  .left-side {
    width: 60%;
  }
  .right-side {
    width: 40%;
    margin: 0.5rem;
  }
}
</style>
