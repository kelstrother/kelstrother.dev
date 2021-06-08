<template>
  <div class="container">
    <h1 class="title" id="about.me">my name is Kel,</h1>
    <div class="auto-bio">
      <p class="biography" id="part1">
        I live in Colorado. When I'm not creating things with code, I'm probably
        doing something music related.
      </p>
      <p class="biography" id="part2">
        I am a software engineer with a focus on frontend development. A need
        for creative expression drives my ambition to build things that can make
        a difference.
      </p>
    </div>
    <div class="mobile-social-container">
      <div class="fb-container">
        <section class="fb1">
          <a href="https://www.facebook.com/kel.strother/" target="_blank">
            <ph-facebook-logo id="fb-logo" class="social-icon" weight="fill"
          /></a>
        </section>
        <section class="fb2">
          <ph-facebook-logo class="social-blur" id="fb-logo2" weight="fill" />
        </section>
        <section class="fb3">
          <ph-facebook-logo class="social-blur" id="fb-logo3" weight="fill" />
        </section>
      </div>
      <div class="resume-container">
        <section class="res1">
          <a
            href="https://docs.google.com/document/d/1OgsXexBqUcA2yoN8_w2MO-sDNqfUa44RCp7RX0-M6lM/edit?usp=sharing"
            target="_blank"
          >
            <ph-file-text class="social-icon" id="res-icon" weight="fill"
          /></a>
        </section>
        <section class="res2">
          <ph-file-text class="social-blur" id="res-icon2" weight="fill" />
        </section>
        <section class="res3">
          <ph-file-text class="social-blur" id="res-icon3" weight="fill" />
        </section>
      </div>
      <div class="linked-container">
        <section class="linked1">
          <a href="https://www.linkedin.com/in/kelstrother/" target="_blank">
            <ph-linkedin-logo
              class="social-icon"
              id="linked-logo"
              weight="fill"
          /></a>
        </section>
        <section class="linked2">
          <ph-linkedin-logo
            class="social-blur"
            id="linked-logo2"
            weight="fill"
          />
        </section>
        <section class="linked3">
          <ph-linkedin-logo
            class="social-blur"
            id="linked-logo3"
            weight="fill"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  /* margin-top: 1em; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.icon-text {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 24%;
}
.fb,
.resume,
.linked {
  color: rgba(33, 182, 219, 0.8);
}
.mobile-social-container {
  /* padding-top: 1em; */
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 2rem; */
  margin-bottom: 2rem;
}
.fb-container {
  display: flex;
  position: relative;
}

.fb1 {
  display: flex;
  z-index: 5;
  font-size: 2.5rem;
}
#fb-logo {
  color: rgb(0, 0, 0);
}
#fb-logo:hover {
  color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-in-out;
}
.fb2 {
  font-size: 2.6rem;
  position: absolute;
  top: 4px;
  left: 0;
  z-index: 1;
  filter: blur(3px);
  color: rgba(4, 182, 226, 0.8);
}
.fb3 {
  font-size: 2.6rem;
  position: absolute;
  top: -5px;
  left: 0;
  z-index: 0;
  filter: blur(3px);
  color: rgba(252, 227, 5, 0.8);
}
.resume-container {
  display: flex;
  position: relative;
}
.res1 {
  font-size: 2.5rem;
  z-index: 5;
}
#res-icon {
  color: rgb(0, 0, 0);
}
.res2 {
  font-size: 2.6rem;
  position: absolute;
  top: 5px;
  left: -3px;
  z-index: 1;
  filter: blur(3px);
  color: rgba(4, 182, 226, 0.8);
}
.res3 {
  font-size: 2.6rem;
  position: absolute;
  top: -5px;
  left: 1px;
  z-index: 0;
  filter: blur(3px);
  color: rgba(252, 227, 5, 0.8);
}
.linked-container {
  display: flex;
  position: relative;
}
.linked1 {
  font-size: 2.5rem;
  z-index: 5;
}
#linked-logo {
  color: rgb(0, 0, 0);
}
#linked-logo:hover {
  color: rgba(255, 255, 255, 0.6);
  transition: 0.2s ease-in-out;
}
.linked2 {
  font-size: 2.6rem;
  position: absolute;
  top: 5px;
  left: -2px;
  z-index: 1;
  filter: blur(3px);
  color: rgba(4, 182, 226, 0.8);
}
.linked3 {
  font-size: 2.6rem;
  position: absolute;
  top: -5px;
  left: 2px;
  z-index: 0;
  filter: blur(3px);
  color: rgba(252, 227, 5, 0.8);
}
.title {
  margin: 1rem 1rem 0 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px rgb(242, 242, 255);
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  text-align: center;
  transform: rotate(-5deg);
  z-index: 0;
}
.title::before,
.title::after {
  content: "my name is Kel,";
  position: absolute;
  top: 0;
  left: 0;
}
.title::before {
  z-index: 2;
  -webkit-text-stroke: 1.5px rgba(4, 182, 226, 1);
  transform: translate(4.5px, -4px);
  transform: rotate(1.3deg);
}
.title::after {
  z-index: 1;
  color: rgba(33, 219, 219, 0.8);
  /* color: rgba(4, 182, 226, 0.9); */
  -webkit-text-stroke: 2px rgba(253, 209, 11, 0.8);
  transform: translate(2.9px, -2px);
  /* filter: blur(1px); */
}
.auto-bio {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Poppins";
  color: rgba(33, 182, 219, 0.8);
  margin: 0 2em;
  width: 75vw;
  font-size: 1rem;
  max-width: 650px;
  z-index: 10;
}
#part1 {
  margin-top: 2em;
  text-indent: 25px;
  display: inline-block;
}
#part2 {
  margin-top: 1em;
  text-indent: 25px;
  display: inline-block;
}
.shape-3 {
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
}

@media screen and (min-width: 700px) {
  .title {
    font-size: 4rem;
  }
  .social-icon {
    font-size: 3.8rem;
  }
  .social-blur {
    font-size: 4rem;
  }
  .auto-bio {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 1024px) {
  .title {
    margin-top: 1.5em;
  }
  .container {
    justify-content: space-evenly;
  }
}
</style>
