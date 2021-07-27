<template>
  <nav class="main-nav">
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
export default {};
</script>

<style scoped>
.main-nav {
  z-index: 100;
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  /* filter: blur(2px); */
  transition: top 0.1s ease-out;
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
  letter-spacing: 2px;
  z-index: 5;
}
</style>
