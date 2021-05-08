<template>
  <MyWork :projects="projects" />
</template>

<script>
import MyWork from "../components/MyWork"
import getProjects from "../helpers/getProjects"
export default {
   components:  { MyWork },
  setup() {
    const { projects, error, load } = getProjects();

    load();

    return { projects, error };
  },
}
</script>

<style scoped> 
</style>