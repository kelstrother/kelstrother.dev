<template>
  <div class="container">
    <div class="title">
      <h1 class="title-skills" data-text="skills">skills</h1>
    </div>
    <section class="skills-container" id="skillslink">
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_badge-html-5_317755.png"
          alt=""
        />
        <p class="skill">HTML5</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_badge-css-3_317756.png"
          alt=""
        />
        <p class="skill">CSS3</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_bootstrap_icon_291791.png"
        />
        <p class="skill">Bootstrap</p>
      </div>
      <div class="skill-icon">
        <img
          id="sass"
          class="icon"
          src="../assets/icon/iconfinder_sass_4691373.png"
        />
        <p class="skill">SASS/SCSS</p>
      </div>
      <div class="skill-icon">
        <img class="icon" src="../assets/icon/iconfinder_jquery_308442.png" />
        <p class="skill">jQuery</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_code-programming-javascript-software-develop-command-language_652581.png"
        />
        <p class="skill">JavaScript</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_367_Vuejs_4518774.png"
        />
        <p class="skill">Vue.js</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_react_color_7423888.png"
        />
        <p class="skill">React</p>
      </div>
      <div class="skill-icon">
        <img class="icon" src="../assets/icon/iconfinder_node_3069651.png" />
        <p class="skill">Node.js</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_adobe_photoshop_2993707.png"
        />
        <p class="skill">Photoshop</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_adobe_illustrator_2993708.png"
        />
        <p class="skill">Illustrator</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_3_Xd_Adobe_logo_logos_4373061.png"
        />
        <p class="skill">Adobe XD</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_affinity_designer_2993705.png"
        />
        <p class="skill">Affinity Suite</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_figma-logo_7564187.png"
        />
        <p class="skill">Figma</p>
      </div>
      <div class="skill-icon">
        <img
          class="icon"
          src="../assets/icon/iconfinder_ruby-on-rails_3069735.png"
        />
        <p class="skill" id="ror">Ruby on Rails</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
}
.title-skills {
  font-size: 3rem;
  font-weight: 900;
  position: relative;
  padding: 1em 0 0.5em 0;
  z-index: 0;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 0.9px rgb(242, 242, 255);
  letter-spacing: 0.4rem;
}
.title-skills::before,
.title-skills::after {
  padding-top: 1em;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.title-skills::before {
  z-index: 2;
  -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(3.3deg);
  letter-spacing: 0.41rem;
}
.title-skills::after {
  z-index: 1;
  color: rgba(33, 219, 219, 0.8);
  filter: blur(0.55px);
  -webkit-text-stroke: 1.5px rgb(255, 208, 0);
  transform: translate(2.9px, -2px);
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto 5em auto;
}
.skill-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.3em;
  margin: 0.4em;
  background-color: transparent;
  border-radius: 6px;
  border: none;
}
.icon {
  border-radius: 7px;
  margin: 0.5em;
  height: 2.5em;
  width: 2.5em;
}
.skill {
  color: rgba(87, 153, 197, 1);
  margin: 0.2em 0.1em;
  font-size: 0.85rem;
}
#ror {
  /* font-size: 0.85rem; */
}
#sass {
  background-color: rgba(87, 153, 197, 1);
  border-radius: 5px;
  border: none;
}

@media screen and (min-width: 700px) {
  .skills-container {
    width: 90vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .title-skills {
    /* -webkit-text-stroke: 1.5px rgb(242, 242, 255); */
    padding-top: 3rem;
    font-size: 4.3rem;
  }
  .title-skills::before {
    position: absolute;
    top: -17px;
    left: 0px;
    transform: rotate(2deg);
    letter-spacing: 0.42rem;
  }
  .title-skills::after {
    top: -20px;
    left: 0px;
    filter: blur(0.8px);
  }
  .skill {
    font-size: 0.95rem;
    margin: 0.2em 0.2em;
  }
  .skill-icon {
    padding: 0.75rem;
  }
  .icon {
    height: 2.7rem;
    width: 2.7rem;
  }
}
</style>
