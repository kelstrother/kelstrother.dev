<template>
  <div class="mobile-container">
    <transition name="slide">
      <div v-if="showNav" class="sidenav-container">
        <!-- <div class="mobile-social-container">
          <section class="fb1">
            <a href="https://www.facebook.com/kel.strother/" target="_blank">
              <ph-facebook-logo
                id="fb-logo"
                class="social-icon"
                :size="56"
                weight="fill"
            /></a>
          </section>
          <section class="fb2">
            <ph-facebook-logo
              class="social-icon"
              id="fb-logo2"
              :size="59"
              weight="fill"
            />
          </section>
          <section class="linked1">
            <a href="https://www.linkedin.com/in/kelstrother/" target="_blank">
              <ph-linkedin-logo
                class="social-icon"
                id="linked-logo"
                :size="55"
                weight="fill"
            /></a>
          </section>
          <section class="linked2">
            <ph-linkedin-logo
              class="social-icon"
              id="linked-logo2"
              :size="57"
              weight="fill"
            />
          </section> -->
          <!-- <ph-instagram-logo
            id="insta-logo"
            class="social-icon"
            :size="46"
            weight="fill"
          />
          <ph-instagram-logo
            id="insta-logo2"
            class="social-icon"
            :size="55"
            weight="fill"
          />
          <ph-twitter-logo
            id="twitter-logo"
            class="social-icon"
            :size="46"
            weight="fill"
          />
          <ph-twitter-logo
            id="twitter-logo2"
            class="social-icon"
            :size="55"
            weight="fill"
          /> -->
        <!-- </div> -->
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
.mobile-social-container {
  display: flex;
  /* height: 10%; */
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 1rem; */
  transform: rotate(-15deg);
}
.fb1 {
  display: flex;
  z-index: 5;
  position: relative;
  /* margin: 0;
  padding: 0; */
}
.fb2 {
  position: absolute;
  top: -2px;
  left: 14%;
  z-index: -1;
}
.linked1 {
  z-index: 5;
  position: relative;
  /* margin: 0;
  padding: 0; */
}
.linked2 {
  position: absolute;
  top: -2px;
  left: 55%;
  z-index: -1;
}
#fb-logo {
  /* position: relative; */
  color: rgba(0, 0, 0, 0.963);
  z-index: 5;
}
#fb-logo2 {
  color: rgba(4, 182, 226, 0.836);
  /* position: absolute; */
  /* top: -1px;
  left: 35px; */
  z-index: -1;
  filter: blur(3px) brightness(120%);
}
#linked-logo {
  /* position: relative; */
  color: rgba(0, 0, 0, 0.963);
  z-index: 5;
}
#linked-logo2 {
  color: rgba(4, 182, 226, 0.836);
  /* position: absolute;
  top: -1px;
  left: 130px; */
  z-index: -1;
  filter: blur(3px) brightness(120%);
}
/* #fb-logo2:hover {
  color: rgba(233, 212, 27, 0.795);
} */
/* #insta-logo {
  z-index: 5;
  color: rgba(0, 0, 0, 0.963);
}
#insta-logo2 {
  color: rgba(4, 182, 226, 0.836);
  position: absolute;
  top: -2px;
  left: 37%;
  z-index: 0;
  filter: blur(3px);
}
#twitter-logo {
  color: rgba(0, 0, 0, 0.963);
  z-index: 5;
}
#twitter-logo2 {
  position: absolute;
  top: -2px;
  left: 70%;
  color: rgba(4, 182, 226, 0.836);
  z-index: 0;
  filter: blur(3px);
} */
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
  background: rgba(0, 0, 0, 0.6);
  border-radius: 40px 40px 0 50px;
  height: 550px;
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
  height: 75%;
  list-style: none;
  margin-top: -2rem;
}
.sn-link {
  /* justify-content: space-between; */
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
