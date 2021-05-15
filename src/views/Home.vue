<template>
  <div class="home">
    <header class="name-container">
      <h1 id="name" class="f-name">Kel</h1>
      <p id="name" class="fname-2">Kel</p>
      <p id="name" class="fname-3">Kel</p>
      <p id="name" class="fname-4">Kel</p>
      <h1 id="name" class="l-name">Strother</h1>
      <p id="name" class="lname-2">Strother</p>
      <p id="name" class="lname-3">Strother</p>
      <p id="name" class="lname-4">Strother</p>
    </header>
    <div class="job-title">
      <h2>
        Web <br /><span class="dev">Dev<span class="eloper">eloper</span></span>
      </h2>
    </div>
    <br />
    <p class="outof">out of</p>
    <div class="city-container">
      <h3 class="location">
        <span class="denver">Denver,</span> <br />
        <span class="C"> C</span><span class="O">O</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.name-container {
  position: absolute;
  top: 70px;
  left: 70px;
  /* height: 20vh;
  width: 80vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.f-name {
  -webkit-text-stroke: 1.5px rgb(87, 153, 197);
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 5;
  font-size: 4rem;
  letter-spacing: 1.2px;
  font-weight: 900;
  color: transparent;
}
.fname-2 {
  -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 38px;
  left: 6px;
  color: rgba(0, 0, 0, 0.726);
  z-index: 2;
}
.fname-3 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 4rem;
  letter-spacing: 3px;
  font-weight: 800;
  position: absolute;
  top: 39px;
  left: 5px;
  color: transparent;
  z-index: 1;
}
.fname-4 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 4rem;
  letter-spacing: 3px;
  font-weight: 800;
  position: absolute;
  top: 42px;
  left: 3px;
  color: transparent;
  z-index: 1;
}
.l-name {
  -webkit-text-stroke: 1.5px rgb(87, 153, 197);
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 5;
  letter-spacing: 1.2px;
  font-weight: 900;
  font-size: 4rem;
  color: transparent;
  padding-top: .5em;
}
.lname-2 {
  -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 78px;
  left: 6px;
  color: black;
  z-index: 2;
  padding-top: .5em;
}
.lname-3 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 4rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  position: absolute;
  top: 79px;
  left: 5px;
  color: transparent;
  z-index: 1;
  padding-top: .5em;
}
.lname-4 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 4rem;
  letter-spacing: 1.2px;
  font-weight: 800;
  position: absolute;
  top: 82px;
  left: 3px;
  color: transparent;
  z-index: 1;
  padding-top: .5em;
}
.job-title {
  position: absolute;
  top: 35%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  font-size: 2.3rem;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  color: transparent;
}
span.dev {
  position: relative;
  left: 20%;
}
span.eloper {
  animation: flicker-in-1 4s;
  animation-delay: .3s;
}
h2 {
  text-align: left;
}
.outof {
  position: absolute;
  top: 60%;
  font-size: 2rem;
  color: rgba(127, 255, 212, 0.685);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 2rem;
  opacity: .7;
  animation: soft-blink 5s ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
}
.location {
  position: absolute;
  bottom: 15%;
  font-weight: 900;
  left: 20%;
  text-align: left;
  padding-bottom: 2em;
  font-size: 3rem;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
}
.city-container {
  animation: appear 2s ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
}
span.C {
  position: absolute;
  left: 80%;
  z-index: 5;
  font-size: 3rem;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  color: transparent;
  /* animation: fill-c 3s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 4.5s;
  transform: rotate(-5deg); */
}
span.O {
  position: absolute;
  font-size: 3rem;
  /* bottom: .6rem; */
  left: 100%;
  z-index: 1;
  color: transparent;
  /* animation: float-left 3s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 4.5s; */
  /* transform: rotate(-5deg); */
}
@keyframes soft-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: .8;
  }
  100% {
    opacity: 0;
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* @keyframes float-left {
  from {
    color: rgba(169, 231, 255, 0.637);
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  }
  to {
    color: rgba(253, 189, 28, 0.822);
    -webkit-text-stroke: 1px rgb(197, 18, 18);
  }
}
@keyframes fill-c {
  from {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    color: rgba(169, 231, 255, 0.637);
  }
  to {
    -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.747);
    color: rgba(218, 26, 26, 0.774);
  }
} */
.flicker-in-1 {
  -webkit-animation: flicker-in-1 2s linear 2s forwards;
  animation: flicker-in-1 2s linear 2s forwards;
}
@-webkit-keyframes flicker-in-1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  30.5% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  50% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  55% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  60% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  75% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  85% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  100% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
}
@keyframes flicker-in-1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  30.5% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  50% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  55% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  60% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  75% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  85% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  100% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
}

@media screen and (min-width: 700px) {
  .name-container {
    position: absolute;
    top: 10%;
    left: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
}
#name {
  font-size: 7rem;
}
.job-title {
  position: absolute;
  top: 40%;
  left: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  font-size: 3.5rem;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
}
.outof {
  top: 65%;
  left: 40%;
  font-size: 2.5rem;
  color: rgba(127, 255, 212, 0.685);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
}
.location {
  bottom: 5%;
  left: 30%;
  padding-bottom: 1em;
  font-size: 5.5rem;
  color: transparent;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
}
span.C {
  font-size: 5.5rem;
}
span.O {
  font-size: 5.5rem;
  left: 100%;
}
}

@media screen and (min-width: 1000px) {
  .l-name {
    top: -5px;
    left: 200px;
  }
  .lname-2 {
    top: -5px;
    left: 201px;
  }
  .lname-3 {
    top: -5px;
    left: 202px;
  }
  .lname-4 {
    top: -5px;
    left: 198px;
  }
  .job-title {
  top: 35%;
  left: 6%;
  font-size: 4rem;
}
.location {
  bottom: 10%;
  left: 50%;
  font-size: 6rem;
}
.outof {
  top: 59%;
  left: 30%;
  font-size: 4rem;
}
span.O {
  left: 99%;
}
}
</style>
