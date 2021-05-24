<template>
  <div class="wrapper">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="project-name">
      <h1>{{ project.name }}</h1>
    </div>
    <div v-if="project" class="project-details">
      <div class="video-container">
        <video autoplay loop>
          <source class="video" :src="project.video" />
        </video>
      </div>
      <div class="project-info">
        <p class="details">{{ project.details }}</p>
        <div class="btn-container">
          <a class="live-link" :href="project.live">The Project</a>
          <a class="git-link" :href="project.github">The Github</a>
        </div>
      </div>
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
.container {
  height: 100vh;
}
.project-name {
  display: flex;
  flex-direction: column;
  color: #c9cdd1;
  margin-top: 8em;
}
.project-details {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
}
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.8);
}
video {
  height: 30vh;
  opacity: 0.6;
  border-radius: 7px;
  z-index: -5;
}
.details {
  width: 80vw;
  max-width: 450px;
}
.project-info {
  color: rgba(87, 153, 197, 1);
  margin-top: 3em;
}
.btn-container {
  display: flex;
  margin-top: 2em;
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
