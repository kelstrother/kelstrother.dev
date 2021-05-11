<template>
  <div class="home">
    <div class="name-container">
      <h1 data-text="Kel" class="f-name">Kel</h1>
      <p class="fname-2">Kel</p>
      <p class="fname-3">Kel</p>
      <h1 data-text="Strother" class="l-name">Strother</h1>
      <p class="lname-2">Strother</p>
      <p class="lname-3">Strother</p>
      <!-- <img class="name" id="first" src="../../public/slice3.png" alt="" />
      <img class="name" id="last" src="../../public/slice2.png" alt="" /> -->
    </div>
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

<style>
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
  top: 20px;
  left: 20px;
  height: 20vh;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  align-items: center;
}
.f-name {
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  z-index: 5;
  font-size: 3.3rem;
  letter-spacing: 1.2px;
  font-weight: 900;
  /* margin-right: 1rem; */
  color: transparent;
}
.f-name:before,
.f-name:after {
  z-index: 4;
  color: transparent;
  font-weight: 900;
  content: attr(data-text);
  position: absolute;
  top: 40px;
  left: 3px;
  /* transition: 0.2s; */
}
.fname-2 {
  -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
  font-size: 3.3rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 39px;
  left: 2px;
  color: black;
  /* color: transparent; */
  z-index: 2;
}
.fname-3 {
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 3.3rem;
  letter-spacing: 3px;
  font-weight: 800;
  position: absolute;
  top: 42px;
  left: -1px;
  color: transparent;
  z-index: 1;
}
.l-name {
  padding-left: 1.6rem;
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  z-index: 5;
  letter-spacing: 1.2px;
  font-weight: 900;
  font-size: 3.3rem;
  color: transparent;
}
.l-name:before,
.l-name:after {
  padding-left: 1rem;
  z-index: 4;
  font-weight: 900;
  color: transparent;
  content: attr(data-text);
  position: absolute;
  top: 40px;
  left: 100px;
  /* transition: 0.2s; */
}
.lname-2 {
  padding-left: 1rem;
  -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
  font-size: 3.3rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  top: 39px;
  left: 100px;
  color: black;
  z-index: 2;
  /* display: none; */
}
.lname-3 {
  padding-left: 1rem;
  -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
  font-size: 3.3rem;
  letter-spacing: 2.5px;
  font-weight: 800;
  position: absolute;
  top: 42px;
  left: 96px;
  color: transparent;
  z-index: 1;
  /* display: none; */
}
/* img {
  padding: 0;
  margin: 0;
}
#first {
  position: absolute;
  top: 10px;
  left: 10px;
  /* animation: tracking-in-expand-fwd 4s ease-in; */
  /* padding: 0;
}
#last {
  position: absolute;
  top: 135px;
  left: 10px;
  padding: 0;
}  */
/* .name-img {
  height: 60px;
  width: 550px;
  opacity: 0.7;
} */
.job-title {
  position: absolute;
  top: 45%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1.7rem;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  color: rgba(255, 255, 255, 0);
}
span.dev {
  position: relative;
  left: 25%;
  text-align: right;
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
  font-size: 1.2rem;
  color: rgba(127, 255, 212, 0.685);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 2rem;
  /* opacity: .8; */
  animation: soft-blink 5s ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 2;
  animation-fill-mode: both;
}
.location {
  position: absolute;
  bottom: 15%;
  font-weight: 900;
  left: 20%;
  text-align: left;
  padding-bottom: 2em;
  font-size: 1.9rem;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  animation: tracking-in-expand-fwd 3s ease;
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
  font-size: 2.2rem;
  -webkit-text-stroke: 1px rgb(207, 20, 20);
  color: rgb(197, 18, 18);
  animation: fill-c 3s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 4.5s;
}
span.O {
  position: absolute;
  font-size: 2.2rem;
  left: 103%;
  z-index: 1;
  color: transparent;
  animation: float-left 3s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 4.5s;
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
@keyframes float-left {
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
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
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
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 700px) {
  .name-container {
    position: absolute;
    top: 10%;
    left: 35%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#first {
  position: relative;
  top: 100px;
  left: -20px;
  height: 12rem;
  padding: 0;
}
#last {
  position: absolute;
  top: 135px;
  left: 110%;
  padding: 0;
  height: 12rem;
}
.job-title {
  position: absolute;
  top: 50%;
  left: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  font-size: 4rem;
  -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
}
.outof {
  top: 70%;
  left: 50%;
  font-size: 2.5rem;
  color: rgba(127, 255, 212, 0.685);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
}
.location {
  bottom: 5%;
  left: 70%;
  padding-bottom: 1em;
  font-size: 5.5rem;
  color: rgba(169, 231, 255, 0.637);
  -webkit-text-stroke: 1px rgb(255, 255, 255);
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
  #first {
    top: 40px;
    left: -90%;
  }
  #last {
    left: 15%;
  }
  .job-title {
  top: 40%;
  left: 10%;
  font-size: 3rem;
}
.location {
  bottom: 10%;
  left: 60%;
  font-size: 4rem;
}
.outof {
  top: 70%;
  left: 30%;
  font-size: 2.5rem;
}
span.O {
  left: 105%;
}
}
</style>
