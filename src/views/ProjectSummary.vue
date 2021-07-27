<template>
  <div class="container">
    <div class="project-header">
      <h1 class="proj-name">{{ project.name }}</h1>
    </div>
    <div class="wrapper">
      <div class="error" v-if="error">{{ error }}</div>
      <div v-if="project" class="project-details">
        <div class="video-container">
          <video autoplay loop>
            <source class="video" :src="project.video" />
          </video>
        </div>
      </div>
      <div class="project-info">
        <p class="details">{{ project.details }}</p>
      </div>
    </div>
    <div class="btn-container">
      <a class="live-link" :href="project.live">The Project</a>
      <a class="git-link" :href="project.github">The Github</a>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
}
.proj-name {
  font-family: "Lexend";
  display: block;
  justify-content: center;
  align-items: center;
  background-image: -webkit-linear-gradient(
    270deg,
    var(--deepblue) 45%,
    var(--deepgold) 60%,
    var(--deepwhite) 80%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1.5px transparent;
  width: 100%;
  text-align: center;
  font-weight: 800;
  font-size: 2.5rem;
  z-index: 10;
  letter-spacing: 5px;
}
.project-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.video-container {
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
}
video {
  height: auto;
  width: 90%;
  max-width: 800px;
  opacity: 0.8;
  border-radius: 7px;
  z-index: -5;
}
.details {
  width: 80%;
  text-indent: 15px;
  margin-top: -1em;
  max-width: 800px;
  text-align: left;
  line-height: 1.2rem;
  font-size: 0.9rem;
}
.project-info {
  color: rgba(87, 153, 197, 1);
  padding-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.live-link,
.git-link {
  z-index: 5;
  text-decoration: none;
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--deepblue);
  padding: 0.5em;
  margin: 0 1rem 0 1rem;
  box-shadow: 0 0 2.5px 0.5px var(--brightblue);
  border: none;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  position: absolute;
  bottom: 15%;
  flex-direction: column;
  width: 30vw;
  background: linear-gradient(
    175deg,
    rgb(1, 97, 138) -10%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0) 70%,
    rgb(1, 97, 138) 150%
  );
  height: 40px;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.3s;
}
.live-link {
  left: 10%;
}
.git-link {
  right: 10%;
}

@media screen and (min-width: 700px) {
  .container {
    padding-top: 8em;
  }
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .project-header {
    padding-bottom: 2em;
  }
  .details {
    line-height: 1.6rem;
  }
  a:hover {
    cursor: pointer;
    color: rgb(182, 172, 97);
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    background: linear-gradient(
      175deg,
      rgba(253, 209, 11, 0.3) -10%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0) 70%,
      rgba(253, 209, 11, 0.6) 150%
    );
  }
  .proj-name {
    font-size: 2.7rem;
  }
  .live-link,
  .git-link {
    font-size: 1.1rem;
    height: 50px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    padding-top: 6em;
  }
  .wrapper {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .proj-name {
    font-size: 3.3rem;
  }
  video {
    width: 80%;
  }
  .live-link,
  .git-link {
    top: 80%;
  }
}

@media screen and (min-width: 1440px) {
  .proj-name {
    font-size: 4rem;
  }
  video {
    width: 70%;
  }
  .details {
    font-size: 1.2rem;
  }
  .live-link,
  .git-link {
    top: 75%;
  }
  .live-link {
    left: 15%;
  }
  .git-link {
    right: 15%;
  }
}
@media screen and (min-width: 2550px) {
  .container {
    padding-top: 15em;
  }
  .proj-name {
    font-size: 5rem;
  }
  video {
    width: 90%;
  }
  .details {
    font-size: 1.3rem;
    line-height: 1.5;
  }
  .live-link,
  .git-link {
    font-size: 1.4rem;
    top: 75%;
  }
  .live-link {
    left: 20%;
  }
  .git-link {
    right: 20%;
  }
}
</style>
