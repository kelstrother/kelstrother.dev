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
    <div @click="showNav = !showNav" class="menu-bar">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
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
  /* animation: appear 2s ease-in; */
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
.menu-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  height: 3.5em;
  width: 3.5em;
  bottom: 1.2em;
  right: 1.6em;
  padding: 0.5em 0;
  background-color: transparent;
  backdrop-filter: blur(4px);
  border-radius: 7px;
  z-index: 30;
}
.line-1 {
  z-index: 5;
  height: 0.2em;
  width: 2.2em;
  background-color: rgba(27, 233, 233, 0.788);
}
.line-2 {
  z-index: 5;
  height: 0.2em;
  width: 2.6em;
  background-color: rgba(255, 211, 17, 0.74);
}
.line-3 {
  z-index: 5;
  height: 0.2em;
  width: 2.2em;
  background-color: rgba(27, 233, 233, 0.795);
}
.sidenav-container {
  background: rgba(0, 0, 0, 0.582);
  border-radius: 40px 40px 0 50px;
  height: 500px;
  width: 60vw;
  backdrop-filter: blur(6px);
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 20;
}
.sn-ul {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  list-style: none;
}
.sn-link {
  justify-content: space-between;
  transform: rotate(-15deg);
  font-size: 2rem;
}
.sidenav-link {
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1.25px rgba(4, 182, 226, 1);
  filter: brightness(120%);
  font-weight: 900;
  letter-spacing: 1.4px;
}
.router-link-exact-active {
  -webkit-text-stroke: 1.5px rgba(255, 211, 17, 0.74);
  z-index: 25;
}
.router-link-exact-active::before {
  content: attr(data-text);
  position: absolute;
  top: 2px;
  left: 0;
  -webkit-text-stroke: 1px rgba(4, 182, 226, 1);
  /* padding: 1rem 1rem; */
  z-index: 20;
}

@media screen and (min-width: 700px) {
  .mobile-container {
    display: none;
  }
}
</style>
