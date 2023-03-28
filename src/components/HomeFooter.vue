<template>
  <section class="container">
    <div class="content">
      <router-link to="/browse">
        <!-- <img src="https://wallpaperaccess.com/full/4882904.jpg" alt="" /> -->
        <img src="https://wallpaperaccess.com/full/774615.jpg" alt="" />
      </router-link>

      <div class="right-side">
        <router-link to="/browse"> <h4>Explore Our Catalog</h4></router-link>
        <p>
          Browse by genre, features, price, and more to find your next favorite
          game.
        </p>
        <router-link to="/browse" class="main-btn">BROWSE ALL</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  .content {
    padding: 1rem 15rem;
    display: flex;
    img {
      width: 64rem;
      height: 36rem;
      border-radius: 2rem;
      &:hover {
        scale: 1.1;
      }
    }
    .right-side {
      font-size: 2rem;
      margin-left: 5rem;
      padding-top: 10rem;
      a {
        color: var(--light-color);
      }
      p {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
      .main-btn {
        color: black;
      }
    }
  }
}
</style>
