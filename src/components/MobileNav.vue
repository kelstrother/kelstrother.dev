<template>
  <div class="mobile-nav">
    <router-link class="mobile-link" to="/">home </router-link> 
    <router-link class="mobile-link" to="/mywork">my.work </router-link> 
    <router-link class="mobile-link" to="/about">about </router-link> 
    <router-link class="mobile-link" to="/contact">contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobile-nav {
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-evenly;
  padding: 0 1em;
  align-items: center;
  width: 100vw;
  height: 10vh;
  display: none;
}
.mobile-link {
  transform: rotate(25deg);
  text-decoration: none;
  -webkit-text-stroke: 1.75px rgba(4, 182, 226, 1);
  color: rgba(0, 0, 0, 1);
  letter-spacing: 1.2px;
  font-size: 1.4rem;
  font-weight: 900;
  filter: brightness(120%);
  font-family: "Poppins", sans-serif;

  &.router-link-exact-active {
    -webkit-text-stroke: 2px rgba(252, 214, 45, 0.507);
    font-weight: 900;
    /* transform: rotate(-10deg); */
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    transition: 0.5s ease;
  }
}
</style>
