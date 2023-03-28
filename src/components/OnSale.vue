<template>
  <section class="container">
    <div class="heading">On Sale</div>
    <div class="swiper-content">
      <swiper
        :breakpoints="{
          998: { slidesPerView: 5 },
          745: { slidesPerView: 2 },
          600: { slidesPerView: 1 },
        }"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :space-between="1"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- // :scrollbar="{ draggable: true }" -->
        <swiper-slide
          class="swiper-item"
          v-for="(item, index) in saleItemList"
          :key="index"
        >
          <router-link
            :to="`/detail/id/${item.itemId}`"
            @click="viewCount(item)"
          >
            <div class="image-container">
              <img :src="item.imageTitle" alt="" />
            </div>
            <div class="swiper-item-overview">
              <h3>{{ item.name }}</h3>
              <h5>{{ item.developer }}</h5>
              <div class="price-place">
                <div class="sale-logo">Sale</div>
                <p>
                  <span class="sale-price">{{ item.price }}$</span> >
                  {{ item.salePrice }}$
                </p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { useStore } from "vuex";
import { computed } from "vue";
SwiperCore.use([Navigation, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    store.dispatch("item/getSaleItemAction");
    const saleItemList = computed(() => store.state.item.saleItemList);
    const viewCount = (item) => {
      store.dispatch("item/countViewAction", item);
    };
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      saleItemList,
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .swiper-content {
    .swiper {
      font-size: 1.5rem;
      padding: 0.5rem 1.5rem;
      .swiper-item {
        padding: 1rem;
        // height: 43rem;
        border-radius: 0.7rem;
        cursor: pointer;
        &:hover {
          background-color: var(--gray);
        }
        a {
          color: var(--light-color);
        }
      }
      .image-container {
        text-align: center;

        padding: 1rem 1.3rem;
        img {
          width: 24rem;
          height: 28rem;
        }
      }
      .swiper-item-overview {
        padding: 1rem 0 1.5rem 1rem;
        font-size: 1.7rem;
        h3 {
          text-transform: uppercase;
        }
        .price-place {
          padding-top: 1.5rem;
          display: flex;
          .sale-logo {
            margin-right: 1rem;
          }
          .sale-price {
            text-decoration: line-through;
          }
        }
      }
    }
    .swiper-button-next {
      padding-left: 1rem;
      color: var(--light-yellow);
      height: 1rem;
    }

    .swiper-button-prev {
      padding-right: 2rem;

      color: var(--light-yellow);
      height: 1rem;
    }
  }
}
@media (max-width: 991px) {
}
@media (max-width: 768px) {
}
@media (max-width: 720px) {
  .swiper-slide {
    width: 100%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    .image-container {
      justify-content: center;
      justify-items: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 25rem;
      img {
        width: 50rem;
        height: 60rem;
      }
    }
    .swiper-item-overview {
      justify-content: center;
      justify-items: center;
      align-items: center;
      text-align: center;
      .price-place {
        justify-content: center;
        justify-items: center;
        align-items: center;
        text-align: center;
      }
    }
  }
}
</style>
