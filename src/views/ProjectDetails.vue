<template>
  <Details :projects="projects" />
</template>

<script>
import Details from "../components/Details"
import getProjects from "../helpers/getProjects"
export default {
   components:  { Details },
  setup() {
    const { projects, error, load } = getProjects();

    load();

    return { projects, error };
  },
}
</script>

<style>

</style>