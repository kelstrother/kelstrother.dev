<template>
    <router-view />
  <footer id="nav">
    <router-link to="/">home</router-link> |
    <router-link to="/projects">my.work</router-link> |
    <router-link to="/skills">skills</router-link> |
    <router-link to="/about">about.me</router-link> |
    <router-link to="/contact">contact</router-link> 
  </footer>
</template>

<style lang="scss">
#app {
background: rgb(53,68,82);
background: radial-gradient(circle, rgba(53,68,82,1) 0%, rgba(27,41,57,1) 92%);
  // background-color: #292b31;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: rgba(128, 185, 223, 0.5);
}
#nav {
  padding: 1.3em;
  display: flex;
    height: 4em;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    bottom: 0;
    width: 100vw;
    font-family: "Poppins", sans-serif;
  a {
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
   color: rgba(87, 153, 197, 1);

    &.router-link-exact-active {
      color: rgb(182, 172, 97);
    }
  }
}
</style>
