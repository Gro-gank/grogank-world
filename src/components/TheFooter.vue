<template>
  <footer class="footer">
    <div class="share">
      <a href="#" class="fab fa-facebook"></a>
      <a href="#" class="fab fa-twitter"></a>
      <a href="#" class="fab fa-instagram"></a>
      <a href="#" class="fab fa-linkedin"></a>
      <a href="#" class="fab fa-pinterest"></a>
    </div>

    <div class="credit">
      created by <span>Grogank </span> | all right reserved
    </div>
  </footer>
  <!-- footer ends -->
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  position: relative;
  background-color: #2a2a2a;
  background-size: cover;
  border-top: 0.2rem solid var(--light-color);
  text-align: center;
  bottom: 0;
  left: 0;
}

.footer .share {
  padding: 1rem 0;
}

.footer .share a {
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  color: #fff;
  border: var(--border);
  margin: 0.3rem;
  border-radius: 50%;
}

.footer .share a:hover {
  background-color: #2a2a2a;
}

.footer .credit {
  font-size: 2rem;
  color: #fff;
  font-weight: lighter;
  padding: 1.5rem;
}

.footer .credit span {
  color: var(--yellow);
}
</style>
