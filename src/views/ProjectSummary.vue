<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="project" class="project-details">
    <div class="project-name">
      <h1>{{ project.name }}</h1>
    </div>
      <div class="video-container">
        <video autoplay loop>
          <source class="video" :src="project.video" />
        </video>
      </div>
      <div class="btn-container">
      <a class="live-link" :href="project.live" target="_blank"
          >The Project</a
        >
        <a class="git-link" :href="project.github" target="_blank"
          >The Github</a
        >
        </div>
      <div class="project-info">
        <p class="details">{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import getDocument from "../helpers/getDocument";
export default {
  props: ["id"],
  setup(props) {
    const { error, document: project } = getDocument("projects", props.id);
    return { error, project };
  },
};
</script>

<style scoped>
.project-name {
   transform: rotate(-10deg);
   color: #c9cdd1;
   margin-bottom: 1em;
}
.project-details {
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  /* justify-content: space-between; */
  align-items: center;
  height: 100vh;
}
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 25;
  transform: rotate(-10deg);
  background-color: rgba(0, 0, 0, 0.8);
}
video {
  height: 30vh;
  opacity: .6;
  border-radius: 7px;
  z-index: -5;
}
.details {
  width: 80vw;
  max-width: 450px;
}
.project-info {
   margin-top: 3em;
}
.btn-container {
   display: flex;
   transform: rotate(-10deg);
   margin-top: 1em;
}
.live-link,
.git-link {
  z-index: 5;
  text-decoration: none;
  margin: 0 6vh 1em 6vh;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0.3);
  color: #378094;
  border-radius: 7px;
  border: none;
  padding: 0.5em;
}
a:hover {
  cursor: pointer;
  color: rgb(182, 172, 97);
}
</style>
