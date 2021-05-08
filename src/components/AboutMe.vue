<template>
<!-- <div class="shape-1"></div> -->
<!-- <div class="shape-2"></div> -->
  <div class="container">
    <h1 class="title" id="about.me">about.me</h1>
    <section class="myself">
      <p class="biography">
        My name is Kel. I live in Colorado. When I'm not creating things with
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
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: rgba(87, 153, 197, 1);
  -webkit-text-stroke: 1px goldenrod;
  font-size: 2.5em;
  font-weight: 900;
}
#about.me {
  margin-bottom: 1em;
}
.biography {
  font-family: "Poppins";
  color: rgba(87,153,197,1);
  font-weight: 400;
  margin: 1em 2em;
  font-size: 0.9em;
  max-width: 700px;
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
</style>
