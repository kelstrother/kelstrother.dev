<template>
  <div class="home">
    <header class="name-container">
      <Name />
    </header>
    <div class="image-container">
      <img class="splat" src="../assets/img/paint_splatter.png" alt="" />
      <img class="blue-ink" src="../assets/img/blue-ink.png" alt="" />
      <img class="yellow-ink" src="../assets/img/yellow-ink.png" alt="" />
      <img
        src="../assets/img/large-thumb.png"
        alt="thumbs up"
        class="big-thumb"
      />
      <img src="../assets/img/thumb-only.png" alt="thumbs up" class="thumb" />
      <img class="missing-thumb" src="../assets/img/missing-thumb.png" alt="" />
    </div>
    <div class="skewed-job">
      <p class="web1">Web</p>
      <p class="developer">Developer</p>
    </div>
  </div>
</template>

<script>
import Name from "../components/Name";
export default {
  components: { Name },
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Poppins";
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vw;
  width: 100vw;
}
.image-container {
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.blue-ink,
.yellow-ink {
  display: none;
  position: absolute;
  top: 0%;
  right: -35%;
  width: 30rem;
  opacity: 0.4;
  transform: rotate(35deg);
}
.thumb,
.splat,
.missing-thumb {
  position: absolute;
  bottom: 0;
  left: -5%;
  height: auto;
  width: 21rem;
}
.splat {
  z-index: 0;
}
.thumb {
  z-index: 1;
  animation: face-on 3s linear 3s both;
}
.missing-thumb {
  transform: scale(0.01);
  animation: grower-not-a-shower 3s ease-in 1.5s both;
  z-index: 0;
}
.big-thumb {
  display: flex;
  place-items: center;
  transform-origin: center;
  width: 100vw;
  height: auto;
  z-index: 7;
  transform: scale(1);
  animation: thumbs-up 3.2s linear both;
}
.name-container {
  position: absolute;
  top: 20%;
  left: 32%;
}
.skewed-job {
  position: absolute;
  top: 37%;
  left: 20%;
  font-size: 3rem;
  font-weight: 100;
  margin-top: 1em;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.8;
  letter-spacing: 3px;
}
.web1 {
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--brightblue) 35%,
    var(--brightwhite) 36%
  );
  background-clip: text;
  -webkit-background-clip: text;
  margin-left: -6em;
  top: -0.5em;
  left: 0%;
  z-index: 7;
  animation: face-off 0.5s linear 1.7s both;
}
.developer {
  left: 0.1em;
  top: 0.5em;
  margin-top: -1.5rem;
  margin-right: 1em;
  z-index: 0;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--brightwhite) 36%,
    var(--brightblue) 38%
  );
  background-clip: text;
  -webkit-background-clip: text;
  animation: face-off 0.5s linear 2s both;
}

@media screen and (min-width: 700px) {
  .name-container {
    top: -6em;
    left: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .thumb,
  .splat,
  .missing-thumb {
    width: 35rem;
    bottom: 0;
    left: -5%;
  }
  .thumb {
    animation: face-on 3s linear 2.7s both;
  }
  .big-thumb {
    opacity: 1;
    animation: thumbs-up-responsive 3s linear both;
  }
  .skewed-job {
    top: 45%;
    left: 40%;
  }
  .web1 {
    font-size: 4rem;
  }
  .developer {
    font-size: 4rem;
  }
}

@media screen and (min-width: 1024px) {
  .name-container {
    top: 12%;
    left: 45%;
  }
  .thumb,
  .splat,
  .missing-thumb {
    width: 35rem;
    left: -3%;
  }
  .big-thumb {
    animation: thumbs-up-desktop 3s linear both;
  }
  .skewed-job {
    top: 50%;
    left: 53%;
  }
  .web1 {
    font-size: 4rem;
  }
  .developer {
    margin-top: -1.6rem;
    font-size: 4.1rem;
  }
}

@media screen and (min-width: 1280px) {
  .home {
    overflow: hidden;
    height: 100vh;
  }
  .name-container {
    top: 4%;
    left: 50%;
  }
  .thumb,
  .splat,
  .missing-thumb {
    left: -1%;
    width: 40rem;
  }
  .big-thumb {
    animation: thumbs-up-large 3s linear both;
  }
  .skewed-job {
    top: 50%;
    left: 50%;
  }
  .web1 {
    font-size: 6rem;
  }
  .developer {
    font-size: 6rem;
  }
}

@media screen and (min-width: 2550px) {
  .name-container {
    top: 10%;
    left: 40%;
    font-size: 5rem;
  }
  .thumb,
  .splat,
  .missing-thumb {
    left: -1%;
    width: 55rem;
  }
  .web1 {
    font-size: 7rem;
  }
  .developer {
    font-size: 7rem;
  }
}
</style>
