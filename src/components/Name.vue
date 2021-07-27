<template>
  <div class="perspective-container">
    <div class="perspective-name">
      <div class="name-line"></div>
      <div class="name-line">
        <p id="kel" class="text-line">Kel</p>
      </div>
      <div class="name-line">
        <p id="strother2" class="text-line">Strother</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Name",
};
</script>

<style>
.perspective-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.perspective-name {
  perspective: 500px;
  font-family: "Lexend";
  font-size: 65px;
  position: absolute;
  top: -2em;
  left: -1.75em;
}
.name-line {
  perspective: 500px;
  transform-style: preserve-3d;
  height: 57px;
  overflow: hidden;
  position: relative;
}
.text-line {
  margin: 0;
  height: 57px;
  line-height: 57px;
  letter-spacing: 3.5px;
}
.name-line:nth-child(2) {
  transform-style: preserve-3d;
  transform: skew(0deg, -20deg) scale(1.1, 1.5);
  left: 2rem;
  font-weight: 200;
  color: var(--deepblue);
}
.name-line:nth-child(3) {
  transform-style: preserve-3d;
  transform: skew(70deg, -20deg) scaley(0.6);
  left: 3rem;
  letter-spacing: 4px;
  font-weight: 100;
  -webkit-text-stroke: 0 rgba(255, 255, 255, 0.253);
}
#strother2 {
  color: transparent;
  background: linear-gradient(80deg, var(--deepwhite) 63%, var(--deepblue) 65%);
  background-clip: text;
  -webkit-background-clip: text;
}

@media screen and (min-width: 700px) {
  .perspective-name {
    font-size: 6rem;
    top: 12rem;
    left: -10rem;
  }
  .name-line {
    height: 80px;
  }
  .text-line {
    height: 80px;
    line-height: 80px;
  }
}

@media screen and (min-width: 1024px) {
  .perspective-name {
    font-size: 6rem;
    top: -2rem;
    left: -3.8em;
  }
  .name-line {
    height: 90px;
  }
  .text-line {
    height: 90px;
    line-height: 90px;
  }
}

@media screen and (min-width: 1280px) {
  .perspective-name {
    font-size: 8rem;
    top: 0.5rem;
    left: -4.5em;
  }
  .name-line {
    height: 105px;
  }
  .text-line {
    height: 105px;
    line-height: 105px;
  }
  .perspective-name:hover p {
    transform: translate(0, -105px);
  }
}
@media screen and (min-width: 2550px) {
  .perspective-name {
    font-size: 10rem;
  }
  .name-line {
    height: 155px;
  }
  .text-line {
    height: 155px;
    line-height: 155px;
  }
  .name-line:nth-child(2) {
    transform: skew(0deg, -20deg) scale(1.2, 1.7);
  }
  .name-line:nth-child(3) {
    transform: skew(70deg, -20deg) scaley(0.7) scaleX(1.2);
  }
}
</style>
