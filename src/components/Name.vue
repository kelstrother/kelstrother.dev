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
  color: rgba(0, 0, 0, 0);
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
  transform: translate(7px, -4.5px);
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 2.2px rgba(0, 147, 184, 0.9);
  filter: brightness(110%);
}
.kel::after {
  z-index: 1;
  transform: translate(4px, -3px);
  -webkit-text-stroke: 2.5px rgb(209, 154, 2);
  filter: blur(0.75px) brightness(120%);
  color: rgba(0, 255, 255, 0.555);
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
  color: rgba(0, 0, 0, 0);
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
  transform: translate(7px, -4.5px);
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 2.2px rgba(0, 147, 184, 0.9);
  filter: brightness(110%);
}
.strother::after {
  z-index: 1;
  /* transform: translate(3px, -2px); */
  transform: translate(4px, -3px);
  /* -webkit-text-stroke: 2px rgba(255, 189, 6, 0.9); */
  -webkit-text-stroke: 2.5px rgb(209, 154, 2);
  filter: blur(0.75px) brightness(120%);
  /* color: rgba(33, 219, 219, 0.445); */
  color: rgba(0, 255, 255, 0.555);
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
    font-size: 5.2rem;
    position: relative;
    font-weight: 900;
    z-index: 0;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1.7px rgb(219, 219, 219);
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
    transform: translate(10px, -4.5px);
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 2.75px rgba(0, 147, 184, 0.9);
    text-shadow: 0 0 10px rgba(0, 204, 255, 0.452);
    /* filter: brightness(110%); */
  }
  #fullname::after {
    z-index: 1;
    filter: blur(0.75px) brightness(105%);
    color: rgba(33, 219, 219, 0.445);
    /* -webkit-text-stroke: 2.6px rgba(207, 153, 3, 0.9); */
    -webkit-text-stroke: 3px rgb(209, 154, 2);
    transform: translate(5px, -2px);
  }
}

@media screen and (min-width: 1024px) {
  #fullname {
    transform: translate(10%, 25%);
    font-size: 6rem;
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
