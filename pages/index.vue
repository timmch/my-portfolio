<template>
  <div>
    <div class="bg-gray-200" style="min-height: 550px;">
      <img class="m-auto" src="/img/TimMcHugh_Full.jpg" alt="" />
      <div class="px-4 pt-0 relative" style="margin-top: -8px; top: -40px;">
        <div
          class="flex flex-col px-6 py-4 items-start sm:mx-auto  max-w-lg border border-gray-300 rounded shadow-2xl overflow-y-scroll sm:w-full bg-white"
        >
          <div class="text-center w-full mb-2">
            <h5>{{ prettyLoadTime }}</h5>
          </div>

          <text-message
            v-show="showFirstText"
            text-content="Hi 👋<br />I'm Tim McHugh."
            :delay-time="1000"
          />

          <text-message
            v-if="showSecondText"
            text-content="Welcome to my website, I'm glad you are here!"
            :delay-time="1500"
          />

          <text-message
            v-if="showThirdText"
            text-content="Take a look around to learn more about me and my work."
            :delay-time="1750"
          />
        </div>
      </div>
    </div>

    <div id="projects" class="py-16 px-4 md:p-32 text-center">
      <h4 class="text-lg text-blue-500 uppercase font-black leading-tight">
        Portfolio
      </h4>
      <h2 class="text-4xl leading-tight">Recent Projects</h2>
      <div class="grid md:grid-cols-2 text-left mt-6">
        <div class="bg-red-500 py-8 px-12 md:p-16">
          <h5 class="font-bold text-2xl leading-tight">My favorite project</h5>
          <p class="mt-2">Working with brilliant people!</p>
        </div>
        <div class="bg-teal-500 py-8 px-12 md:p-16">
          <h5 class="font-bold text-2xl leading-tight">
            The project that taught me the most
          </h5>
          <p class="mt-2">
            Where I learned more about myself than the project.
          </p>
        </div>
      </div>
      <div class="mt-8">
        <nuxt-link to="/projects" class="underline text-blue-500">
          See all projects
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TextMessage from '@/components/TextMessage.vue'

export default {
  components: {
    TextMessage
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
    }, 1750)

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

<style></style>
