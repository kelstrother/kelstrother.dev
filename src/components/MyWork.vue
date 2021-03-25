<template>
  <div class="project-container">
    <h1>my.work</h1>
    <div class="filler">filler box</div>
    <div class="filler">filler box</div>
    <div class="filler">filler box</div>
  <Skills />
  </div>
</template>

<script>
import Skills from "../components/Skills"
export default {
   components: { Skills },
};
</script>

<style scoped>
h1 {
   margin-bottom: 3em;
}
.filler {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1em;
  height: 300px;
  width: 50vw;
  border: .5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 4px 1px 15px rgba(0, 0, 0, 0.1);
}
</style>
