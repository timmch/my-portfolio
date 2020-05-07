<template>
  <div class="px-8 py-16">
    <div class="flex">
      <div
        v-for="tag in tags"
        :key="tag.slug"
        class="flex flex-col justify-center p-2 w-auto"
        :style="{ background: tag.color }"
      >
        <fa :icon="['fab', tag.icon]" class="fa--tag h-8" />

        <h5 class="text-center">
          {{ tag.title }}
        </h5>
      </div>
    </div>
    <div class="mt-6">
      <div v-for="project in projects" :key="project.slug">
        <nuxt-link
          :to="{ name: 'projects-project', params: { project: project.slug } }"
          prefetch
        >
          <div class=" border-gray-300 border-1 rounded shadow">
            <img :src="project.thumbnail" alt="" />
            <div class="p-4">
              <h2 class="text-xl">{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    },
    tags() {
      return this.$store.state.tags
    }
  }
}
</script>

<style scoped>
.fa--tag {
  width: 100%;
}
</style>
