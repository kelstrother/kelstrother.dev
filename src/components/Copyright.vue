<template>
  <div class="container">
    <div class="backdrop"></div>
    <footer class="statement">
      <p>
        <small class="copyright"
          >&copy;2021 all rights reserved etc... kelstrother.dev</small
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.backdrop {
  height: 4vh;
  width: 100vw;
  background: rgba(1, 162, 255, 0.8);
  filter: blur(3px);
  position: absolute;
  display: inline-block;
  bottom: 0;
  z-index: 0;
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(1px);
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  bottom: 10px;
  z-index: 5;
}
@media screen and (min-width: 2550px) {
  .copyright {
    font-size: 0.8rem;
    bottom: 15px;
  }
}
</style>
