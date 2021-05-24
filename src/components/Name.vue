<template>
  <div class="container">
    <div class="mobile-name-container">
      <p class="kel">Kel</p>
      <p class="strother">Strother</p>
    </div>
    <div class="myname-container">
      <h1 id="fullname">Kel Strother</h1>
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
  transform: translate(4.5px, -4px);
  transform: rotate(2.5deg);
}
.kel::after {
  z-index: 1;
  color: rgba(33, 219, 219, 0.8);
  filter: blur(0.8px);
  -webkit-text-stroke: 2.4px rgba(255, 189, 6, 0.9);
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
  transform: rotate(1.5deg);
  -webkit-text-stroke: 1.5px rgb(33, 193, 233);
  /* -webkit-text-stroke: 2px rgb(61, 168, 255); */
  /* letter-spacing: 0.22rem; */
}
.strother::after {
  z-index: 1;
  transform: translate(3px, -2px);
  color: rgba(33, 219, 219, 0.8);
  -webkit-text-stroke: 2.4px rgba(255, 189, 6, 0.9);
  filter: blur(0.8px);
}

@media screen and (min-width: 700px) {
  .mobile-name-container {
    display: none;
  }
  .myname-container {
    display: flex;
    flex-direction: row;
    padding: 4rem 0 0 0;
    align-items: center;
  }
  #fullname {
    font-size: 4.5rem;
    position: relative;
    font-weight: 900;
    position: relative;
    z-index: 0;
    color: rgba(0, 0, 0, 1);
    -webkit-text-stroke: 1.5px rgb(242, 242, 255);
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
    /* -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1); */
    -webkit-text-stroke: 1.5px rgb(33, 193, 233);
    transform: translate(4.5px, -4px);
    transform: rotate(1.5deg);
    
  }
  #fullname::after {
    z-index: 1;
    color: rgba(33, 219, 219, 0.8);
    -webkit-text-stroke: 2.4px rgba(255, 189, 6, 0.9);
    transform: translate(2.9px, -2px);
    filter: blur(0.9px);
  }
}
</style>
