<template>
  <SideNav />
  <div class="container">
    <div class="perspective-menu">
      <div class="perspective-link">
        <router-link to="/" data-text="home" id="home" class="link"
          >home</router-link
        >
      </div>
      <div class="perspective-link">
        <router-link to="/mywork" data-text="my.work" id="work" class="link"
          >my.work</router-link
        >
      </div>
      <div class="perspective-link">
        <router-link to="/about" data-text="about.me" id="about" class="link"
          >about.me</router-link
        >
      </div>
      <div class="perspective-link">
        <router-link to="/contact" data-text="contact" id="contact" class="link"
          >contact</router-link
        >
      </div>
    </div>
    <Copyright />
    <router-view />
  </div>
</template>
<script>
import SideNav from "./components/SideNav";
import Copyright from "./components/Copyright.vue";
export default {
  components: { SideNav, Copyright },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&family=Sen:wght@400;700;800&display=swap");
#app {
  overflow: auto;
  background-image: linear-gradient(rgb(0, 0, 0) 15%, rgb(0, 10, 20) 110%);
  font-family: "Lexend", "Poppins", sans-serif;
  height: 100vh;
  width: 100vw;
}
.perspective-menu {
  z-index: 25;
  display: none;
}
@media screen and (min-width: 700px) {
  .perspective-menu {
    z-index: 50;
    position: fixed;
    height: 10vh;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
  }
  .perspective-link {
    z-index: 100;
    font-size: 1.8rem;
    font-weight: 800;
    transform: rotate(5deg);
  }
  .link {
    text-decoration: none;
    z-index: 100;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 0.9px rgba(4, 182, 226, 1);
    filter: brightness(130%);
    transform: rotate3d(0.5, 0.5, 0, -25deg) translate3d(0, 0.2rem, 0px);
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;
  }
  .link::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 2px;
    z-index: -2;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 0px rgba(255, 255, 255, 0);
    transform: rotate3d(0.9, 0.5, -1, 90deg) skew(0, 0deg) scale(1, 2);
    transition: all 0.5s ease-in-out;
  }
  .router-link-exact-active {
    -webkit-text-stroke: 0.9px var(--brightgold);
    color: rgba(0, 0, 0, 1);
    transform: translate3d(0, 0.2rem, 0px) rotate3d(0.5, -0.5, 0, -25deg);
    font-size: 2.2rem;
    z-index: 3;
  }
  .router-link-exact-active::after {
    transform: rotate3d(0.9, 0.5, -1, 90deg) skew(0, 25deg) scale(1, 2);
    color: rgba(255, 255, 255, 0.25);
    z-index: -1;
    animation: color-blind 6s infinite ease;
  }
}
@media screen and (min-width: 1024px) {
  .perspective-menu {
    height: 13vh;
  }
  .perspective-link {
    font-size: 2.5rem;
  }
  .perspective-link:hover .link {
    -webkit-text-stroke: 0.9px rgba(4, 182, 226, 1);
    transform: translate3d(0, 0.2rem, 0px) rotate3d(0.5, -0.5, 0, -25deg);
    font-size: 2.7rem;
  }
  .perspective-link:hover .link::after {
    color: rgba(207, 178, 13, 0.2);
    transform: rotate3d(0.9, 0.5, -1, 90deg) skew(0, 25deg) scale(1, 2);
  }
  .router-link-exact-active {
    font-size: 2.7rem;
  }
}

@media screen and (min-width: 1440px) {
  .perspective-menu {
    height: 10vh;
  }
  .perspective-link {
    font-size: 2.7rem;
  }
  .router-link-exact-active {
    font-size: 2.9rem;
  }
  .perspective-link:hover .link {
    -webkit-text-stroke: 0.9px rgba(4, 182, 226, 1);
    transform: translate3d(0, 0.2rem, 0px) rotate3d(0.5, -0.5, 0, -25deg);
    font-size: 2.9rem;
  }
}
@media screen and (min-width: 2550px) {
  .perspective-menu {
    justify-content: space-around;
    /* border-bottom: 1px outset var(--deepgold);
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 25;
    filter: drop-shadow(0 3px 25px rgba(4, 182, 226, 0.2)); */
  }
  .perspective-link {
    font-size: 2.98rem;
    transform: rotate(10deg);
  }
  .router-link-exact-active {
    font-size: 3.2rem;
  }
  .perspective-link:hover .link {
    -webkit-text-stroke: 0.9px rgba(4, 182, 226, 1);
    transform: translate3d(0, 0.2rem, 0px) rotate3d(0.5, -0.5, 0, -25deg);
    font-size: 3.2rem;
  }
}
</style>
