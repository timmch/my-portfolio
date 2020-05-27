<template>
  <div class="px-8 py-16 lg:mx-auto lg:px-0 max-w-4xl">
    <h1 class="text-4xl">Projects</h1>
    <div>
      <h5 class="text-gray-600 text-lg">
        Filter by a language or framework
      </h5>
      <div class="flex mt-1 text-gray-600">
        <div
          v-for="tag in tags"
          :key="tag.slug"
          class="flex flex-col justify-center p-4 w-auto border rounded mr-2 cursor-pointer sortable-tag"
          :class="selectedTag === tag.slug ? 'shadow text-gray-900' : ''"
          :style="{
            background: selectedTag === tag.slug ? tag.color : ''
          }"
          @click="toggleTag(tag.slug)"
        >
          <fa :icon="['fab', tag.icon]" class="fa--tag h-8" />

          <h5 class="text-center mt-1">
            {{ tag.title }} <span>({{ tag.count }})</span>
          </h5>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <div v-for="project in projects" :key="project.slug">
        <div class="border-b border-indigo-400">
          <div
            class="lg:grid items-center py-4 lg:py-6"
            style="grid-template-columns: auto 200px"
          >
            <div class="lg:pr-10">
              <nuxt-link
                :to="{
                  name: 'projects-project',
                  params: { project: project.slug }
                }"
              >
                <h2 class="text-2xl text-indigo-600 mb-1">
                  {{ project.title }}
                </h2>
              </nuxt-link>
              <p class="mb-1">{{ project.description }}</p>
              <div>
                <span
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="text-gray-600 italics inline-block pr-2"
                  >#{{ tag }}</span
                >
              </div>
            </div>
            <nuxt-link
              class="block py-2 border border-teal-500 text-white rounded bg-teal-500 hover:bg-white hover:text-teal-500 text-center mt-4 mb-2 lg:my-0 self-center shadow"
              :to="{
                name: 'projects-project',
                params: { project: project.slug }
              }"
              prefetch
              >Learn more</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function compareCount(a, b) {
  if (a.count > b.count) {
    return -1
  }
  if (a.count < b.count) {
    return 1
  }
  // a must be equal to b
  return 0
}

export default {
  data() {
    return {
      showTags: false
    }
  },
  computed: {
    projects() {
      if (!this.selectedTag) return this.$store.state.projects
      const result = this.$store.state.projects.filter((project) =>
        project.tags.includes(this.selectedTag)
      )

      return result
    },
    selectedTag() {
      return this.$store.state.selectedTag
    },
    tags() {
      const tagsData = [...this.$store.state.tags]
      const essentialTags = []
      for (let i = 0; i < tagsData.length; i++) {
        essentialTags[i] = {}
        essentialTags[i].slug = tagsData[i].slug
        essentialTags[i].icon = tagsData[i].icon
        essentialTags[i].title = tagsData[i].title
        essentialTags[i].color = tagsData[i].color
        essentialTags[i].selected = false
        essentialTags[i].count = 0
        for (let j = 0; j < this.$store.state.projects.length; j++) {
          if (this.$store.state.projects[j].tags.includes(tagsData[i].slug)) {
            essentialTags[i].count++
          }
        }
      }
      return essentialTags.sort(compareCount)
    }
  },
  methods: {
    toggleTag(slug) {
      this.$store.commit('toggleTag', slug)
    }
  }
}
</script>

<style scoped>
.fa--tag {
  width: 100%;
}
.bullet-icon {
  width: 1rem !important;
  @screen lg {
    width: 2rem !important;
  }
}
.sortable-tag {
  min-width: 5rem;
}
</style>
