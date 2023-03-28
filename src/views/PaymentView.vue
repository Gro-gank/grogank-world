<template>
  <section class="container">
    <div class="heading">Payment</div>
    <div class="content">
      <div class="left-side">
        <p>Infomation:</p>
        <div class="payment-overview">
          <p>
            Name: {{ userDetail[0].firstName }} {{ userDetail[0].lastName }}
          </p>
          <p>Mail: {{ userDetail[0].email }}</p>
          <p>Choose payment method:</p>

          <label class="check-box"
            >Paypal
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>

          <label class="check-box"
            >Credit card (Visa/MasterCard)
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <button class="main-btn" @click="handlePay">Place payment</button>
        </div>
      </div>
      <div class="right-side">
        <div class="payment-item-title">
          <p>Payment detail</p>
        </div>
        <div class="payment-image">
          <img :src="itemDetail[0].imageSpan" alt="" />
        </div>
        <div class="payment-item-info">
          <h3>{{ itemDetail[0].name }}</h3>
          <p>{{ itemDetail[0].developer }}</p>
          <p>Release: {{ itemDetail[0].release }}</p>
          <div class="payment-price-place">
            <div v-if="itemDetail[0].isSale" class="sale">
              <p class="sale-logo">Sale</p>
              <div class="price">
                <h4>Price:</h4>
                <p>{{ itemDetail[0].salePrice }} $</p>
              </div>
            </div>
            <div v-else class="price">
              <h4>Price: {{ itemDetail[0].price }} $</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const itemId = route.params.itemId;
    try {
      store.dispatch("item/getItemDetailAction", itemId);
    } catch (err) {
      alert("error");
    }
    const itemDetail = computed(() => store.state.item.itemDetail);

    const userDetail = computed(() => store.state.user.user);
    store.dispatch("user/getUserPersonalAction", userDetail.value[0].userId);
    const userPersonal = computed(() => store.state.user.userPersonal);
    console.log(userPersonal.value);
    const payment = reactive({
      itemId: itemId,
      name: itemDetail.value[0].name,
      price: itemDetail.value[0].price,
      sale: itemDetail.value[0].isSale,
      image: itemDetail.value[0].imageSpan,
    });

    const handlePay = () => {
      const router = useRouter();

      userPersonal.value[0].paymentHistory = [
        ...userPersonal.value[0].paymentHistory,
        payment,
      ];
      const newpayment = userPersonal.value[0];
      store.dispatch("user/updatePersonalPayment", { newpayment, router });
    };
    return {
      itemDetail,
      userDetail,
      handlePay,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 6% 7%;
  color: var(--light-color);
  font-size: 2rem;
  font-weight: 300;
  .content {
    display: flex;
    .left-side {
      padding: 0 auto;
      width: 70%;
      padding: 2rem;
      margin-top: 2rem;
      .payment-overview {
        margin: 1rem 2rem;
        line-height: 5rem;
      }
      .check-box {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        margin-top: 2rem;
        font-size: 2rem;
        cursor: pointer;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the browser's default radio button */
      .check-box input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      /* Create a custom radio button */
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
      }

      /* On mouse-over, add a grey background color */
      .check-box:hover input ~ .checkmark {
        background-color: #ccc;
      }

      /* When the radio button is checked, add a blue background */
      .check-box input:checked ~ .checkmark {
        background-color: #2196f3;
      }

      /* Create the indicator (the dot/circle - hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the indicator (dot/circle) when checked */
      .check-box input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the indicator (dot/circle) */
      .check-box .checkmark:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
      }
    }
    .right-side {
      width: 29%;
      margin-top: 2rem;
      padding: 1rem 4rem;
      .payment-item-title {
        text-align: center;
        border: 0.1rem solid yellow;
        border-radius: 0.5rem;
        height: 5rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
      .payment-image {
        margin-top: 0.5rem;
        img {
          width: 33rem;
          height: 18rem;
        }
      }
      .payment-item-info {
        margin: 2rem 1rem;
        .payment-price-place {
          margin-top: 1rem;
          border-bottom: 0.4rem solid #2a2a2a;
          padding-bottom: 1rem;
          .sale {
            align-items: center;
            text-align: center;
            display: flex;
            width: 100%;
            .sale-logo {
              margin: 0 1rem 0 0;
            }
            .price {
              display: flex;
              //   h4 {
              //     margin-right: 3rem;
              //     justify-content: space-between;
              //   }
            }
          }
        }
      }
    }
  }
}
</style>
