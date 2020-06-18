<template>
  <div class="max-w-2xl mx-auto mt-8">
    <div class="mx-4 lg:mx-0">
      <nuxt-link
        :to="{ name: 'projects' }"
        class="text-gray-600 border rounded p-2 text-sm"
        prefetch
        ><fa icon="chevron-left" class="w-3 h-3 inline-block" /> Browse all
        projects</nuxt-link
      >
    </div>
    <div class="mx-4 lg:mx-0 rounded-lg shadow-2xl overflow-hidden mt-8 mb-2">
      <img class="w-full" :src="project.thumbnail" alt="" />
    </div>
    <div class="mx-4 lg:px-0 lg:mx-auto lg:max-w-2xl mt-4 lg:mt-8">
      <h1
        class="text-4xl leading-tight font-hairline font-sans text-indigo-600"
      >
        {{ project.title }}
      </h1>
      <div>
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="text-gray-700 italics inline-block pr-2"
          >#{{ tag.slug }}</span
        >
      </div>
      <div
        class="mt-1 mb-8 markdown-container text-lg"
        v-html="$md.render(project.body)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { project: payload }
    else
      return {
        project: await require(`~/assets/content/project/${params.project}.json`)
      }
  },
  data() {
    return {
      tags: []
    }
  },
  created() {
    if (this.project && this.project.tags && this.project.tags.length >= 1) {
      const allTags = this.$store.state.tags
      for (let i = 0; i < this.project.tags.length; i++) {
        const tagForThisProject = this.project.tags[i]
        for (let j = 0; j < allTags.length; j++) {
          const tagToCompare = allTags[j]
          if (tagToCompare.slug === tagForThisProject) {
            this.tags.push(tagToCompare)
          }
        }
      }
    }
  }
}
</script>

<style>
.fa--tag {
  width: 100%;
}
</style>
