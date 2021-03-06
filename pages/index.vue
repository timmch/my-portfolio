<template>
  <div>
    <div
      class="lg:flex items-center bg-white max-w-4xl lg:mx-auto lg:my-16 lg:border lg:border-gray-400 lg:shadow-2xl lg:rounded-lg overflow-hidden"
    >
      <img class="m-auto profile-image" src="/img/TimMcHugh_Full.jpg" alt="" />
      <div class="px-4 pt-0 lg:p-0 relative lg:w-5/12 messages-app">
        <div
          class="flex flex-col items-start w-full px-6 py-4 sm:mx-auto border border-gray-400 rounded shadow-2xl bg-white lg:border-0 lg:shadow-none"
        >
          <div class="text-center w-full mb-2">
            <h5 class="text-gray-600">
              <strong class="font-semibold">Messages</strong> from Tim
            </h5>
          </div>

          <text-message
            v-show="showFirstText"
            text-content="Hi there! 👋<br />Come on in and look around to learn about me and my work."
            :delay-time="1500"
          />
        </div>
      </div>
    </div>

    <div class="bg-indigo-600 text-white px-8 pt-16 pb-20">
      <div class="max-w-4xl m-auto">
        <p class="font-serif mt-4 text-3xl">
          I’m a Full Stack Developer fueled by helping others, exploring
          possibilities, and working remotely.
        </p>
        <p class="font-serif mt-4 text-xl">
          Creating unconventional solutions is what gets me out of bed each
          morning -- solutions that help users make progress in their lives.
        </p>
        <p class="font-serif mt-4 text-xl">
          I am currently building Vue.js apps for Simon Sinek and looking for a
          new challenge. Slide into my DMs at
          <a class="underline text-teal-300" href="mailto:timmch@gmail.com"
            >timmch@gmail.com</a
          >.
        </p>
        <!-- <nuxt-link
          to="/about"
          class="underline mt-4 block text-xl text-teal-300"
        >
          Get to know me better
        </nuxt-link> -->
      </div>
    </div>

    <div id="projects" class="py-16 px-8 md:py-24 text-center md:text-left">
      <div class="max-w-4xl m-auto">
        <h4 class="text-lg text-indigo-500 uppercase font-black leading-tight">
          Portfolio
        </h4>
        <h2 class="text-4xl leading-tight">Featured Projects</h2>

        <div class="grid md:grid-cols-2 text-left mt-6 md:mt-8 md:col-gap-4">
          <featured-project
            :project-icon="['fas', 'bullhorn']"
            project-superlative="Johnny Seeds Harvest Tracker"
            project-description="This simple app helps me and other gardeners know when to expect ripe fruits and vegetables."
            project-slug="/projects/johnnyseeds-web-crawler"
          />
          <featured-project
            :project-icon="['fas', 'globe-americas']"
            project-superlative="Live Online Classes"
            project-description="For this project I built the interface for users to find the right class for them."
            project-slug="/projects/johnnyseeds-web-crawler"
          />
        </div>
        <div class="mt-6 md:mt-8">
          <nuxt-link
            to="/projects"
            class="text-teal-500 text-xl border-2 border-teal-500 py-3 px-12 w-full inline-block md:w-auto rounded hover:bg-teal-500 hover:text-white active:bg-teal-800 shadow-lg"
          >
            Browse all projects
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TextMessage from '@/components/TextMessage.vue'
import FeaturedProject from '@/components/FeaturedProject.vue'

export default {
  components: {
    TextMessage,
    FeaturedProject
  },
  data() {
    return {
      showFirstText: true,
      showSecondText: false,
      showThirdText: false
    }
  },
  computed: {
    prettyLoadTime() {
      const loadTime = this.$store.state.initialLoadTime
      return moment(loadTime).calendar()
    }
  },
  beforeCreate() {
    this.$store.dispatch('setInitialLoadTimeIfNull')
  },
  mounted() {
    setTimeout(() => {
      this.showSecondText = true
    }, 2000)

    setTimeout(() => {
      this.showThirdText = true
    }, 4000)
  },
  methods: {
    requestGif() {
      this.gifCount++
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
.messages-app {
  top: -40px;
  min-height: 185px;
  @screen lg {
    top: 0px;
    left: 0px;
    height: 22rem;
  }
}
.profile-image {
  @screen lg {
    height: 22rem;
  }
}
</style>
