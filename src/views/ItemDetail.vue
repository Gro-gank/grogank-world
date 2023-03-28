<template>
  <section class="container">
    <div class="left-side">
      <h2 class="title">{{ item[0].name }}</h2>
      <div class="populary">
        <div class="fa fa-eye">{{}} {{ item[0].view }}</div>
        <div class="fa fa-star">
          {{}} {{ item[0].rate }}
        </div>
      </div>
      <div class="video-container">
        <swiper
          :breakpoints="{
            998: { slidesPerView: 1 },
            745: { slidesPerView: 1 },
            450: { slidesPerView: 1 },
          }"
          :navigation="true"
          :space-between="1"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <!-- // :scrollbar="{ draggable: true }" -->
          <swiper-slide
            class="detail-swiper-video"
            v-for="(trailer, index) in item[0].trailer"
            :key="index"
          >
            <iframe
              class="video"
              width="726"
              height="408"
              :src="trailer"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; mute;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </swiper-slide>
        </swiper>
      </div>
      <div class="category-list">
        Category:
        <div
          class="category-item"
          v-for="(cate, index) in item[0].categoryId"
          :key="index"
        >
          <p>{{ cate }}</p>
        </div>
      </div>
      <div class="description">
        <h4>Description :</h4>
        <p v-html="item[0].description"></p>
      </div>
      <div class="gallery">
        <h4>Gallery :</h4>
        <swiper
          :breakpoints="{
            998: { slidesPerView: 1 },
            745: { slidesPerView: 1 },
            450: { slidesPerView: 1 },
          }"
          :navigation="true"
          :space-between="1"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <!-- // :scrollbar="{ draggable: true }" -->
          <swiper-slide
            class="detail-swiper-video"
            v-for="(image, index) in item[0].imageGalery"
            :key="index"
          >
            <img class="img" :src="image" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="spec">
        <h4>Specifications :</h4>
        <p v-html="item[0].spec"></p>
      </div>
    </div>
    <detail-sidebar :item="item[0]"></detail-sidebar>
  </section>
  <cart-icon></cart-icon>
  <item-comment :item="item[0]"></item-comment>
  <goto-top-button></goto-top-button>
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
SwiperCore.use([Navigation, Autoplay]);

import "swiper/css";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import DetailSidebar from "@/components/DetailSidebar.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
import ItemComment from "@/components/ItemComment.vue";
import CartIcon from "@/components/CartIcon.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    DetailSidebar,
    GotoTopButton,
    ItemComment,
    CartIcon,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("item/getItemDetailAction", route.params.itemId);
    const item = computed(() => store.state.item.itemDetail);

    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      item,
    };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  display: block;
  color: var(--light-yellow);
}
@media (max-width: 450px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: block;
    color: var(--light-yellow);
    position: relative;
  }
}
</style>
<style lang="scss" scoped>
.container {
  position: relative;
  padding: 6% 7%;
  color: var(--light-color);
  font-size: 2rem;
  font-weight: 300;
  display: flex;
  .left-side {
    width: 70%;
    padding: 3rem;
    .title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    .populary {
      display: flex;
      font-size: 1.5rem;
      width: 20%;
      justify-content: space-between;
      div {
        margin-right: 1rem;
      }
    }
    .video-container {
      margin-top: 5rem;
      .swiper {
        width: 72.6rem;
        height: 40.8rem;
        .detail-swiper-video {
          .video {
            border-radius: 0.5rem;
            border: 0.2rem solid var(--light-yellow);
          }
        }
      }
    }
    .category-list {
      margin-top: 5rem;
      display: flex;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      justify-content: space-between;
      border-left: 0.1rem solid var(--light-color);
      border-right: 0.1rem solid var(--light-color);
    }
    .description {
      margin-top: 5rem;
    }
    .gallery {
      margin-top: 2rem;
      .swiper {
        width: 72.6rem;
        height: 40.8rem;
        margin-top: 2rem;

        .detail-swiper-video {
          img {
            border: 0.1rem solid var(--light-yellow);

            border-radius: 0.5rem;
            width: 72.6rem;
            height: 40.8rem;
          }
        }
      }
    }
    .spec {
      margin-top: 5rem;
      line-height: 4rem;
      letter-spacing: 0.12rem;
      h4 {
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.5rem;
        border: 0.1rem solid var(--light-color);
        border-radius: 0.5rem;
        padding: 0.5rem;
      }
    }
  }
}
@media (max-width: 1270px) {
  .container {
    padding: 12% 3%;
  }
  .swiper {
    width: 64rem;
    height: 36rem;
    .video {
      width: 64rem;
      height: 36rem;
    }
  }

  .gallery {
    width: 56rem;
    height: 31.5rem;
    .swiper {
      width: 56rem;
      height: 31.5rem;
      .detail-swiper-video {
        .img {
          width: 56rem !important;
          height: 31.5rem !important;
        }
      }
    }
  }
}
@media (max-width: 1100px) {
  .swiper {
    width: 56rem;
    height: 31.5rem;
    .video {
      width: 56rem;
      height: 31.5rem;
    }
  }
  .gallery {
    width: 56rem;
    height: 31.5rem;
    .swiper {
      .detail-swiper-video {
        .img {
          width: 56rem;
          height: 31.5rem;
        }
      }
    }
  }
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
  .container {
    padding: 7rem 0;

    .left-side {
      padding: 0;
      width: 90%;
      align-items: center;
      justify-content: center;
      text-align: center;
      .populary {
        width: 80%;
        padding: 0 5rem;
      }
      .video-container {
        .swiper {
          width: 44.8rem;
          height: 25.2rem;
          .detail-swiper-video {
            .video {
              width: 44.8rem;
              height: 25.2rem;
              border-radius: 0.5rem;
              border: 0.2rem solid var(--light-yellow);
            }
          }
        }
      }
      .gallery {
        padding: 0;
        .swiper {
          width: 44.8rem;
          height: 25.2rem;

          .detail-swiper-video {
            img {
              width: 44.8rem;
              height: 25.2rem;
            }
          }
        }
      }
      .category-list {
        display: none;
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: block;
    color: var(--light-yellow);
    position: relative;
  }
}
</style>
