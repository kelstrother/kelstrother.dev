<template>
  <h1>my.work</h1>
  <div class="my-work-container">
    <div class="shape-1"></div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-container"
    >
      <router-link :to="{ name: 'ProjectSummary', params: {id: project.id}}">
        <div class="single">
          <h2 class="project-name">{{ project.name }}</h2>
          <img class="project-img" :src="project.image" alt="" />
          <p class="project-description">{{ project.description }}</p>
        </div>
      </router-link>
      <!-- <div v-show="showDetails" :key="project.id" class="details-container"> -->
        <!-- <p>{{project.details}}</p> -->
        <!-- <a class="live-link" :href="project.live" target="_blank"
          >The Project</a
        >
        <a class="git-link" :href="project.github" target="_blank"
          >The Github</a
        > -->
      <!-- </div> -->
      <!-- <button @click="toggleShowDetails" class="details">
        <span v-if="showDetails">Hide Details</span>
        <span v-else>Show Details</span>
      </button> -->
    </div>
    <div class="shape-2"></div>
    <div class="shape-3"></div>
  </div>
  <div class="skills">
    <Skills />
  </div>
</template>

<script>
import Skills from "../components/Skills";
export default {
  components: { Skills },
  props: ["projects"],
  data() {
    return {
      // showDetails: false,
    };
  },
  // methods: {
  //   toggleShowDetails() {
  //     this.showDetails = !this.showDetails;
  //   },
  // },
};
</script>

<style scoped>
.my-work-container {
  height: 80vh;
  z-index: 6;
}
h1 {
  margin-bottom: 1em;
}
.shape-1 {
  position: absolute;
  top: 140px;
  height: 15vh;
  width: 100vw;
  clip-path: polygon(100% 13%, 0 0, 63% 100%);
  background-color: rgba(34, 130, 194, 0.3);
  z-index: 0;
}
.shape-2 {
  position: absolute;
  top: 520px;
  height: 30vh;
  width: 100vw;
  clip-path: polygon(100% 100%, 31% 46%, 0 78%);
  background-color: rgba(139, 98, 187, 0.2);
  background-repeat: no-repeat;
  z-index: 0;
}
.shape-3 {
  position: absolute;
  height: 20vh;
  width: 100vw;
  top: 30%;
  background-color: rgba(194, 169, 88, 0.2);
  clip-path: polygon(
    45% 0,
    0 100%,
    100% 9%,
    100% 70%,
    26% 100%,
    100% 70%,
    0 36%,
    100% 100%
  );
  z-index: 0;
}
.project-container {
  z-index: 5;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.details-container {
  z-index: 5;
  padding: 0;
  margin: 0;
}
.router-links {
  z-index: 5;
  text-decoration: none;
  color: #378094;
}
.project-name {
  z-index: 5;
  margin-bottom: 0.5em;
  text-decoration: none;
}
.project-img {
  z-index: 5;
  border-radius: 7px;
  height: 200px;
  width: 325px;
}
.btn-container {
  z-index: 5;
  margin: 2em 0 1em 0;
}
/* .live-link,
.git-link {
  z-index: 5;
  text-decoration: none;
  margin: 0em 1em 2em 1em;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.9em;
  background-color: rgba(0, 0, 0, 0.3);
  color: #378094;
  border-radius: 7px;
  border: none;
  padding: 0.5em;
} */
/* .shape-4 {
  position: absolute;
  margin-top: -3em;
  height: 30vh;
  width: 100vw;
  background-color: rgba(30, 102, 150, 0.1);
  clip-path: polygon(45% 0, 0 100%, 100% 9%, 100% 70%, 26% 100%, 100% 70%, 0 36%, 100% 100%);
  z-index: 9;
} */
.skills {
  z-index: 5;
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
a {
  z-index: 5;
  text-decoration: none;
  color: #c9cdd1;
}
a:hover {
  cursor: pointer;
  color: rgb(182, 172, 97);
}

@media screen and (min-width: 700px) {
  .my-work-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .project-img {
    height: 300px;
    width: 450px;
  }
}
</style>
// v-show="toggle" class="in-depth"
