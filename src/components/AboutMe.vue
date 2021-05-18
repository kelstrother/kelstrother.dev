<template>
<!-- <div class="shape-1"></div> -->
<!-- <div class="shape-2"></div> -->
  <div class="container">
    <h1 class="title" id="about.me" data-text="I'm Kel...">I'm Kel...</h1>
    <section class="myself">
      <p class="biography">
        I live in Colorado. When I'm not creating things with
        code, I'm probably doing something music related. <br /><br />I am a
        software engineer with a focus on frontend development. A need for
        creative expression drives my ambition to build things that can make a
        difference.<br />
      </p>
    </section>
    <div class="shape-3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shape-1 {
  position: absolute;
  display: block;
  top: 150px;
  height: 20vh;
  width: 100vw;
  clip-path: polygon(100% 13%, 0 0, 63% 100%);
  background-color: rgba(17,94,108, 0.5); 
  /* z-index: -1; */
}
.shape-2 {
  position: absolute;
  display: block;
  top: 220px;
  height: 10vh;
  width: 100vw;
  clip-path: polygon(100% 100%, 31% 46%, 0 78%);
  background-color: rgba(41, 113, 126, 0.5);
  z-index: 0;
}
.container {
  height: 100vh;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  position: relative;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 2px;
  z-index: 0;
  /* transform: rotate(-10deg); */
}
.title:before,
.title:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.title:before {
  transform: translate(5px, -5px);
  z-index: 2;
  -webkit-text-stroke: 2px rgba(33, 182, 219, 0.8);
}
.title:after {
  color: rgba(33, 219, 219, 0.8);
  z-index: 1;
  -webkit-text-stroke: 1px rgba(240, 205, 48, 1);
  transform: translate(2px, -2px);
}
.biography {
  font-family: "Poppins";
  color: rgba(33, 182, 219, 0.8);
  letter-spacing: 1.2px;
  font-weight: 400;
  margin: 1em 2em;
  font-size: 1rem;
  max-width: 800px;
  text-align: center;
  z-index: 10;
}
.shape-3 {
  height: 20vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(41, 113, 126, 0.2);
  clip-path: polygon(45% 0, 0 100%, 100% 9%, 100% 70%, 26% 100%, 100% 70%, 0 36%, 100% 100%);
}

@media screen and (min-width: 700px) {
  .title {
    font-size: 4rem;
  }
  .biography {
    font-size: 1.4rem;
  }
}
</style>
