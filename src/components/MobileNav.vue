<template>
  <nav  class="mobile-nav">
    <router-link class="mobile-link" to="/">home</router-link> /
    <router-link class="mobile-link" to="/mywork">my.work</router-link> /
    <router-link class="mobile-link" to="/about">about</router-link> /
    <router-link class="mobile-link" to="/contact">contact</router-link>
  </nav>
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
   color: rgba(87, 153, 197, 1);
   /* -webkit-text-stroke: 1px rgba(87, 153, 197, 1); */
   justify-content: space-evenly;
   align-items: center;
   font-family: "Poppins", sans-serif;
   width: 100vw;
   height: 10vh;
}
.mobile-link {
   text-decoration: none;
   color: goldenrod;
   -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
   /* display: inline-block; */
   font-size: 1.2rem;
   font-weight: 600;
   font-family: "Poppins", sans-serif;

   &.router-link-exact-active {
      color: rgb(47, 133, 190);
      -webkit-text-stroke: 1px rgba(250, 195, 57, 0.747);
      font-weight: 800;
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif;
   }
   
}
</style>
