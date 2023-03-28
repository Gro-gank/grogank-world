<template>
  <section class="the-category">
    <p class="heading">Browse category</p>
    <div class="category-content">
      <router-link to="item-list" @click="handleChooseCategory('action')">
        <div class="category-item">
          <img src="images/category/action-game.jpg" alt="" />
          <p>Action</p>
        </div>
      </router-link>
      <router-link to="item-list" @click="handleChooseCategory('adventure')"
        ><div class="category-item">
          <img src="images/category/adventure-game.png" alt="" />
          <p>Adventure</p>
        </div></router-link
      >
      <router-link to="item-list" @click="handleChooseCategory('sport')">
        <div class="category-item">
          <img src="images/category/sport.jpg" alt="" />
          <p>Sport</p>
        </div></router-link
      >
      <router-link to="item-list" @click="handleChooseCategory('strategy')"
        ><div class="category-item">
          <img src="images/category/strategy.jpg" alt="" />
          <p>Strategy</p>
        </div></router-link
      >
      <router-link to="item-list" @click="handleChooseCategory('order')">
        <div class="category-item">
          <img src="images/category/indie.jpg" alt="" />
          <p>Order</p>
        </div></router-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-category {
  font-size: 2rem;
  border-top: 0.5rem solid #2a2a2a;
  text-align: center;
  h1 {
    margin-top: -2rem;
    color: var(--yellow);
  }
  .category-content {
    .category-item {
      display: inline-block;
      background-color: #2a2a2a2a;
      margin-top: 2rem;
      width: 19%;
      height: 15rem;
      align-items: center;
      text-align: center;
      margin-left: 1rem;
      border: 0.5rem solid black;
      background-color: rgba($color: #000000, $alpha: 0.5);

      img {
        height: 14rem;
        width: 21rem;
      }
      p {
        display: inline-block;
        color: var(--light-color);
      }
      &:hover {
        border: 0.5rem solid yellow;
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
  .the-category {
    padding: 5rem 7rem;
    justify-content: center;
    h1 {
      font-size: 5rem;
    }
    .category-content {
      display: grid;
      .category-item {
        width: 90%;
        height: 35rem;
        display: grid;
        padding: 0rem 5rem;
        margin: 0 2rem;
        align-items: center;
        justify-content: center;
        img {
          height: 30rem;
          width: 30rem;
          position: static;
        }
        a {
          font-size: 5rem;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .category-content {
    display: grid;
    align-items: center;
    justify-content: center;

    .category-item {
      padding: 5rem;
      justify-content: center;

      img {
        height: 15rem;
        width: 20rem;
      }
      a {
        font-size: 5rem;
      }
    }
  }
}
</style>
