<template>
  <div class="home">
    <header class="name-container">
      <p id="name" class="f-name">Kel</p>
      <p id="name" class="fname-2">Kel</p>
      <p id="name" class="fname-3">Kel</p>
      <p id="name" class="fname-4">Kel</p>
      <p id="name" class="l-name">Strother</p>
      <p id="name" class="lname-2">Strother</p>
      <p id="name" class="lname-3">Strother</p>
      <p id="name" class="lname-4">Strother</p>
    </header>
    <div class="job-title">
      <p class="webdev" data-text="Web">
        Web <br /><span class="dev" data-text="Dev">Dev<span class="eloper" data-text="eloper">eloper</span></span>
      </p>
    </div>
    <br />
    <p class="outof">out of</p>
    <div class="city-container">
      <p class="location">
        <span class="denver">Denver,</span><br/>
        <span class="C">C</span><span class="O">O</span>
      </p>
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
  top: 5%;
  left: 10%;
  transform: rotate(-5deg);
  /* height: 20vh;
  width: 80vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.f-name {
  -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
  position: absolute;
  top: 41px;
  left: 4px;
  z-index: 3;
  font-size: 4rem;
  letter-spacing: 1px;
  font-weight: 900;
  color: transparent;
}
.fname-2 {
  -webkit-text-stroke: 2.5px rgba(66, 219, 219, 0.671);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 38px;
  left: 6px;
  color: rgba(0, 0, 0, 0.589);
  z-index: 5;
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
  -webkit-text-stroke: 2px rgb(87, 153, 197);
  font-size: 4rem;
  letter-spacing: 3px;
  font-weight: 800;
  position: absolute;
  top: 42px;
  left: 3px;
  color: transparent;
  z-index: 2;
}
.l-name {
  -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
  position: absolute;
  top: 80px;
  left: 21px;
  z-index: 3;
  letter-spacing: 1px;
  font-weight: 900;
  font-size: 4rem;
  color: transparent;
  padding-top: 0.5em;
}
.lname-2 {
  -webkit-text-stroke: 2.5px rgba(66, 219, 219, 0.671);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 78px;
  left: 22px;
  color: rgba(0, 0, 0, 0.548);
  z-index: 5;
  padding-top: 0.5em;
}
.lname-3 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 4rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  position: absolute;
  top: 79px;
  left: 20px;
  color: transparent;
  z-index: 1;
  padding-top: 0.5em;
}
.lname-4 {
  -webkit-text-stroke: 1.5px rgb(87, 153, 197);
  font-size: 4rem;
  letter-spacing: 1.2px;
  font-weight: 800;
  position: absolute;
  top: 82px;
  left: 19px;
  color: transparent;
  z-index: 2;
  padding-top: 0.5em;
}
.job-title {
  position: absolute;
  top: 40%;
  left: 15%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.webdev {
  text-align: left;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1.4px;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  color: rgba(0, 0, 0, 5);
  z-index: 5;
}
.webdev::before {
  content: attr(data-text);
  position: absolute;
  top: 2px;
  left: 1px;
  -webkit-text-stroke: 1px rgba(255, 217, 0, 0.651);
  font-weight: 700;
  z-index: 0;
  color: transparent;
}
span.dev {
  position: relative;
  left: 20%;
}
span.dev::before {
  content: attr(data-text);
  position: absolute;
  top: -1px;
  left: 0.5px;
  -webkit-text-stroke: 1px rgba(255, 217, 0, 0.651);
  font-weight: 700;
  z-index: 0;
  color: transparent;
}
span.eloper {
  animation: flicker-in-1 4s;
  animation-delay: 0.3s;
}
span.eloper::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 38.5%;
  -webkit-text-stroke: 1px rgba(169, 177, 56, 0.938);
  font-weight: 700;
  z-index: 0;
  color: transparent;
}
.outof {
  position: absolute;
  top: 57%;
  font-size: 2rem;
  transform: rotate(5deg);
  color: rgba(127, 255, 212, 0.685);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 2rem;
  opacity: 0.7;
  animation: soft-blink 5s ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
}
.city-container {
  position: absolute;
  bottom: 10%;
  left: 20%;
  animation: appear 2s ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
}
.location {
  padding-bottom: 1.5em;
  font-size: 2.5rem;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  font-weight: 900;
  letter-spacing: 1.4px;
}
span.C {
  position: absolute;
  left: 100%;
  /* color: rgba(87, 153, 197, 0.644); */
}
span.O {
  position: absolute;
  left: 120%;
  /* color: rgba(87, 153, 197, 0.664); */
}
@keyframes disappear {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear-O {
  0% {
    -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  }
  50% {
    -webkit-text-stroke: 2.5px rgba(250, 8, 8, 0.644);
  }
  100% {
    -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  }
}
@keyframes soft-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
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
    transform: rotate(0);
    position: absolute;
    top: 10%;
    left: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  #name {
    font-size: 4rem;
  }
  .job-title {
    position: absolute;
    top: 50%;
    left: 4%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  }
  .webdev {
    font-size: 2.5rem;
  }
  .outof {
    display: none;
    position: absolute;
    transform: rotate(0);
    top: 65%;
    left: 10%;
    font-size: 2rem;
    color: rgba(127, 255, 212, 0.685);
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  }
  .city-container {
    position: absolute;
    top: 70%;
    left: 55%;
  }
  .location {
    font-size: 2.5rem;
    color: transparent;
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  }
  span.C {
    left: 100%;
  }
  span.O {
    right: 120%;
  }
}

@media screen and (min-width: 1000px) {
  #name {
    font-size: 6rem;
  }
  .l-name {
    top: -5px;
    left: 185px;
  }
  .lname-2 {
    top: -5px;
    left: 185px;
  }
  .lname-3 {
    top: -5px;
    left: 185px;
  }
  .lname-4 {
    top: -5px;
    left: 185px;
  }
  .job-title {
    top: 35%;
    left: 6%;
  }
  .webdev {
    font-size: 4.5rem;
  }
  .city-container {
    bottom: 10%;
    left: 50%;
  }
  .location {
    font-size: 4.5rem;
  }
  .outof {
    display: flex;
    top: 52%;
    left: 60%;
    font-size: 3.5rem;
  }
  span.O {
    left: 120%;
  }
}
</style>
