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
.wrapper {
  /* height: 100vh; */
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-name {
  display: flex;
  color: #c9cdd1;
}
.project-details {
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.8);
}
video {
  height: auto;
  width: 90%;
  max-width: 600px;
  opacity: 0.6;
  border-radius: 7px;
  z-index: -5;
}
.details {
  width: 80vw;
  max-width: 550px;
  text-align: left;
  line-height: 1.7rem;
  font-size: 0.9rem;
}
.project-info {
  color: rgba(87, 153, 197, 1);
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-container {
  display: flex;
  margin-top: 5em;
}
.live-link,
.git-link {
  z-index: 5;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: #378094;
  border-radius: 7px;
  border: none;
  padding: 0.5em;
  margin: 0 1rem 0 1rem;
}
a:hover {
  cursor: pointer;
  color: rgb(182, 172, 97);
}

@media screen and (min-width: 700px) {
  .wrapper {
    padding-top: 9em;
  }
  .btn-container {
    margin-top: 3em;
  }
}
</style>
