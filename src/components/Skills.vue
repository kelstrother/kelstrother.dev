<template>
  <div class="title">
    <h1 class="title-skills">skills</h1>
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
      <img class="icon" src="../assets/icon/iconfinder_367_Vuejs_4518774.png" />
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
</template>

<script>
export default {};
</script>

<style>
.title-skills {
  padding-top: 1em;
  color: rgba(87, 153, 197, 1);
  -webkit-text-stroke: 1px goldenrod;
  font-size: 2.5rem;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem auto;
  /* margin-bottom: 3.5rem; */
  
  max-width: 800px;
}
.skill-icon {
  padding: 0.3em;
  margin: 0.4em;
  background-color: transparent;
  border-radius: 6px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
.icon {
  border-radius: 7px;
  margin-top: 0.2em;
  padding: 0;
  height: 2.5rem;
  width: 2.5em;
}
.skill {
  border-top: 2px groove rgba(77, 100, 134, 0.2);
  color: rgba(87,153,197,1);
  font-weight: 400;
  margin: 0.2em 0.1em;
  font-size: 1rem;
}
#ror {
  font-size: 1rem;
}
#sass {
  background-color: rgba(87, 153, 197, 1);
  border-radius: 5px;
  border: none;
}

@media screen and (min-width: 700px) {
  .skills-container {
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .title-skills {
    padding-top: 3rem;
    font-size: 3rem;
  }
  .skill-icon {
    padding: 1rem;
  }
}
</style>
