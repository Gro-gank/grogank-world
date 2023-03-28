<template>
  <app-pagintation :itemList="itemList" v-slot="slotProps">
    <div class="item">
      <router-link :to="`/detail/id/${slotProps.item.itemId}`">
        <div class="image">
          <img :src="slotProps.item.imageSpan" alt="" />
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
          <div class="footer">
            <div class="fa fa-eye">{{ slotProps.item.view }}</div>
            <div class="fa fa-star">{{ slotProps.item.rate }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </app-pagintation>
  <!-- <div class="item" v-for="(item, index) in itemList" :key="index"></div> -->
</template>

<script>
import AppPagintation from "./AppPagintation.vue";
export default {
  components: { AppPagintation },
  props: {
    itemList: {
      type: Object,
    },
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  a {
    color: var(--light-color);
    display: flex;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: var(--gray);
    }
    .image {
      margin-right: 2rem;
      img {
        width: 25.6rem;
        height: 14.4rem;
      }
    }
    .info {
      width: 60%;
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
      .footer {
        margin-top: 1.5rem;
        width: 40%;
        display: flex;
        font-size: 1.4rem;
        justify-content: space-between;
      }
    }
  }
}
</style>
