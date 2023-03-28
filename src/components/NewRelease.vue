<template>
  <section class="container">
    <div class="heading">New Releases</div>
    <div class="release-swiper-content">
      <swiper
        :breakpoints="{
          998: { slidesPerView: 2 },
          745: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :space-between="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- // :scrollbar="{ draggable: true }" -->
        <swiper-slide
          class="release-swiper-item"
          v-for="(item, index) in itemList.slice(0, 10)"
          :key="index"
        >
          <router-link
            :to="`/detail/id/${item.itemId}`"
            @click="viewCount(item)"
          >
            <div class="release-image-container">
              <img class="img" :src="item.imageSpan" alt="" />
            </div>
            <div class="release-swiper-item-overview">
              <h3>{{ item.name }}</h3>
              <h5>{{ item.developer }}</h5>
              <p>Release: {{ item.release }}</p>
              <div class="price-place" v-if="item.isSale == true">
                <div class="sale-logo">Sale</div>
                <p>
                  <span class="sale-price">{{ item.price }}$</span> > $
                  {{ item.salePrice }}
                </p>
              </div>
              <div v-else>
                <p>$ {{ item.price }}</p>
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
    store.dispatch("item/getAllItemAction");
    const itemList = computed(() => store.state.item.newReleaseItem);
    const viewCount = (item) => {
      store.dispatch("item/countViewAction", item);
    };
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      itemList,
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.release-swiper-content {
  margin-top: 2rem;
  .swiper {
    font-size: 2rem;
    // padding: 0.5rem 1rem;
    .release-swiper-item {
      color: var(--light-color);
      padding: 1rem 1rem 1rem 1.5rem;
      height: 53rem;
      border-radius: 0.5rem;
      a {
        color: var(--light-color);
      }
      cursor: pointer;
      &:hover {
        background-color: var(--gray);
      }
      .release-image-container {
        text-align: center;
        img {
          border-radius: 1rem;
          height: 35rem;
          width: 60rem;
        }
      }
      .release-swiper-item-overview {
        padding: 2rem 5rem;

        .price-place {
          display: flex;
          width: 15rem;
          justify-content: space-between;
        }
      }
    }
  }
}
@media (max-width: 991px) {
}
@media (max-width: 745px) {
  .release-swiper-content {
    .release-swiper-item {
      height: 60rem;

      .release-swiper-item-overview {
        font-size: 2rem;
        text-align: center;
        .price-place {
          text-align: center;
          .sale-logo {
            text-align: center;
          }
        }
      }
    }
  }
}
@media (max-width: 650) {
  .release-swiper-content {
    .release-swiper-item {
      text-align: center;
      align-items: center;
      justify-content: center;
      justify-items: center;
      align-content: center;
      height: 60rem;
      .release-image-container {
        width: 30rem;
        height: 20rem;
        padding: 0.5rem;
        img {
          max-width: 30rem;
          max-height: 20rem;
        }
      }
      .release-swiper-item-overview {
        text-align: center;
      }
    }
  }
}
@media (max-width: 450) {
  .release-swiper-content {
    .swiper {
      .release-swiper-item {
        justify-content: center;
        padding: 0 2rem;
        .release-image-container {
          width: 10rem;
          height: 7rem;
          .img {
            width: 10rem;
            height: 7rem;
          }
          .release-swiper-item-overview {
            .price-place {
              text-align: center;
              padding: 0 5rem;
              .sale-logo {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
