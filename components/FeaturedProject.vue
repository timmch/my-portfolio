<template>
  <div
    class="mt-8 pt-0 pb-8 px-8 md:px-12 mr-2 rounded-lg border-indigo-400 border-2 shadow-lg"
  >
    <div class="h-0">
      <fa
        class="h-12 w-12 p-2 fill-current text-white bg-indigo-500 rounded-full relative md:h-16 md:p-4 project-icon"
        :icon="projectIcon"
      />
    </div>
    <h5
      class="font-bold text-3xl leading-tight mt-8 md:mt-10"
      v-html="projectSuperlative"
    ></h5>
    <p class="mt-2 text-xl font-serif">
      {{ projectDescription }}
    </p>
    <nuxt-link
      to="/projects/johnnyseeds-web-crawler"
      class="underline text-teal-500 font-sans text-xl block mt-2"
      >Learn more</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    projectIcon: {
      type: Array,
      default() {
        return ['fas', 'star']
      }
    },
    projectSuperlative: {
      type: String,
      default: '',
      required: true
    },
    projectDescription: {
      type: String,
      default: '',
      required: true
    },
    projectSlug: {
      type: String,
      deafult: '',
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.project-icon {
  width: 3rem !important;
  top: -1.5rem;
  @screen lg {
    width: 4rem !important;
    top: -2rem;
  }
}
</style>
