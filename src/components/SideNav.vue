<template>
  <div class="mobile-container">
    <section v-show="isShow" class="sidenav-container">
      <router-link data-text="home" class="sidenav-link" to="/">home </router-link>
      <router-link data-text="my.work" class="sidenav-link" to="/mywork">my.work </router-link>
      <router-link data-text="about" class="sidenav-link" to="/about">about </router-link>
      <router-link data-text="contact" class="sidenav-link" to="/contact">contact</router-link>
    </section>
    <div @click="isShow = !isShow" class="menu-bar">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data: function () {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
.menu-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 1.2em;
  right: 1.1em;
  z-index: 30;
}
.line-1 {
  margin-bottom: 0.3rem;
  height: 0.35rem;
  width: 2.5rem;
  color: transparent;
  border: 0.5px solid rgba(4, 182, 226, 1);
}
.line-2 {
  margin-bottom: 0.3rem;
  height: 0.4rem;
  width: 3rem;
  color: transparent;
  border: 1px solid rgba(255, 211, 17, 0.74);
}
.line-3 {
  /* margin-bottom: 0.5rem; */
  height: 0.35rem;
  width: 2.5rem;
  color: transparent;
  border: 0.5px solid rgba(4, 182, 226, 1);
}
.sidenav-container {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 40px 40px 0 50px;
  height: 400px;
  backdrop-filter: blur(1px);
  position: absolute;
  bottom: 0rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
}
.sidenav-link {
  font-size: 2rem;
  padding: 1rem 1rem;
  color: rgba(0, 0, 0, 0.9);
  -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
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
  padding: 1rem 1rem;
  z-index: 20;
}

@media screen and (min-width: 700px) {
  .mobile-container {
    display: none;
  }
}
</style>
