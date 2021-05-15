<template>
  <div  class="mobile-nav">
    <router-link class="mobile-link" to="/">home</router-link> /
    <router-link class="mobile-link" to="/mywork">my.work</router-link> /
    <router-link class="mobile-link" to="/about">about</router-link> /
    <router-link class="mobile-link" to="/contact">contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mobile-nav {
   background-color: rgba(0, 0, 0, .8);
   backdrop-filter: blur(2px);
   display: flex;
   position: fixed;
   bottom: 0;
   left: 0;
   color: transparent;
   justify-content: space-evenly;
   -webkit-text-stroke: 1.5px rgb(84, 182, 247);
   align-items: center;
   font-family: "Poppins", sans-serif;
   font-weight: 800;
   width: 100vw;
   height: 10vh;
}
.mobile-link {
   text-decoration: none;
   color: transparent;
   -webkit-text-stroke: 1.5px rgb(84, 182, 247);
   letter-spacing: 1.3px;
   font-size: 1.2rem;
   font-weight: 900;
   font-family: "Poppins", sans-serif;

   &.router-link-exact-active {
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.726);
      font-weight: 900;
      transform: rotate(-5deg);
      font-size: 1.3rem;
      font-family: "Poppins", sans-serif;
      transition: .5s ease;
   }
}
.mobile-link:hover {
   color: transparent;
   -webkit-text-stroke: 2px rgb(84, 182, 247);
   font-size: 1.3rem;
}
</style>
