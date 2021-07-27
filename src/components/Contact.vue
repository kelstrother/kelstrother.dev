<template>
  <section class="contact-container">
    <h1 class="title">contact.me</h1>
    <div class="icon-container">
      <a
        class="svg-link"
        target="_blank"
        href="https://www.linkedin.com/in/kelstrother/"
      >
        <img
          id="linked-in"
          class="linked"
          src="../assets/socials/iconfinder-icon.svg"
          alt="linkedin"
        />
        <span class="linked-shadow"></span>
      </a>
      <a target="_blank" href="https://codepen.io/KelStrother">
        <img
          id="codepen"
          class="linked"
          src="../assets/socials/codepen.svg"
          alt="Codepen"
        />
        <span class="codepen-shadow"></span>
      </a>
      <a target="_blank" href="https://github.com/kelstrother">
        <img
          id="github"
          class="linked"
          src="../assets/socials/github.svg"
          alt="Github"
        />
        <span class="github-shadow"></span>
      </a>
    </div>
    <p class="directions">or...</p>
    <div class="form-container" id="contactme">
      <form
        class="kwes-form"
        action="https://kwes.io/api/foreign/forms/bWbHXt1yJYRCebEEv7ne"
      >
        <label class="label" for="name">Name</label>
        <input class="input" type="text" name="name" />
        <label class="label" for="_replyto">Email</label>
        <input class="input" type="text" name="_replyto" />
        <label class="label" for="subject">Subject</label>
        <input class="input" type="text" name="subject" />
        <label class="label" for="message">Message</label>
        <textarea
          class="input"
          id="text-input"
          name="message"
          rows="5"
          cols="40"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import kwesforms from "kwesforms";
export default {
  mounted() {
    kwesforms.init();
  },
};
</script>

<style scoped>
.contact-container {
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.title {
  background: -webkit-linear-gradient(
    180deg,
    var(--brightblue) 32%,
    var(--brightwhite) 32%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px transparent;
  font-size: 2.7rem;
  font-weight: 800;
  letter-spacing: 3px;
  padding: 1em 0 1rem 0;
}
.icon-container {
  padding: 0.5em 0 1em 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.linked {
  width: 38px;
  border-radius: 10px;
  opacity: 0.8;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  /* filter: drop-shadow(10px 8px 2px rgba(255, 255, 255, 0.4)); */
}
.linked:hover {
  filter: invert(0.4) sepia(1) hue-rotate(10deg) saturate(1.5) brightness(110%);
  animation: twitch 0.3s both;
}
.directions {
  font-size: 1.5rem;
  font-weight: 300;
  color: transparent;
  background: linear-gradient(
    115deg,
    var(--deepblue) 55%,
    var(--deepwhite) 57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  padding: 1rem 0 1rem 0;
}
.form-container {
  display: flex;
  height: 100%;
  margin-top: -5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.kwes-form {
  width: 95%;
  max-width: 1000px;
  height: 80%;
  border: none;
}
.kwes-form .kw-border-success {
  border: 1px inset var(--deepblue);
}
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  padding: 0.4em;
  border-radius: 7px;
}
label {
  color: rgba(4, 182, 226, 0.8);
  display: inline-block;
  margin: 0.7em 0 0.5em 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 400;
}
.input {
  font-family: "Lexend", sans-serif;
  display: block;
  height: 40px;
  padding: 0.5rem 0.5rem;
  color: rgba(151, 229, 248, 0.8);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 5px;
  border: none;
  border-bottom: 0.2px groove rgba(4, 182, 226, 0.6);
  border-left: 1px solid rgba(4, 182, 226, 0.4);
}
.input:focus {
  outline: none;
  border: 1.5px inset var(--deepgold);
  box-shadow: 3px 3px 10px rgba(162, 236, 255, 0.4);
}
textarea {
  text-indent: 5px;
  font-size: 1rem;
  font-family: "Lexend", sans-serif;
  color: rgba(151, 229, 248, 0.8);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 5px;
  border: none;
  border-bottom: 0.2px groove rgba(4, 182, 226, 0.5);
  border-left: 0.2px solid rgba(4, 182, 226, 0.3);
}
#text-input {
  height: 100px;
}
button {
  font-family: "Lexend", sans-serif;
  overflow: hidden;
  width: 50%;
  height: 40px;
  max-width: 1000px;
  margin: 1em 0 1em 0;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  background: linear-gradient(
    175deg,
    rgb(1, 97, 138) -10%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0) 70%,
    rgb(1, 97, 138) 110%
  );
  color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 2px 0.25px var(--deepblue);
  align-self: center;
  padding: 0.4em 0.7em;
  transition: all 0.3s ease;
}
button:hover {
  cursor: pointer;
  letter-spacing: 7px;
  background: linear-gradient(
    175deg,
    rgba(253, 209, 11, 0.5) -10%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0) 70%,
    rgba(253, 209, 11, 0.6) 150%
  );
  color: var(--brightblue);
}

@media screen and (min-width: 700px) {
  .contact-container {
    padding-top: 7em;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .form-container {
    margin-top: -4em;
    width: 600px;
  }
  #text-input {
    height: 150px;
  }
  .title {
    font-size: 3.2rem;
  }
  .icon-container {
    width: 50vw;
    padding: 1em 0 0.5em 0;
  }
  .directions {
    font-size: 2rem;
    letter-spacing: 5px;
    padding-top: 1em;
  }
  button {
    height: 50px;
    width: 80%;
    margin: 1em 0;
  }
}

@media screen and (min-width: 1024px) {
  .contact-container {
    width: 100vw;
    height: 100vh;
  }
  .title {
    display: none;
  }
  .linked {
    padding-top: 1.5em;
    opacity: 0.8;
  }
  .directions {
    display: none;
  }
  button {
    margin-top: 2em;
    width: 80%;
  }
  .form-container {
    width: 70%;
  }
}

@media screen and (min-width: 1440px) {
  .icon-container {
    padding-top: 10em;
  }
  .linked {
    width: 50px;
  }
  label,
  .input {
    font-size: 1.2rem;
  }
  .input {
    height: 50px;
  }
  button {
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 2550px) {
  .contact-container {
    padding-top: 25em;
  }
  .icon-container {
    margin-top: -10em;
  }
  .linked {
    width: 50px;
  }
  button {
    margin-top: 4em;
    font-size: 1.5rem;
  }
  label,
  .input {
    font-size: 1.5rem;
  }
  .input {
    height: 50px;
  }
}
</style>
