<template>
  <div class="mobile-container">
    <transition name="slide">
      <div v-if="showNav" class="sidenav-container">
        <ul class="sn-ul">
          <li @click="showNav = !showNav" class="sn-link">
            <router-link data-text="home" class="sidenav-link" to="/"
              >home
            </router-link>
          </li>
          <li @click="showNav = !showNav" class="sn-link">
            <router-link data-text="my.work" class="sidenav-link" to="/mywork"
              >my.work
            </router-link>
          </li>
          <li @click="showNav = !showNav" class="sn-link">
            <router-link data-text="about" class="sidenav-link" to="/about"
              >about
            </router-link>
          </li>
          <li @click="showNav = !showNav" class="sn-link">
            <router-link data-text="contact" class="sidenav-link" to="/contact"
              >contact</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
    <div @click="showNav = !showNav" class="menu-button">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped>
.slide-enter-from {
  opacity: 0.5;
  transform: translate(130%, 100%);
}
.slide-enter-to {
  opacity: 1;
  transform: translate(0%, 0%);
}
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-leave-from {
  opacity: 1;
  transform: translate(0%, 0%);
}
.slide-leave-to {
  opacity: 0.5;
  transform: translate(130%, 100%);
}
.slide-leave-active {
  transition: all 0.5s ease;
}
.menu-button {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: transparent;
  filter: drop-shadow(2px 5px 2px rgba(0, 0, 0, 0.35));
  border-radius: 10px;
  align-items: center;
  position: fixed;
  height: 2.5em;
  width: 3.5em;
  bottom: 2em;
  right: 1.2em;
  z-index: 30;
  backdrop-filter: blur(2px);
}
span {
  height: 0.25em;
  width: 3em;
}
.line1 {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1.5px outset rgb(1, 162, 255);
  transform: perspective(200px) skew(15deg, 0deg) rotate(-2deg);
}
.line2 {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1.5px outset rgba(255, 195, 15, 1);
  transform: skew(-15deg, 0deg) rotate(0deg);
  transition: 0.1s linear;
}
.line3 {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1.5px outset rgb(1, 162, 255);
  transform: skew(15deg, 0deg) rotate(2deg);
}
.sidenav-container {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 40px 40px 0 50px;
  height: 550px;
  border-left: 0.5px outset var(--deepblue);
  border-top: 0.5px outset var(--deepblue);
  width: 58vw;
  backdrop-filter: blur(6px);
  box-shadow: -5px -2px 15px rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 15;
}
.sn-ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
  list-style: none;
  margin-left: -1rem;
  z-index: 25;
}
.sn-link {
  transform: rotate(-15deg);
}
.sn-link:nth-child(1) {
  margin-top: 2rem;
}
.sn-link:nth-child(4) {
  margin-bottom: 2rem;
}
.sidenav-link {
  font-size: 2rem;
  text-decoration: none;
  color: rgb(0, 0, 0);
  -webkit-text-stroke: 0.3px var(--brightblue);
  font-weight: 800;
  letter-spacing: 1px;
  filter: brightness(120%);
  z-index: 35;
}
.router-link-exact-active {
  font-size: 2rem;
  position: absolute;
  z-index: 20;
  font-weight: 800;
  color: rgb(0, 0, 0);
  -webkit-text-stroke: 0.5px var(--brightgold);
  letter-spacing: 1.5px;
}
.router-link-exact-active::after {
  content: attr(data-text);
  position: absolute;
  top: -4px;
  left: -1.4px;
  letter-spacing: -1.25px;
  font-size: 2.3rem;
  color: transparent;
  -webkit-text-stroke: 0.75px var(--brightblue);
  z-index: -1;
}

@media screen and (min-width: 700px) {
  .mobile-container {
    display: none;
  }
}
</style>
