<template>
  <a href="#" id="button" title="Go to top" :class="{ show: isTop }"
    ><i class="fa-solid fa-arrow-up"></i
  ></a>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isTop = ref(false);
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;
      if (scrollPosition >= 200) {
        isTop.value = true;
      } else {
        isTop.value = false;
      }
    });
    return { isTop };
  },
};
</script>

<style lang="scss">
#button {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 99;
  height: 3rem;
  width: 3rem;
  text-align: center;
  background-color: var(--yellow);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transform: scaleY(0);
  font-size: 1.5rem;
  transition: 0.7s;
  visibility: hidden;
  &:hover {
    background-color: red;
  }
  i {
    color: white;
  }
  &.show {
    visibility: visible;
    transform: scaleY(1);
  }
}
</style>
