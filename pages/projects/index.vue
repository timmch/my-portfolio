<template>
  <div>
    <div v-for="project in projects" :key="project.slug">
      {{ project.title }}
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
