<template>
  <div class="container">
    <div class="home">
      <h1 class="name">Kel <span class="lastname">Strother</span></h1>
      <h2>Software Engineer</h2>
      <h3 class="location">Denver, <span class="state">Colorado</span></h3>
    </div>
    <div class="work">
    <MyWork />
    </div>
    <!-- <Skills /> -->
    <div class="about">
    <AboutMe />
    </div>
    <div class="contact">
    <Contact />
    </div>
  </div>
</template>

<script>
// import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe"
import MyWork from "../components/MyWork"
import Contact from "../components/Contact"

export default {
  name: "Home",
  components: { AboutMe, MyWork, Contact },
};
</script>

<style scoped>
.home {
  margin-bottom: 2em;
}
.name {
  display: inline-block;
  margin: 0.2em;
  font-size: 2.5em;
}
.lastname {
  /* display: block; */
}
</style>
