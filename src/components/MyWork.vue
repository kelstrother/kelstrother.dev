<template>
  <div class="work-box">
    <h1 class="title-work">my.work</h1>
    <div class="my-work-container">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-container"
      >
        <router-link
          :to="{ name: 'ProjectSummary', params: { id: project.id } }"
        >
          <div class="single">
            <h2 class="project-name">{{ project.name }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <img class="project-img" :src="project.image" alt="" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="skills">
      <Skills />
    </div>
  </div>
</template>

<script>
import Skills from "../components/Skills";
export default {
  components: { Skills },
  props: ["projects"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.work-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-work {
  font-size: 3rem;
  font-weight: 900;
  position: relative;
  padding: 1em 0 0.5em 0;
  z-index: 0;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  letter-spacing: 0.4rem;
  animation: title-warp 5s infinite both;
}
.title-work::before {
  padding-top: 1em;
  content: "my.work";
  position: absolute;
  top: 0;
  left: 0;
}
.title-work::before {
  z-index: 2;
  -webkit-text-stroke: 1px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(2.2deg);
  letter-spacing: 0.41rem;
}
.my-work-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.project-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.router-links {
  text-decoration: none;
  color: #378094;
}
.project-name {
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--brightblue);
  font-size: 1.6rem;
  z-index: 5;
  transition: all 0.25s;
}
.project-img {
  border-radius: 7px;
  height: 200px;
  width: 300px;
  transform: scale(1);
  transition: all 0.3s ease;
}
.project-description {
  color: var(--deepblue);
  font-weight: 400;
  padding-bottom: 1em;
  font-size: 0.9rem;
  transition: all 0.25s;
}
.single {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
}
.skills {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}

@media screen and (min-width: 700px) {
  .my-work-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 9em;
  }
  .title-work {
    display: none;
  }
  .single {
    margin: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    perspective: 500px;
  }
  .single:hover {
    cursor: pointer;
  }
  .project-name {
    color: var(--brightblue);
    font-size: 1.7rem;
  }
  .single:hover .project-name {
    color: var(--brightgold);
    transform: scaleX(1) scaleY(1.1) scaleZ(1.5) rotateX(5deg) rotateY(-3deg)
      rotateZ(-3deg) translateY(10px) translateZ(-10px);
  }
  .project-description {
    color: var(--deepblue);
    font-size: 1rem;
  }
  .single:hover .project-description {
    color: var(--brightblue);
    transform: scaleX(1) scaleY(1.1) scaleZ(1.5) rotateX(5deg) rotateY(-3deg)
      rotateZ(-3deg) translateY(10px) translateZ(-10px);
  }
  .project-img {
    width: 18em;
    height: 12em;
    filter: brightness(85%);
    transform-style: preserve-3d;
  }
  .single:hover .project-img {
    transform: scaleX(1) scaleY(1.1) scaleZ(1.5) rotateX(5deg) rotateY(-3deg)
      rotateZ(-3deg) translateY(10px) translateZ(-10px);
    filter: brightness(130%);
  }
}

@media screen and (min-width: 1024px) {
  .my-work-container {
    padding-top: 11em;
  }
  .project-img {
    width: 25em;
    height: 15em;
  }
}
@media screen and (min-width: 2550px) {
  .my-work-container {
    padding-top: 15em;
  }
  .project-img {
    width: 40em;
    height: 20em;
  }
  .project-name {
    font-size: 2.3rem;
  }
  .project-description {
    font-size: 1.3rem;
  }
  .single {
    padding-bottom: 7em;
  }
}
</style>
