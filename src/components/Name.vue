<template>
  <div class="container">
    <div class="myname-container">
      <h1 id="fullname">Kel Strother</h1>
    </div>
    <div class="mobile-name-container">
      <p class="kel">Kel</p>
      <p class="strother">Strother</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.myname-container {
  display: none;
}
.kel {
  margin: 1rem 0 0 0;
  font-size: 3.4rem;
  font-weight: 900;
  position: relative;
  display: inline-block;
  z-index: 0;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  letter-spacing: 0.2rem;
}
.kel::before,
.kel::after {
  content: "Kel";
  position: absolute;
  top: 0;
  left: 0;
}
.kel::before {
  z-index: 2;
  -webkit-text-stroke: 1.5px rgb(33, 193, 233);
  transform: translate(4.5px, -4px) rotate(0deg);
}
.kel::after {
  z-index: 1;
  color: rgba(33, 219, 219, 0.8);
  filter: blur(0.8px);
  -webkit-text-stroke: 2.4px rgba(207, 153, 3, 0.9);
  transform: translate(2.9px, -2px);
}
.strother {
  margin: 1rem 0 0 0;
  font-size: 3.4rem;
  font-weight: 900;
  position: absolute;
  top: 3.5rem;
  left: 2.5rem;
  display: inline-block;
  z-index: 0;
  color: rgb(0, 0, 0);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  letter-spacing: 0.2rem;
}
.strother::before,
.strother::after {
  content: "Strother";
  position: absolute;
  top: 0;
  left: 0;
}
.strother::before {
  z-index: 2;
  transform: translate(5px, -4px);
  -webkit-text-stroke: 1.5px rgb(33, 193, 233);
  /* -webkit-text-stroke: 2px rgb(61, 168, 255); */
  /* letter-spacing: 0.22rem; */
}
.strother::after {
  z-index: 1;
  transform: translate(3px, -2px);
  color: rgba(33, 219, 219, 0.8);
  -webkit-text-stroke: 2.4px rgba(231, 171, 4, 0.9);
  filter: blur(0.8px);
}

@media screen and (min-width: 700px) {
  .mobile-name-container {
    display: none;
  }
  .myname-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 35vh;
    width: 100%;
    align-items: center;
    transform: translate(-15%, 0%);
  }
  #fullname {
    /* margin: 3rem 3rem 0 0; */
    font-size: 5.2rem;
    position: relative;
    font-weight: 900;
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1px rgba(242, 242, 255, 0.719);
    letter-spacing: 0.225rem;
  }
  #fullname::before,
  #fullname::after {
    content: "Kel Strother";
    position: absolute;
    top: 0;
    left: 0;
  }
  #fullname::before {
    z-index: 2;
    -webkit-text-stroke: 1.5px rgb(0, 204, 255);
    color: black;
    transform: translate(4.5px, -4px);
    /* text-shadow: 0 0 10px rgba(207, 153, 3, 0.9); */
    text-shadow: 0 0 10px rgba(0, 204, 255, 0.459);
  }
  #fullname::after {
    /* transform: translate(3.7px, -2px); */
    z-index: 1;
    /* color: rgba(255, 255, 255, 0.637); */
    color: rgba(33, 219, 219, 0.8);
    -webkit-text-stroke: 3px rgba(231, 171, 4, 0.9);
    /* -webkit-text-stroke: 2.6px rgba(207, 153, 3, 0.9); */
    transform: translate(2px, -2px);
    filter: blur(1.5px);
    /* text-shadow: 0 0 10px rgba(0, 204, 255, 0.281); */
  }
}

@media screen and (min-width: 1024px) {
  #fullname {
    transform: translate(10%, 25%);
    /* margin-top: 5rem; */
    font-size: 6rem;
    /* position: relative;
    font-weight: 900;
    position: relative;
    z-index: 1;
    -webkit-text-stroke: 1.2px rgb(0, 204, 255); */
    letter-spacing: 0.5rem;
  }
  #fullname::before {
    /* -webkit-text-stroke: 1.2px rgb(0, 204, 255);
    color: black;
    top: 0;
    left: 0;
    position: absolute; */
    /* transform: translate(0px, 3px); */
  }
  #fullname::after {
    /* color: rgba(33, 219, 219, 0.5); */
    /* -webkit-text-stroke: 3px rgba(33, 219, 219, 0.5); */
    /* -webkit-text-stroke: 3px rgb(2, 181, 212); */
    /* content: "Kel Strother";
    position: absolute;
    z-index: 1;
    color: rgba(255, 255, 255, 0.637);
    -webkit-text-stroke: 2px rgba(194, 145, 12, 0.808);
    top: 0;
    left: 0;
    transform: translate(1.5px, -1.5px); */
    text-shadow: 0 0 10px rgba(0, 204, 255, 0.281);
    /* text-shadow: 0 0 10px rgba(255, 217, 0, 0.582); */
  }
}
</style>
