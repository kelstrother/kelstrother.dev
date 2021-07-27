<template>
  <nav id="desktop-nav" class="navbar">
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
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@media screen and (min-width: 700px) {
  .navbar {
    z-index: 100;
    position: fixed;
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    transition: top 0.1s ease-out;
    transform: translate3d(0, 0, 0);
  }
  .nav-ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    align-items: center;
  }
  .link {
    transform: rotate(15deg);
    display: inline-block;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1px rgba(4, 182, 226, 1);
    font-size: 2.2rem;
    font-weight: 700;
    text-decoration: none;
    /* filter: brightness(120%); */
    letter-spacing: 2px;
    z-index: 5;
  }
  .link::before,
  .link::after {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.2s ease-in-out;
    font-weight: 800;
  }
  .link::before {
    font-size: 2.45rem;
    -webkit-text-stroke: 1px rgba(250, 195, 15, 1);
    transform: translate(-3.75px, 3px);
    letter-spacing: 2.5px;
    z-index: -1;
  }
  .link:hover {
    z-index: 5;
    color: rgba(0, 0, 0, 1);
    transition: 0.2s;
    -webkit-text-stroke: 1px rgba(250, 195, 15, 1);
    filter: brightness(120%);
    transform: translate3d(-3.75px, 3px, 0);
  }
  .link:hover::before {
    -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    transform: translate3d(-5.75px, 3px, 0);
    filter: brightness(120%);
  }
  .link:hover::after {
    z-index: -2;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    transform: translate3d(-7.75px, 5px, 0);
    filter: brightness(120%);
  }
  .router-link-exact-active {
    z-index: 5;
    font-size: 2.8rem;
    letter-spacing: 3px;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
  }
  .router-link-exact-active::before {
    z-index: -1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(250, 195, 15, 0.9);
    transform: translate(-3.75px, 4px);
  }
  .router-link-exact-active::after {
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.9);
    transform: translate(-6px, 7px);
    font-size: 2.5rem;
    color: transparent;
    z-index: -2;
  }
}

@media screen and (min-width: 1024px) {
  .link {
    font-size: 2.4rem;
    /* font-weight: 900; */
  }
}

@media screen and (min-width: 1224px) {
  .link {
    font-size: 2.5rem;
  }
}
</style>
