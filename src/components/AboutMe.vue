<template>
  <div class="container">
    <h1 class="title">about.me</h1>
    <section class="myself">
      <p class="biography">
        My name is Kel. I live in Colorado. When I'm not creating things with
        code, I'm probably doing something music related. <br /><br />I am a
        software engineer with a focus on frontend development. A need for
        creative expression drives my ambition to build things that can make a
        difference.<br />
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
h1 {
   margin-bottom: 1em;
}
.biography {
   font-size: 1.5em;
  max-width: 700px;
  text-align: center;
}
</style>
