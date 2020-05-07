<template>
  <div class=" max-w-lg mx-auto mt-16">
    <div>
      <a class="text-gray-600 border-2 rounded p-2 text-sm" href="#">
        <fa icon="chevron-left" /> See all projects
      </a>
    </div>
    <h1 class=" text-2xl font-bold mt-6">{{ project.title }}</h1>
    <img class="mt-4 rounded-md shadow-lg" :src="project.thumbnail" alt="" />
    <div class="mt-1">
      <span
        v-for="tag in project.tags"
        :key="tag"
        style="background: #ffdf5c"
        class=" px-2 py-1 inline-block"
      >
        <fa :icon="['fab', 'python']" />
        {{ tag }}
      </span>
    </div>
    <div
      class="mt-3 mb-8 markdown-container"
      v-html="$md.render(project.body)"
    ></div>
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
  }
}
</script>

<style></style>
