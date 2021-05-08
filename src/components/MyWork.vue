<template>
<div class="work-box">
  <h1 class="title-work">my.work</h1>
  <div class="my-work-container">
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-container"
    >
      <router-link :to="{ name: 'ProjectSummary', params: { id: project.id } }">
        <div class="single">
          <h2 class="project-name">{{ project.name }}</h2>
          <img class="project-img" :src="project.image" alt="" />
          <p class="project-description">{{ project.description }}</p>
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
    return {
   
    };
  },
};
</script>

<style>
.my-work-container {
  /* height: 100vh; */
}
.title-work {
  padding-top: 1em;
  color: rgba(87, 153, 197, 1);
  -webkit-text-stroke: 1px goldenrod;
  font-size: 2.5rem;
}
.project-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.details-container {
}
.router-links {
  text-decoration: none;
  color: #378094;
}
.project-name {
  margin-bottom: 0.5em;
  text-decoration: none;
}
.project-img {
  border-radius: 7px;
  height: 200px;
  width: 300px;
}
.project-description {
  color: rgba(87, 153, 197, 1);
  font-weight: 400;
}
.skills {
  padding: 0;
  margin: 0;
  display: inline-block;
}
a {
  text-decoration: none;
  color: #c9cdd1;
}
a:hover {
  cursor: pointer;
  color: rgb(182, 172, 97);
}

@media screen and (min-width: 700px) {
  .work-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
  .single {
    margin: 6rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
    justify-content: space-around;
    align-items: center;
  }
}

@media screen and (min-width: 1000px) {
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
