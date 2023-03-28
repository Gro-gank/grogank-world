<template>
  <div class="banner">
    <div class="video-container">
      <div class="banner-overlay"></div>
      <video loop autoplay muted src="videos/banner3.mp4"></video>
    </div>
    <div class="banner-title">
      <div class="logo"><span>Grogank</span> World</div>
      <p>We supply every hottest Games for Entertainment, and Softwares</p>
      <!-- <search-form></search-form> -->
    </div>
  </div>
</template>

<script>
// import SearchForm from "./SearchForm.vue";
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  margin-top: 0rem;
  display: block;
  //   .banner-overlay {
  //     position: absolute;
  //     min-height: 100%;
  //     min-width: 100vw;
  //     max-height: 100%;
  //     max-width: 100%;

  //     background-size: cover;
  //     background-position: center;
  //     justify-content: flex-end;
  //     top: 0;
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     background-color: rgba(113, 112, 112, 0.5);
  //     z-index: 2;
  //   }
  .banner-title {
    position: absolute;
    display: block;
    width: 100%;
    height: 80%;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 4rem;
    padding: 15% 15%;
    font-weight: 600;
    color: var(--light-color);
    span {
      color: var(--yellow);
    }
    p {
      font-size: 3rem;
    }
  }
  .video-container {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      background-color: rgba(113, 112, 112, 0.5);
      border-radius: 5px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  video {
    // min-height: 60vh;
    // min-width: 100vw;
    // max-height: 60%;
    // max-width: fit-content;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    background-size: cover;
    background-position: center;
    justify-content: flex-end;
    overflow: hidden;
  }
}

@media (max-width: 991px) {
  .banner-overlay {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: left;
  }
}
@media (max-width: 768px) {
  .banner {
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    .banner-title {
      font-size: 3rem;
      p {
        font-size: 2rem;
      }
    }
  }
}
@media (max-width: 450px) {
  .banner {
    .banner-title {
      font-size: 2rem;
      p {
        font-size: 2rem;
      }
    }
    .video-container {
      video {
        min-height: 100%;
      }
    }
  }
}
</style>
