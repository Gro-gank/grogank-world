<template>
  <div class="item-list">
    <app-pagintation :itemList="itemList" v-slot="slotProps">
      <div class="item">
        <router-link
          :to="`/detail/id/${slotProps.item.itemId}`"
          @click="viewCount(slotProps.item)"
        >
          <div class="image">
            <img :src="slotProps.item.imageTitle" alt="" />
          </div>
          <div class="info">
            <h3>{{ slotProps.item.name }}</h3>
            <p>{{ slotProps.item.developer }}</p>
            <p>Release: {{ slotProps.item.release }}</p>

            <h3 class="price-place sale" v-if="slotProps.item.isSale === true">
              Price:
              <div class="sale-logo">Sale</div>
              <p>{{}}${{ slotProps.item.price }}{{}}</p>
              <span>> ${{ slotProps.item.salePrice }}</span>
            </h3>
            <h3 class="price-place" v-else>
              Price:{{}} <span> ${{ slotProps.item.price }}</span>
            </h3>
          </div>
          <div class="footer">
            <div class="fa fa-star">{{ slotProps.item.rate }}</div>
            <div class="fa fa-eye">{{ slotProps.item.view }}</div>
          </div>
        </router-link>
      </div>
    </app-pagintation>
  </div>
</template>

<script>
import { useStore } from "vuex";
import AppPagintation from "./AppPagintation.vue";
export default {
  components: { AppPagintation },
  props: {
    itemList: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    const viewCount = (item) => {
      store.dispatch("item/countViewAction", item);
    };
    return {
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  display: grid;
  grid-template-columns: 26rem 26rem 26rem 26rem;
  .item {
    a {
      color: var(--light-color);
      display: grid;
      margin-bottom: 2rem;
      font-size: 1.8rem;
      padding: 0.8rem;
      border-radius: 0.5rem;
      &:hover {
        background-color: var(--gray);
      }
      .image {
        text-align: center;
        img {
          border-radius: 0.5rem;
          width: 24rem;
          height: 28rem;
        }
      }
      .info {
        width: 100%;
        padding: 1rem;
        .description {
          display: flex;
          p {
            margin-left: 1rem;
          }
        }
        .price-place {
          display: flex;
        }
        .sale {
          width: 20rem;
          justify-content: space-between;
          p {
            text-decoration: line-through;
          }
        }
      }
      .footer {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        width: 80%;
        display: flex;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        justify-content: space-between;
      }
    }
  }
}
@media (max-width: 1100px) {
  .item-list {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
@media (max-width: 768px) {
  .item-list {
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media (max-width: 450px) {
  .item-list {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
