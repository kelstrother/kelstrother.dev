<template>
  <MobileNav />
  <nav id="desktop-nav">
    <ul class="nav-ul">
      <li>
        <router-link to="/" data-text="home" class="link">home</router-link>
      </li>
      <li>
        <router-link to="/mywork" data-text="my.work" class="link"
          >my.work</router-link
        >
      </li>
      <li>
        <router-link to="/about" data-text="about.me" class="link"
          >about.me</router-link
        >
      </li>
      <li>
        <router-link to="/contact" data-text="contact" class="link"
          >contact</router-link
        >
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
import MobileNav from "./components/MobileNav";
export default {
  components: { MobileNav },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
#app {
  overflow: auto;
  background: rgb(53, 68, 82);
  background-image: linear-gradient(rgb(18, 20, 22) 20%, rgb(2, 18, 37) 100%);
  font-family: "Poppins", sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
}
a {
  text-decoration: none;
}
nav {
  display: none;
}

@media screen and (min-width: 700px) {
  nav {
    z-index: 100;
    position: fixed;
    height: 15vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 0.8rem;
    padding: 0;
    width: 100vw;
  }
  .link {
    transform: rotate(12deg);
    font-family: "Poppins", Arial, sans-serif;
    position: relative;
    display: inline-block;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.75px rgba(4, 182, 226, 1);
    font-size: 3rem;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 2px;
  }
  .router-link-exact-active {
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 2px rgba(253, 209, 11, 0.8);
    font-weight: 900;
  }
  .router-link-exact-active::before {
    z-index: 2;
    color: rgba(4, 182, 226, .9);
    filter: brightness(110%);
    -webkit-text-stroke: 2.4px rgba(0, 0, 0, 1);
    transform: translate(4px, -4px);
  }
  .router-link-exact-active::after {
    transform: translate(2px, -2px);
    z-index: 1;
    /* filter: blur(.55px); */
    -webkit-text-stroke: 2.5px rgba(253, 209, 11, 0.8);
  }
  .link::before,
  .link::after {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.2s;
  }
  .link:hover::before {
    z-index: 2;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 2px rgba(33, 182, 219, 1);
    transform: translate(5px, -5px);
  }
  .link:hover::after {
    z-index: 1;
    color: rgba(33, 219, 219, 0.8);
    -webkit-text-stroke: 2px rgba(240, 205, 48, 1);
    transform: translate(2px, -2px);
  }
  .link:hover {
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1px rgb(242, 242, 255);
    transition: 0.2s;
  }
  .mobile-nav {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .link {
    transform: rotate(15deg);
    font-size: 2.9rem;
    font-weight: 900;
  }
}
</style>
