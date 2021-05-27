<template>
  <div class="container">
    <h1 class="title" id="about.me">I'm Kel...</h1>
    <section class="myself">
      <p class="biography">
        I live in Colorado. When I'm not creating things with code, I'm probably
        doing something music related. <br />
        I am a software engineer with a focus on frontend development. A need
        for creative expression drives my ambition to build things that can make
        a difference.<br />
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100vh;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  margin: 1em;
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  z-index: 0;
}
.title::before,
.title::after {
  content: "I'm Kel...";
  position: absolute;
  top: 0;
  left: 0;
}
.title::before {
  z-index: 2;
  -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(3.3deg);
}
.title::after {
  z-index: 1;
  /* color: rgba(33, 219, 219, 0.8); */
  color: rgba(4, 182, 226, 0.9);
  -webkit-text-stroke: 2px rgba(253, 209, 11, 0.8);
  transform: translate(2.9px, -2px);
  /* filter: blur(1px); */
}
.biography {
  font-family: "Poppins";
  color: rgba(33, 182, 219, 0.8);
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 1.7em;
  margin: 1em 2em;
  font-size: 1.1rem;
  max-width: 800px;
  text-align: center;
  z-index: 10;
}
/* .shape-3 {
  height: 20vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(41, 113, 126, 0.2);
  clip-path: polygon(
    45% 0,
    0 100%,
    100% 9%,
    100% 70%,
    26% 100%,
    100% 70%,
    0 36%,
    100% 100%
  );
} */

@media screen and (min-width: 700px) {
  .title {
    font-size: 4rem;
  }
  .biography {
    font-size: 1.3rem;
    width: 700px;
  }
}
</style>
