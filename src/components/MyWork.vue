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
          target="_blank"
          :to="{ name: 'ProjectSummary', params: { id: project.id } }"
        >
          <div class="single">
            <h2 class="project-name">{{ project.name }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <img class="project-img" :src="project.image" alt="" />
          </div>
        </router-link>
        <router-view />
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

<style>
.work-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-work {
  font-size: 4rem;
  font-weight: 900;
  position: relative;
  padding: 1em 0 0.5em 0;
  z-index: 0;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 0.9px rgb(242, 242, 255);
  letter-spacing: 0.4rem;
}
.title-work::before,
.title-work::after {
  padding-top: 1em;
  content: "my.work";
  position: absolute;
  top: 0;
  left: 0;
}
.title-work::before {
  z-index: 2;
  -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(2.2deg);
  letter-spacing: 0.41rem;
}
.title-work::after {
  z-index: 1;
  color: rgba(33, 219, 219, 0.8);
  filter: blur(0.55px);
  -webkit-text-stroke: 1.5px rgb(255, 208, 0);
  transform: translate(2.9px, -2px);
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
  text-decoration: none;
  letter-spacing: 1.2px;
  color: rgba(4, 182, 226, 1);
}
.project-img {
  border-radius: 7px;
  height: 200px;
  width: 300px;
  transform: scale(1);
  transition: transform 0.3s ease;
}
.project-img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
.project-description {
  color: rgba(87, 153, 197, 1);
  font-weight: 400;
  padding-bottom: 1em;
}
.single {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
}
.single:hover {
  
}
.skills {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: rgba(87, 153, 197, 1);
}
a:hover {
  cursor: pointer;
  color: goldenrod;
  -webkit-text-stroke: 1.5px rgba(255, 227, 13, 0.322);
  
}

@media screen and (min-width: 700px) {
  .title-work {
    display: none;
  }
  .work-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* height: 100vh; */
  }
  .single {
    margin: 6rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .project-img {
    width: 250px;
    height: 150px;
  }
  .title-work {
    display: none;
    top: 10vh;
    z-index: 0;
    font-size: 3rem;
  }
  .my-work-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .project-img {
    width: 400px;
    height: 250px;
  }
  .single {
    margin-top: 7rem;
    padding: 1.5rem;
  }
}
</style>
