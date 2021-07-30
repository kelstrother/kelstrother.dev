<template>
  <div class="container">
    <h1 class="title" id="about.me">The name's Kel</h1>
    <img class="blue-ink" src="../assets/img/blue-ink.png" alt="" />
    <img class="blue-ink2" src="../assets/img/blue-ink.png" alt="" />
    <img class="yellow-ink" src="../assets/img/yellow-ink.png" alt="" />
    <img class="yellow-ink2" src="../assets/img/yellow-ink.png" alt="" />
    <div class="auto-bio">
      <p class="biography" id="part1">
        I live in Colorado. When I'm not creating things with code, I'm probably
        doing something music related.
      </p>
      <p class="biography" id="part2">
        I am a software engineer with a focus on frontend development. A need
        for creative expression drives my ambition to build things that can make
        a difference.
      </p>
    </div>
    <div class="download">
      <a
        class="dl-res"
        href="Resume/Kel_Strother-Resume.pdf"
        target="_blank"
        download="Kel Strother Resume"
      >
        <p class="dl-my-res">Download My Resume</p>
      </a>
    </div>
    <img
      class="guitars"
      src="../assets/img/2_guitars.png"
      alt="kel with dueling guitars"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  place-items: center;
}
.title {
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 10vh;
  left: 11vw;
  -webkit-text-stroke: 1px rgba(242, 242, 255, 0.7);
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-align: center;
  transform: rotate(-5deg);
  z-index: 3;
}
.title::before {
  z-index: 2;
  content: "The name's Kel";
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: 0.5px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(1.1deg);
}
.yellow-ink,
.yellow-ink2,
.blue-ink,
.blue-ink2 {
  display: none;
  z-index: 0;
  position: absolute;
  opacity: 0.7;
}
.yellow-ink {
  top: -5%;
  right: -40%;
}
.blue-ink {
  bottom: 0%;
  width: 30rem;
  height: auto;
  left: 0%;
  transform: rotateX(180deg);
}
.guitars {
  width: 90vw;
  max-width: 500px;
  height: auto;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
}
.auto-bio {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%;
  left: 18%;
  align-items: center;
  color: rgba(4, 182, 226, 0.7);
  width: 75vw;
  font-size: 1rem;
  max-width: 450px;
  z-index: 10;
  transform: rotate(-5deg);
}
#part1,
#part2 {
  text-indent: 0.75em;
  display: inline-block;
}
#part2 {
  margin-top: 1em;
}
a {
  text-decoration: none;
}
.download {
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  transform: rotate(-5deg);
  top: 60%;
  left: 26%;
  flex-direction: column;
  width: 60vw;
  background: linear-gradient(
    175deg,
    rgb(1, 97, 138) -10%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0) 70%,
    rgb(1, 97, 138) 150%
  );
  height: 5vh;
  max-width: 400px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-shadow: 0 0 3px 0.5px var(--deepblue);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  outline: 3px solid transparent;
}
.download::before {
  content: "";
  position: absolute;
  top: 0;
  width: 110%;
  height: 0.75px;
  background-color: rgba(252, 252, 252, 0.6);
  opacity: 0;
}
.download::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: -100%;
  width: 110%;
  height: 0.75px;
  background-color: rgba(252, 252, 252, 0.6);
  opacity: 0;
}
.download:hover {
  background: linear-gradient(
    175deg,
    rgba(253, 209, 11, 0.3) -10%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0) 70%,
    rgba(253, 209, 11, 0.6) 150%
  );
}
.download:hover .dl-my-res {
  color: rgba(4, 182, 226, 0.8);
}
.dl-my-res {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: rgba(253, 209, 11, 0.6);
  transition: 0.3s ease-in-out;
}
@media screen and (min-width: 700px) {
  .title {
    top: 23%;
    left: 14%;
    font-size: 3.8rem;
  }
  .auto-bio {
    top: 35%;
    left: 20%;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .download {
    top: 55%;
  }
  .dl-my-res {
    font-size: 1.1rem;
  }
}

@media screen and (min-width: 1023px) {
  .title {
    top: 20%;
    left: 8%;
  }
  .yellow-ink {
    display: flex;
    width: 40vw;
    top: 40%;
    right: 5%;
    transform: scaleY(1.5) rotateX(180deg);
  }
  .blue-ink {
    display: flex;
    width: 35vw;
    bottom: 10%;
    left: 65%;
    transform: scaleY(1.4) rotateZ(180deg);
  }
  .auto-bio {
    top: 35%;
    left: 13%;
  }
  .download {
    top: 65%;
    left: 17%;
    width: 20rem;
    transition: all 0.3s;
  }
  .download::before,
  .download::after {
    transition: all 0.3s;
  }
  .download:hover {
    background: linear-gradient(
      175deg,
      rgba(253, 209, 11, 0.3) -10%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0) 70%,
      rgba(253, 209, 11, 0.6) 150%
    );
    overflow: visible;
  }
  .download:hover:before {
    left: 0;
    opacity: 1;
  }
  .download:hover:after {
    right: 0;
    opacity: 1;
  }
}

@media screen and (min-width: 1280px) {
  .title {
    left: 14%;
    font-size: 4.5rem;
  }
  .auto-bio {
    left: 18%;
    max-width: 500px;
  }
  .download {
    top: 60%;
    left: 25%;
  }
}
@media screen and (min-width: 1440px) {
  .title {
    font-size: 5rem;
    top: 22%;
    left: 20%;
  }
  .auto-bio {
    max-width: 600px;
    left: 23.5%;
  }
  .download {
    width: 25rem;
    max-width: 500px;
    top: 55%;
    left: 30%;
  }
}

@media screen and (min-width: 2550px) {
  .title {
    font-size: 5.5rem;
    top: 25%;
    left: 27%;
    letter-spacing: 5px;
  }
  .yellow-ink {
    top: 25%;
    right: 10%;
  }
  .yellow-ink2 {
    display: flex;
    width: 30vw;
    transform: scaleX(1.5) rotate(0deg);
    opacity: 0.1;
    top: 10%;
    left: 10%;
  }
  .blue-ink {
    width: 30vw;
    left: 70%;
  }
  .blue-ink2 {
    display: flex;
    width: 30vw;
    bottom: 10%;
    left: 7%;
    background: none;
    transform: scaleY(1.4) scaleX(1.4) rotateX(180deg);
    opacity: 0.2;
  }
  .auto-bio {
    top: 37%;
    left: 29%;
    max-width: 650px;
    font-size: 1.45rem;
  }
  .download {
    top: 57%;
    left: 35%;
  }
  .dl-my-res {
    font-size: 1.4rem;
  }
  .guitars {
    max-width: 750px;
    width: 50rem;
  }
}
</style>
