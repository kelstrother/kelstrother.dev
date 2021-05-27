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
  left: 10%;
  transform: rotate(-5deg);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  letter-spacing: 1.8px;
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
  letter-spacing: 2.2px;
}
span.eloper::before {
  content: attr(data-text);
  position: absolute;
  top: -3px;
  left: 37.5%;
  -webkit-text-stroke: 1px rgba(169, 177, 56, 0.938);
  font-weight: 700;
  z-index: 0;
  color: transparent;
  animation: electrify 4s;
  animation-delay: 0.3s;
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
  left: 20%;
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
.denver::before {
  content: "Denver";
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: 1px rgb(0, 204, 255);
  transform: translate(-1.5px, -1.5px);
}
span.C {
  color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 100%;
}
span.C::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "C";
  text-shadow: 0 0 15px rgba(231, 36, 10, 0.24);
  z-index: 0;
  animation: soft-blink infinite 5s;
}
span.O {
  color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 120%;
}
span.O::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "O";
  text-shadow: 0 0 15px rgba(253, 228, 4, 0.26);
  z-index: 0;
  animation: soft-blink infinite 5s;
}
.copyright {
  color: rgba(101, 224, 255, 0.363);
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
/* @-webkit-keyframes flicker-in-1 {
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
} */
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
    transform: rotate(0);
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
    font-weight: 800;
    color: rgba(0, 0, 0, 0.5);
    -webkit-text-stroke: 0.5px rgba(127, 255, 212, 0.897);
  }
  .city-container {
    position: absolute;
    top: 70%;
    left: 55%;
  }
  .location {
    font-size: 2.5rem;
    /* color: transparent; */
    -webkit-text-stroke: 2px rgba(87, 153, 197, 1);
  }

  span.C {
    left: 100%;
  }
  span.O {
    right: 120%;
  }
}

@media screen and (min-width: 1024px) {
  .job-title {
    top: 43%;
    left: 6%;
  }
  .webdev {
    z-index: 0;
    font-size: 5rem;
    color: rgba(33, 219, 219, 0.5);
    -webkit-text-stroke: 2px rgba(207, 153, 3, 1);
    filter: blur(1px);
    text-shadow: 0 0 15px rgba(255, 217, 0, 0.185);
  }
  .webdev::before {
    top: 0;
    left: 1.5px;
    z-index: 1;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.5px rgb(0, 204, 255);
  }
  span.dev {
    top: 70%;
    left: 73%;
    color: rgba(0, 0, 0, 0.952);
    z-index: 15;
    -webkit-text-stroke: 1px rgb(255, 192, 17);
    transform: translate(-1.5px, -1.5px);
    position: absolute;
    text-shadow: 3px 0 10px rgba(0, 247, 255, 0.123);
  }
  span.dev::before,
  span.dev::after {
    position: absolute;
    top: 0;
    left: 0;
  }
  span.dev::before {
    z-index: 0;
    color: rgba(255, 187, 0, 0.699);
    -webkit-text-stroke: 3px rgb(0, 204, 255);
    transform: translate(0.5px, -2.66px);
    filter: blur(1px);
    letter-spacing: 3px;
  }
  span.dev::after {
    z-index: 0;
    content: attr(data-text);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.671);
    transform: translate(1.5px, 1.5px);
  }
  span.eloper {
    color: rgba(0, 0, 0, 0.952);
    z-index: 15;
    -webkit-text-stroke: 1px rgb(255, 112, 17);
    transform: translate(-1.5px, -1.5px);
    position: absolute;
    text-shadow: 0 0 10px rgba(255, 251, 0, 0.123);
    /* text-shadow: 0 0 15px rgba(0, 247, 255, 0); */
  }
  span.eloper::before,
  span.eloper::after {
    position: absolute;
    top: 0;
    left: 0;
  }
  span.eloper::before {
    z-index: 0;
    color: rgba(255, 192, 17, 0.473);
    -webkit-text-stroke: 3px rgb(0, 204, 255);
    transform: translate(3px, -2.5px);
    letter-spacing: 2.2px;
  }
  span.eloper::after {
    z-index: 0;
    content: attr(data-text);
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    transform: translate(1.5px, 1.5px);
  }
  .city-container {
    bottom: 10%;
    left: 50%;
  }
  .location {
    font-size: 5rem;
  }
  .denver::before,
  .denver::after {
    content: "Denver";
    position: absolute;
    top: 0;
    left: 0;
  }
  .denver::before {
    -webkit-text-stroke: 1.5px rgb(0, 204, 255);
    transform: translate(-1.5px, -1.5px);
  }
  .outof {
    display: flex;
    top: 65%;
    left: 25%;
    font-size: 3.5rem;
  }
  span.C {
    color: rgb(0, 0, 0);
    top: 55%;
    left: 78%;
  }
  span.C::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "C";
    text-shadow: 0 0 10px rgba(231, 36, 10, 0.404);
    /* -webkit-text-stroke: 1px rgba(199, 35, 13, 0.5);
    transform: translate(-1.5px, -1.5px); */
    z-index: 0;
  }
  span.O {
    color: rgba(0, 0, 0, 1);
    top: 55%;
    left: 98%;
  }
  span.O::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "O";
    text-shadow: 0 0 10px rgba(253, 228, 4, 0.404);
    /* -webkit-text-stroke: 1px rgba(199, 35, 13, 0.5);
    transform: translate(-1.5px, -1.5px); */
    z-index: 0;
  }
}
</style>
