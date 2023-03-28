<template>
  <section class="container">
    <div class="col left-side">
      <div class="title">
        <a>Most viewed</a>
        <button class="btn-more">More</button>
      </div>
      <div
        class="item"
        v-for="(item, index) in itemListbyView.slice(0, 7)"
        :key="index"
      >
        <router-link :to="`/detail/id/${item.itemId}`" @click="viewCount(item)">
          <div class="item-image">
            <img :src="item.imageTitle" alt="" />
          </div>
          <div class="info">
            <p>{{ item.name }}</p>
            <div class="item-price">$ {{ item.price }}</div>
            <i class="fa fa-eye">{{}} {{ item.view }}</i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="col left-side">
      <div class="title">
        <a>Top rated</a> <button class="btn-more">More</button>
      </div>
      <div
        class="item"
        v-for="(item, index) in itemListbyRate.slice(0, 7)"
        :key="index"
      >
        <router-link :to="`/detail/id/${item.itemId}`" @click="viewCount(item)">
          <div class="item-image">
            <img :src="item.imageTitle" alt="" />
          </div>
          <div class="info">
            <p>{{ item.name }}</p>

            <div class="item-price">$ {{ item.price }}</div>
            <i class="fa fa-star">{{}} {{ item.rate }}</i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="col left-side">
      <div class="title">
        <a>Software</a> <button class="btn-more">More</button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("item/getAllItemAction");
    const itemListbyView = computed(() => store.state.item.itembyView);
    const itemListbyRate = computed(() => store.state.item.itembyRate);
    const viewCount = (item) => {
      store.dispatch("item/countViewAction", item);
    };
    return {
      itemListbyView,
      itemListbyRate,
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  .col {
    width: 30%;
    border-right: 0.05rem solid var(--gray);
    padding: 1.4rem 5rem 1.2rem 2rem;
    display: grid;
    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      cursor: pointer;
      a {
        padding-bottom: 1rem;
        transition: 0.2s;
        &:hover {
          border-bottom: 0.2rem solid var(--gray);
          color: var(--light-yellow);
        }
      }

      .btn-more {
        padding: 0.5rem 1rem;
        background-color: transparent;
        border-radius: 0.4rem;
        color: #ffffff;
        cursor: pointer;
        border: 0.1rem solid var(--light-color);
        &:hover {
          background-color: rgba($color: #ffffff, $alpha: 0.2);
        }
      }
    }
    .item a {
      display: flex;
      padding: 1.5rem 2rem 1.2rem 2rem;
      font-size: 1.7rem;
      border-radius: 2rem;
      justify-items: center;
      align-items: center;
      color: var(--light-color);
      cursor: pointer;
      &:hover {
        background-color: var(--gray);
      }
      .item-image {
        margin-right: 1.6rem;
        img {
          height: 9rem;
          width: 7rem;
          border-radius: 0.5rem;
        }
      }
      .info {
        display: grid;
        i {
          margin-top: 0.6rem;
          font-size: 1rem;
          letter-spacing: 0.15rem;
        }
        .item-title {
          padding-bottom: -3rem;
        }
      }
    }
  }
}

@media (max-width: 991px) {
}
@media (max-width: 768px) {
  section {
    padding: 3rem 1%;
  }
  .container {
    display: grid;
    .col {
      width: 90%;
      padding: 1rem 0rem 1rem 2rem;
      border: none;
      .title {
        font-size: 2.5rem;
      }
      .item {
        padding: 1rem 0rem 1rem 5rem;
        font-size: 2rem;

        .item-image {
          img {
            height: 20rem;
            width: 17rem;
          }
        }
      }
    }
  }
}
@media (max-width: 450px) {
  .col {
    width: 50%;
    padding: 1rem;
    .title {
      padding: 1rem 0rem;
    }
    .item {
      padding: 1rem 0rem 1rem 1rem;
      font-size: 2rem;

      .item-image {
        img {
          height: 20rem;
          width: 17rem;
        }
      }
    }
  }
}
</style>
