<template>
  <div class="container">
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
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import SideNav from "./components/SideNav";
export default {
  components: { SideNav },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
#app {
  overflow: auto;
  background: rgb(0, 0, 0);
  /* background-image: linear-gradient(rgb(18, 20, 22) 20%, rgb(2, 18, 37) 100%); */
  background-image: linear-gradient(rgb(0, 0, 0) 20%, rgb(10, 22, 37) 100%);
  font-family: "Poppins", sans-serif;
  /* text-align: center; */
  height: 100vh;
  width: 100vw;
}
nav {
  display: none;
}

@media screen and (min-width: 700px) {
  nav {
    z-index: 100;
    position: fixed;
    height: 15vh;
    width: 100%;
    top: 0;
    /* left: 0; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .nav-ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
  }
  .link {
    transform: rotate(12deg);
    font-family: "Poppins", Arial, sans-serif;
    display: inline-block;
    position: relative;
    color: rgba(0, 0, 0, 0.377);
    -webkit-text-stroke: 1.55px rgba(4, 182, 226, 0.904);
    font-size: 2.8rem;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 3px;
    justify-content: space-between;
    margin: 0 1rem;
  }
  .link::before,
  .link::after {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.2s;
  }
  .link::before {
    -webkit-text-stroke: 0.75px rgb(250, 195, 15);
    transform: translate(0.75px, -1.4px);
    letter-spacing: 2.8px;
    z-index: -1;
  }
  .link:hover {
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.25px rgb(242, 242, 255);
    transition: 0.2s;
  }
  .link:hover::before {
    z-index: 2;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.5px rgba(4, 182, 226, 0.9);
    transform: translate(7px, -5px);
    filter: brightness(120%);
  }
  .link:hover::after {
    z-index: 1;
    color: rgba(33, 219, 219, 0.445);
    -webkit-text-stroke: 2px rgba(240, 205, 48, 1);
    transform: translate(4px, -3px);
  }
  .router-link-exact-active {
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.25px rgb(242, 242, 255);
    /* text-shadow: 0 0 10px rgba(33, 219, 219, 0.3); */
    /* text-shadow: 3px 0 8px rgba(255, 217, 0, 0.3); */
  }
  .router-link-exact-active::before {
    z-index: 2;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.5px rgba(4, 182, 226, 0.9);
    transform: translate(7px, -4.5px);
    filter: brightness(120%);
  }
  .router-link-exact-active::after {
    -webkit-text-stroke: 2px rgba(255, 189, 6, 0.9);
    filter: blur(0.75px) brightness(120%);
    color: rgba(33, 219, 219, 0.445);
    transform: translate(4px, -2.5px);
    z-index: 1;
  }
}

@media screen and (min-width: 1024px) {
  .link {
    transform: rotate(15deg);
    font-weight: 900;
  }
}

@media screen and (min-width: 1224px) {
  .link {
    font-size: 2.9rem;
    margin: 0 2.2rem;
  }
}
</style>
