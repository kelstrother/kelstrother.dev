<template>
  <div class="container">
    <div class="title">
      <h1 class="title-skills" data-text="skills">skills</h1>
    </div>
    <section class="skills-container" id="skillslink">
      <div class="skill-icon">
        <img
          id="html"
          class="icon"
          src="../assets/icon/iconfinder_badge-html-5_317755.png"
          alt=""
        />
        <p id="s1" class="skill">HTML5</p>
      </div>
      <div class="skill-icon">
        <img
          id="css"
          class="icon"
          src="../assets/icon/iconfinder_badge-css-3_317756.png"
          alt=""
        />
        <p id="s2" class="skill">CSS3</p>
      </div>
      <div class="skill-icon">
        <img
          id="bootstrap"
          class="icon"
          src="../assets/icon/iconfinder_bootstrap_icon_291791.png"
        />
        <p id="s3" class="skill">Bootstrap</p>
      </div>
      <div class="skill-icon">
        <img
          id="sass"
          class="icon"
          src="../assets/icon/iconfinder_sass_4691373.png"
        />
        <p id="s15" class="skill">SASS</p>
      </div>
      <div class="skill-icon">
        <img
          id="jquery"
          class="icon"
          src="../assets/icon/iconfinder_jquery_308442.png"
        />
        <p id="s4" class="skill">jQuery</p>
      </div>
      <div class="skill-icon">
        <img
          id="javascript"
          class="icon"
          src="../assets/icon/iconfinder_code-programming-javascript-software-develop-command-language_652581.png"
        />
        <p id="s5" class="skill">JavaScript</p>
      </div>
      <div class="skill-icon">
        <img
          id="vue"
          class="icon"
          src="../assets/icon/iconfinder_367_Vuejs_4518774.png"
        />
        <p id="s6" class="skill">Vue.js</p>
      </div>
      <div class="skill-icon">
        <img
          id="react"
          class="icon"
          src="../assets/icon/iconfinder_react_color_7423888.png"
        />
        <p id="s7" class="skill">React</p>
      </div>
      <div class="skill-icon">
        <img
          id="node"
          class="icon"
          src="../assets/icon/iconfinder_node-js_1269842.png"
        />
        <p id="s8" class="skill">Node.js</p>
      </div>
      <div class="skill-icon">
        <img
          id="photoshop"
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_adobe_photoshop_2993707.png"
        />
        <p id="s9" class="skill">Photoshop</p>
      </div>
      <div class="skill-icon">
        <img
          id="illustrator"
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_adobe_illustrator_2993708.png"
        />
        <p id="s10" class="skill">Illustrator</p>
      </div>
      <div class="skill-icon">
        <img
          id="xd"
          class="icon"
          src="../assets/icon/iconfinder_3_Xd_Adobe_logo_logos_4373061.png"
        />
        <p id="s11" class="skill">Adobe XD</p>
      </div>
      <div class="skill-icon">
        <img
          id="affinity"
          class="icon"
          src="../assets/icon/iconfinder_logo_brand_brands_logos_affinity_designer_2993705.png"
        />
        <p id="s12" class="skill">Affinity Suite</p>
      </div>
      <div class="skill-icon">
        <img
          id="figma"
          class="icon"
          src="../assets/icon/iconfinder_figma-logo_7564187.png"
        />
        <p id="s13" class="skill">Figma</p>
      </div>
      <div class="skill-icon">
        <img
          id="ruby"
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
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  letter-spacing: 0.4rem;
  animation: title-warp 5s infinite both;
}
.title-skills::before {
  padding-top: 1em;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.title-skills::before {
  z-index: 2;
  -webkit-text-stroke: 1px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(3.3deg);
  letter-spacing: 0.41rem;
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
#html {
  animation: trippin 5s infinite linear;
  animation-delay: 0.3s;
}
#s1 {
  animation: trippin 5s infinite linear;
}
#css {
  animation: trippin 5s infinite linear;
  animation-delay: 0.5s;
}
#s2 {
  animation: trippin 5s infinite 2s linear;
}
#bootstrap {
  animation: trippin 5s infinite linear;
  animation-delay: 1s;
}
#s15 {
  animation: trippin 5s infinite 0.5s linear;
}
#sass {
  animation: trippin 5s infinite linear;
  animation-delay: 1.5s;
}
#s3 {
  animation: trippin 5s infinite 1s linear;
}
#jquery {
  animation: trippin 5s infinite linear;
  animation-delay: 2s;
}
#s4 {
  animation: trippin 5s infinite 1.5s linear;
}
#javascript {
  animation: trippin 5s infinite linear;
  animation-delay: 2.5s;
}
#s5 {
  animation: trippin 5s infinite 2.5s linear;
}
#vue {
  animation: trippin 5s infinite linear;
  animation-delay: 3s;
}
#s6 {
  animation: trippin 5s infinite 1s linear;
}
#react {
  animation: trippin 5s infinite linear;
  animation-delay: 3.5s;
}
#s7 {
  animation: trippin 5s infinite 3s linear;
}
#node {
  animation: trippin 5s infinite linear;
  animation-delay: 0.5s;
}
#s8 {
  animation: trippin 5s infinite 3.5s linear;
}
#photoshop {
  animation: trippin 5s infinite linear;
  animation-delay: 1s;
}
#s9 {
  animation: trippin 5s infinite 4s linear;
}
#illustrator {
  animation: trippin 5s infinite linear;
  animation-delay: 1.5s;
}
#s10 {
  animation: trippin 5s infinite 2s linear;
}
#xd {
  animation: trippin 5s infinite linear;
  animation-delay: 2s;
}
#s11 {
  animation: trippin 5s infinite 1s linear;
}
#affinity {
  animation: trippin 5s infinite linear;
  animation-delay: 2.5s;
}
#s12 {
  animation: trippin 5s infinite 0.5s linear;
}
#figma {
  animation: trippin 5s infinite linear;
  animation-delay: 3s;
}
#s13 {
  animation: trippin 5s infinite 3s linear;
}
#ruby {
  animation: trippin 5s infinite linear;
  animation-delay: 3.5s;
}
#ror {
  animation: trippin 5s infinite 2s linear;
}
.skill {
  font-weight: 500;
  color: rgba(87, 153, 197, 1);
  color: var(--brightblue);
  margin: 0.2em 0.1em;
  font-size: 0.85rem;
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
@media screen and (min-width: 2550px) {
  .title-skills {
    transform: scaleY(1.2);
    letter-spacing: 0.6rem;
    font-size: 5rem;
  }
  .title-skills::before {
    letter-spacing: 0.57rem;
    color: rgba(0, 0, 0, 0.9);
    top: -1.6rem;
    left: 0.25rem;
  }
  .skills-container {
    max-width: 1500px;
    justify-content: space-between;
  }
  .skill-icon {
    padding: 2rem;
  }
  .icon {
    width: 4.7rem;
    height: 4.7rem;
  }
  .skill {
    font-size: 1rem;
  }
}
</style>
