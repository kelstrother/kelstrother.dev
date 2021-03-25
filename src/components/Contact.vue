<template>
  <section class="contact-container">
     <h1 class="title">contact</h1>
    <div class="grabber">
      <img
        src="../assets/img/background@2x.png"
        alt="Kel Strother"
        class="guitars"
      />
    </div>
    <div class="form-container" id="contactme">
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
  /* background-color: #0b0c10; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grabber {
  width: 100vw;
  margin-top: 2em;
  /* background-color: #0b0c10; */
  color: #fff;
}
.guitars {
  width: 80vw;
}
#contactme {
  /* background-color: #0b0c10; */
  width: 100vw;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 40em;
  margin: 30px auto;
  text-align: left;
  padding: 1.5em;
  border-radius: 6px;
}
label {
  color: #378094;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
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
  margin: 0em 0 4em 0;
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
