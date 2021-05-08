<template>
  <router-view />
  <MobileNav />
  <nav id="desktop-nav">
    <ul class="nav-ul">
      <li>
        <router-link to="/"
          ><p data-text="home" class="link">home</p></router-link
        >
      </li>
      <li>
        <router-link to="/mywork"
          ><p data-text="my.work" class="link">my.work</p></router-link
        >
      </li>
      <li>
        <router-link to="/about"
          ><p data-text="about.me" class="link">about.me</p></router-link
        >
      </li>
      <li>
        <router-link to="/contact"
          ><p data-text="contact" class="link">contact</p></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import MobileNav from "./components/MobileNav";
export default {
  components: { MobileNav },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
#app {
  overflow: auto;
  background: rgb(53, 68, 82);
  background: linear-gradient(rgb(18, 20, 22) 20%, rgb(2, 18, 37) 100%);
  font-family: "Poppins", sans-serif;
  text-align: center;
}
a {
  text-decoration: none;
}

@media screen and (min-width: 700px) {
nav {
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
  background-color: rgba(0, 0, 0, .4);
  backdrop-filter: blur(2px);
}
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: .5rem;
  padding: 0;
  width: 100vw;
}
.link {
  transform: rotate(12deg);
  font-family: "Poppins", Arial, sans-serif;
  position: relative;
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
}
.link:before,
.link:after {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.2s;
}
.link:hover:before {
  /* color: rgba(187, 176, 25, .8); */
  z-index: 2;
  -webkit-text-stroke: 2px rgba(33, 182, 219, 0.8);
  transform: translate(5px, -5px);
}
.link:hover:after {
  color: rgba(33, 219, 219, 0.8);
  z-index: 1;
  -webkit-text-stroke: 1px rgba(240, 205, 48, 1);
  transform: translate(2px, -2px);
}
.link:hover {
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  transition: 0.2s;
  z-index: 0;
}
  .mobile-nav {
    display: none;
  }
}

@media screen and (min-width: 1000px) {
  nav {
    height: 12vh;
  }
  .link {
  transform: rotate(15deg);
  font-size: 2rem;
  font-weight: 800;
}
}
</style>
