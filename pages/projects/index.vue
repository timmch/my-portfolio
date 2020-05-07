<template>
  <div class="px-8 py-16">
    <div>
      <div
        class="border-b border-gray-400 w-auto inline-block pr-1 text-teal-500 cursor-pointer"
        @click="toggleTagFilter"
      >
        Filter by tech stack&nbsp;&nbsp;
        <fa v-show="showTags" :icon="['fas', 'caret-up']" />
        <fa v-show="!showTags" :icon="['fas', 'caret-down']" />
      </div>
      <div v-show="showTags" class="grid grid-cols-4 mt-2">
        <div
          v-for="tag in tags"
          :key="tag.slug"
          class="flex flex-col justify-center p-2 w-16 border rounded"
          :class="tag.selected ? 'shadow' : ''"
          :style="{ background: tag.selected ? tag.color : '' }"
          @click="selectTag(tag.slug)"
        >
          <fa :icon="['fab', tag.icon]" class="fa--tag h-8" />

          <h5 class="text-center">
            {{ tag.title }}
          </h5>
        </div>
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
  data() {
    return {
      showTags: false
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    tags() {
      const tagsData = [...this.$store.state.tags]
      for (let i = 0; i < tagsData.length; i++) {
        tagsData[i].selected = false
      }
      return tagsData
    }
  },
  methods: {
    selectTag(slug) {
      this.$store.commit('addSelectedTag', slug)
    },
    toggleTagFilter() {
      if (this.showTags) {
        // Clear filter
        this.$store.commit('clearSelectedTags')
      }
      this.showTags = !this.showTags
    }
  }
}
</script>

<style scoped>
.fa--tag {
  width: 100%;
}
</style>
