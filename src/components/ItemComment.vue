<template>
  <div class="heading">User Reviews</div>
  <section class="container">
    <div class="content">
      <div class="comment-list">
        <div
          class="comment-item"
          v-for="(review, index) in reviewList"
          :key="index"
        >
          <h4>{{ review.userName }}</h4>
          <div class="rate">
            <p>
              Rate: <i class="fa fa-star">{{ review.rate }}</i>
            </p>
            <p>Time: {{ review.createdAt }}</p>
          </div>
          <p class="comment">
            {{ review.comment }}
          </p>
        </div>
      </div>
      <div class="comment-form">
        <h4>Add your review</h4>
        <form action="submit" @submit.prevent="hanleSubmit">
          <label for="rate"
            >Your Rate:
            <select name="rate" id="" v-model="userReview.rate">
              <option :value="rate" v-for="(rate, index) in 10" :key="index">
                {{ rate }}
              </option>
            </select>
          </label>
          <label for="comment">Comment: </label>
          <textarea
            name="comment"
            id=""
            cols="70"
            rows="10"
            v-model="userReview.comment"
          ></textarea>
          <button class="main-btn">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    const { item } = toRefs(props);
    const store = useStore();
    const router = useRouter();
    store.dispatch("review/getItemReviewAction", item.value.itemId);
    const reviewList = computed(() => store.state.review.reviewList);
    const userReview = reactive({
      rate: "",
      content: "",
      itemId: "",
      userId: "",
      userName: "",
    });
    const hanleSubmit = () => {
      const user = computed(() => store.state.user.user);
      try {
        userReview.itemId = item.value.itemId;
        userReview.userId = user.value[0].userId;
        userReview.userName = user.value[0].lastName;
        item.value.rate =
          Math.round(((item.value.rate + userReview.rate) / 2) * 10) / 10;
        const newItem = reactive({
          itemId: item.value.itemId,
          rate: item.value.rate,
        });
        store.dispatch("review/addReviewAction", {
          userReview,
          newItem,
          router,
        });
        // store.dispatch("review/getItemReviewAction", item.value.itemId);
      } catch (err) {
        alert("You should Sign in to continue");
      }
    };
    return {
      userReview,
      hanleSubmit,
      reviewList,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 5% 7%;
  display: grid;
  font-size: 2rem;

  .content {
    display: flex;
    .comment-list {
      width: 65%;
      padding: 1rem;
      .comment-item {
        h4 {
          font-size: 2.2rem;
        }
        margin-bottom: 5rem;
        border-bottom: 0.1rem solid var(--light-color);
        padding: 1rem;
        width: 100%;
        letter-spacing: 0.2rem;
        .rate {
          display: flex;
          width: 90%;
          justify-content: space-between;
        }
        .comment {
          padding: 1rem;
        }
      }
    }
    .comment-form {
      width: 28%;
      position: sticky;
      margin-left: 5rem;
      top: 25rem;
      bottom: 70%;
      position: -webkit-sticky;
      select {
        font-size: 2rem;
        margin-left: 2rem;
      }
      form {
        display: grid;
        font-size: 2rem;
        margin: 1rem;
        textarea {
          padding: 1rem;
          font-size: 2rem;
          margin-top: 2rem;
          background-color: rgb(18, 18, 18);
          color: var(--light-color);
          border: 0.1rem solid var(--gray);
        }
      }
    }
  }
}
</style>
