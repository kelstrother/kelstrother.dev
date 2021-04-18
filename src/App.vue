<template>
  <router-view />
  <footer id="nav">
    <router-link to="/">home</router-link> |
    <router-link to="/mywork">my.work</router-link> |
    <router-link to="/about">about.me</router-link> |
    <router-link to="/contact">contact</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
#app {
  overflow: auto;
  background: rgb(53, 68, 82);
  background: linear-gradient(
    rgb(18, 20, 22) 20%,
    rgb(2, 18, 37) 100%
  );
  z-index: -1;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: rgba(223, 209, 128, 0.5);
}
#nav {
  padding: 1.3em;
  display: flex;
  height: 4em;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 0;
  width: 100vw;
  a {
    display: block;
    transition: all 0.3s;
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    font-weight: bold;
    text-decoration: none;
    color: rgba(87, 153, 197, 1);

    &.router-link-exact-active {
      color: rgb(182, 172, 97);
    }
  }
  a:hover {
    transform: scale(1.2);
  }
}
</style>
