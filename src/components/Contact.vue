<template>
  <section class="contact-container">
    <div class="grabber">
      <img
        src="../assets/img/background@2x.png"
        alt="Kel Strother"
        class="guitars"
      />
    </div>
    <div class="form-container" id="contactme">
      <!-- <h2 class="title">contact.me</h2> -->
      <form action="https://formspree.io/f/mrgooljj" method="POST">
        <label>Name</label>
        <input class="textfield" type="text" name="name" />
        <label>Email</label>
        <input type="text" name="_replyto" />
        <label>Message</label>
        <textarea id="text-input" name="message" rows="5" cols="40"></textarea>
      </form>
      <button type="submit">Submit</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.grabber {
  width: 100vw;
  margin-top: 4em;
  /* margin: 0; */
  padding: 0;
  color: #fff;
}
.title {
  color: rgba(87, 153, 197, 1);
  -webkit-text-stroke: 1px goldenrod;
  font-size: 2.5rem;
  margin-top: -.5rem;
}
.guitars {
  width: 80vw;
}
#contactme {
  width: 100vw;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 40em;
  margin: 0 auto;
  text-align: left;
  padding: 1em;
  border-radius: 6px;
}
label {
  color: #378094;
  display: inline-block;
  margin: .5em 0 .5em;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: 500;
}
input {
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
}
#text-input {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  font-family: "Poppins", sans-serif;
  border: none;
  color: rgba(255, 255, 255, 0.7);
}
button {
  width: 8em;
  margin-bottom: 4em;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0.3);
  color: #378094;
  border-radius: 7px;
  border: none;
  padding: 0.5em;
}
button:hover {
  cursor: pointer;
  color: rgb(182, 172, 97);
}
</style>
