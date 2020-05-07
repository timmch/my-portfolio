<template>
  <div>
    <div v-for="project in projects" :key="project.slug">
      <nuxt-link
        :to="{ name: 'projects-project', params: { project: project.slug } }"
        prefetch
        >{{ project.title }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>

<style scoped></style>
