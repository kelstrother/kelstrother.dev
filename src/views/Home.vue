<template>
  <div class="home">
    <header class="name-container">
      <Name />
    </header>
    <div class="job-title">
      <p class="webdev" data-text="Web">
        Web <br /><span class="dev" data-text="Dev"
          >Dev<span class="eloper" data-text="eloper">eloper</span></span
        >
      </p>
    </div>
    <br />
    <p class="outof">out of</p>
    <div class="city-container">
      <p class="location">
        <span class="denver">Denver,</span><br />
        <span class="C">C</span><span class="O">O</span>
      </p>
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

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  color: rgba(0, 0, 128, 0.925);
  width: 100vw;
}
.name-container {
  position: absolute;
  top: 5%;
  left: 8%;
  transform: rotate(-5deg);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.job-title {
  position: absolute;
  top: 40%;
  left: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.webdev {
  text-align: left;
  font-size: 2.5rem;
  font-weight: 900;
  /* letter-spacing: 1.8px; */
  color: rgb(0, 0, 0);
  -webkit-text-stroke: 1.5px rgb(0, 204, 255);
  /* color: rgba(0, 0, 0, 1); */
  /* -webkit-text-stroke: 1.5px rgb(45, 152, 179); */
  /* -webkit-text-stroke: 2px rgba(255, 187, 0, 0.795); */
  letter-spacing: 3.5px;
  z-index: 5;
}
.webdev::before,
.webdev::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.webdev::before {
  z-index: 0;
  color: rgb(2, 137, 170);
  -webkit-text-stroke: 1.5px rgb(0, 204, 255);
  transform: translate(2.5px, -1px);
  /* filter: blur(0.8px); */
}
.webdev::after {
  z-index: 5;
  -webkit-text-stroke: 0.8px rgba(255, 203, 60, 0.863);
  transform: translate(1.5px, 1px);
}
span.dev {
  top: 80%;
  left: 69%;
  color: rgba(0, 0, 0, 0.952);
  z-index: 15;
  -webkit-text-stroke: 1.3px rgba(255, 192, 17, 0.877);
  transform: translate(-1.5px, -1.5px);
  position: absolute;
  text-shadow: 3px 0 10px rgba(0, 247, 255, 0.123);
}
span.dev::before,
span.dev::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
span.dev::before {
  z-index: 0;
  color: rgb(0, 204, 255);
  /* color: rgba(255, 187, 0, 0.699); */
  -webkit-text-stroke: 1.5px rgb(4, 207, 207);
  /* -webkit-text-stroke: 3px rgb(0, 204, 255); */
  transform: translate(1.5px, -1.1px);
  filter: blur(0.8px);
}
span.dev::after {
  z-index: 0;
  -webkit-text-stroke: 1px rgb(29, 179, 248);
  transform: translate(1.5px, 1.5px);
}
span.eloper {
  color: rgba(0, 0, 0, 0.952);
  z-index: 15;
  -webkit-text-stroke: 1.6px rgba(255, 192, 17, 0.877);
  transform: translate(-1.5px, -1.5px);
  position: absolute;
  text-shadow: 3px 0 5px rgba(255, 230, 0, 0.226);
  /* letter-spacing: 4px; */
}
span.eloper::before,
span.eloper::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
span.eloper::before {
  z-index: 0;
  color: rgb(0, 204, 255);
  /* color: rgba(255, 187, 0, 0.699); */
  -webkit-text-stroke: 1px rgb(4, 207, 207);
  /* -webkit-text-stroke: 3px rgb(0, 204, 255); */
  transform: translate(1.5px, -1.1px);
  filter: blur(0);
  /* z-index: 0;
  color: rgba(255, 187, 0, 0.473);
  -webkit-text-stroke: 3px rgb(0, 204, 255);
  transform: translate(2.5px, -2.1px); */
  /* letter-spacing: 2.2px; */
}
span.eloper::after {
  z-index: 0;
  -webkit-text-stroke: 1px rgb(29, 179, 248);
  transform: translate(1.5px, 1.5px);
}
.outof {
  position: absolute;
  top: 57%;
  font-size: 2rem;
  transform: rotate(5deg);
  color: rgba(0, 0, 0, 0.795);
  -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
  font-weight: 800;
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
  left: 15%;
  animation: appear 2s ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
}
.location {
  padding-bottom: 1.5em;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 1.5px rgba(87, 153, 197, 1);
  font-weight: 900;
  letter-spacing: 1.4px;
}
.denver {
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1.5px rgb(0, 204, 255);
  letter-spacing: 3px;
}
.denver::before,
.denver::after {
  content: "Denver";
  position: absolute;
  top: 0;
  left: 0;
}
.denver::before {
  z-index: 0;
  color: rgb(2, 137, 170);
  -webkit-text-stroke: 1.5px rgb(0, 204, 255);
  transform: translate(2.5px, -1px);
  font-weight: 800;
}
.denver::after {
  z-index: 5;
  -webkit-text-stroke: 0.8px rgba(255, 203, 60, 0.863);
  transform: translate(1.5px, 1px);
  letter-spacing: 3px;
}
span.C {
  -webkit-text-stroke: 1.5px rgba(212, 161, 19, 0.863);
  color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 85%;
}
span.C::before,
span.C::after {
  content: "C";
  position: absolute;
  top: 0;
  left: 0;
}
span.C::before {
  z-index: 0;
  color: rgb(2, 137, 170);
  transform: translate(1.5px, -1.5px);
  -webkit-text-stroke: 1px rgba(253, 253, 253, 0.863);
}
span.C::after {
  z-index: 5;
  -webkit-text-stroke: 0.8px rgb(0, 204, 255);
  transform: translate(1.5px, 1px);
}
span.O {
  -webkit-text-stroke: 1.5px rgba(212, 161, 19, 0.863);
  color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 105%;
}
span.O::after,
span.O::before {
  content: "O";
  position: absolute;
  top: 0;
  left: 0;
}
span.O::before {
  z-index: 0;
  color: rgb(2, 137, 170);
  transform: translate(1.5px, -1.5px);
  -webkit-text-stroke: 1px rgba(253, 253, 253, 0.863);
}
span.O::after {
  z-index: 5;
  -webkit-text-stroke: 0.8px rgb(0, 204, 255);
  transform: translate(1.5px, 1px);
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
@keyframes flicker-in-1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 0.2;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 0.2;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 0.2;
  }
  30.5% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 0.2;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 0.2;
  }
  50% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 0.2;
  }
  55% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 0.2;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 0.2;
  }
  60% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 0.2;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 0.2;
  }
  75% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 0.2;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    -webkit-text-stroke: 2px rgba(228, 121, 34, 0.815);
    opacity: 0.2;
  }
  85% {
    -webkit-text-stroke: 1.5px rgba(255, 217, 0, 0.842);
    opacity: 0.2;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 0.2;
  }
  100% {
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
    opacity: 1;
  }
}
@keyframes electrify {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  30.5% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    -webkit-text-stroke: 1px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  50% {
    -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  55% {
    -webkit-text-stroke: 1px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  60% {
    -webkit-text-stroke: 1px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  75% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    -webkit-text-stroke: 1px rgba(228, 121, 34, 0.815);
    opacity: 1;
  }
  85% {
    -webkit-text-stroke: 1px rgba(255, 217, 0, 0.842);
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
  100% {
    -webkit-text-stroke: 1px rgba(87, 153, 197, 1);
    opacity: 1;
  }
}

@media screen and (min-width: 700px) {
  .name-container {
    /* transform: rotate(0); */
    position: absolute;
    top: 10%;
    left: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .job-title {
    position: absolute;
    top: 45%;
    left: 11.5%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    /* width: 100%; */
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  }
  .webdev {
    font-size: 3.7rem;
  }
  .outof {
    display: none;
    position: absolute;
    transform: rotate(0);
    top: 65%;
    left: 10%;
    font-size: 2rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.5);
    -webkit-text-stroke: 0.5px rgba(127, 255, 212, 0.897);
  }
  .city-container {
    position: absolute;
    top: 73%;
    left: 37%;
  }
  .location {
    font-size: 3.7rem;
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  }

  span.C {
    left: 85%;
  }
  span.O {
    right: 120%;
  }
}

@media screen and (min-width: 1024px) {
  .home {
    /* overflow: hidden; */
    /* width: 100vw; */
    /* height: 100vh; */
  }
  .name-container {
    top: 5%;
    left: 25%;
    /* transform: rotate(0deg); */
  }
  .job-title {
    top: 47%;
    left: 21.5%;
  }
  .webdev {
    /* z-index: 0; */
    /* color: rgba(207, 153, 3, 0.795); */
    /* -webkit-text-stroke: 3px rgb(0, 204, 255); */
    /* filter: blur(1px); */
    font-size: 4.2rem;
    /* letter-spacing: 2.5px; */
    /* color: rgba(0, 204, 255, 0.774); */
    /* text-shadow: 0 0 15px rgba(255, 217, 0, 0.185); */
  }
  .webdev::before {
    /* top: 0;
    left: 1.5px;
    z-index: 1;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1px rgba(255, 192, 17, 0.671);
    transform: translate(1.5px, 3px); */
  }
  span.dev {
    top: 70%;
    left: 73%;
    /* color: rgba(0, 0, 0, 0.952);
    z-index: 15;
    -webkit-text-stroke: 1px rgb(255, 192, 17);
    transform: translate(-1.5px, -1.5px);
    position: absolute;
    text-shadow: 3px 0 10px rgba(0, 247, 255, 0.123); */
  }
  span.dev::before,
  span.dev::after {
    /* position: absolute;
    top: 0;
    left: 0; */
  }
  span.dev::before {
    /* z-index: 0;
    color: rgba(255, 187, 0, 0.699);
    -webkit-text-stroke: 3px rgb(0, 204, 255);
    transform: translate(0.5px, -2.66px);
    filter: blur(1px);
    letter-spacing: 3px; */
  }
  span.dev::after {
    /* z-index: 0;
    content: attr(data-text);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.671);
    transform: translate(1.5px, 1.5px); */
  }
  span.eloper {
    /* color: rgba(0, 0, 0, 0.952);
    z-index: 15;
    -webkit-text-stroke: 1px rgb(255, 112, 17);
    transform: translate(-1.5px, -1.5px);
    position: absolute;
    text-shadow: 0 0 10px rgba(255, 251, 0, 0.158); */
  }
  span.eloper::before,
  span.eloper::after {
    position: absolute;
    top: 0;
    left: 0;
  }
  span.eloper::before {
    /* z-index: 0;
    color: rgba(255, 187, 0, 0.473);
    -webkit-text-stroke: 3px rgb(0, 204, 255);
    transform: translate(3px, -2.1px);
    letter-spacing: 2.2px; */
  }
  span.eloper::after {
    /* z-index: 0;
    content: attr(data-text);
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    transform: translate(1.5px, 1.5px); */
  }
  .city-container {
    top: 79%;
    left: 45%;
  }
  .location {
    font-size: 4.2rem;
  }
  .denver {
    /* color: rgba(0, 0, 0, 0.952);
    -webkit-text-stroke: 2px rgb(255, 255, 255);
    margin: 0 0 0.3rem 0.3rem;
    letter-spacing: 2.2px; */
  }
  .denver::before,
  .denver::after {
    /* content: "Denver";
    position: absolute;
    top: 0;
    left: 0; */
  }
  .denver::before {
    /* z-index: 0;
    color: rgba(255, 187, 0, 0.582);
    -webkit-text-stroke: 2px rgb(0, 204, 255);
    transform: translate(2px, -1.8px);
    letter-spacing: 2.2px; */
  }
  .denver::after {
    /* z-index: 5;
    -webkit-text-stroke: 2.4px rgba(219, 162, 3, 0.623);
    transform: translate(1.5px, 1px);
    letter-spacing: 3px; */
  }
  .outof {
    display: flex;
    top: 65%;
    left: 25%;
    font-size: 3.5rem;
  }
  span.C {
    top: 0;
    left: 105%;
    /* color: rgba(255, 187, 0, 0.514);
    z-index: 0;
    -webkit-text-stroke: 2.4px rgb(0, 204, 255);
    transform: translate(0.5px, -3px);
    text-shadow: 3px 0 10px rgba(0, 247, 255, 0.123); */
  }
  span.C::before,
  span.C::after {
    content: "C";
    position: absolute;
    top: 0;
    left: 0;
  }
  span.C::before {
    /* z-index: 10;
    color: rgba(0, 0, 0, 0.952);
    -webkit-text-stroke: 1px rgb(198, 237, 240);
    transform: translate(1px, 3px);
    letter-spacing: 3px; */
  }
  span.C::after {
    /* z-index: 0;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.671);
    transform: translate(1.5px, 1.5px); */
  }
  span.O {
    top: 0;
    left: 125%;
    /* color: rgba(255, 187, 0, 0.514);
    z-index: 0;
    -webkit-text-stroke: 2.4px rgb(0, 204, 255);
    transform: translate(0.5px, -3px);
    filter: blur(0.8px);
    text-shadow: 3px 0 10px rgba(0, 247, 255, 0.123); */
  }
  span.O::before,
  span.O::after {
    content: "O";
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
