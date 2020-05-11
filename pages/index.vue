<template>
  <div>
    <div
      class="flex flex-col px-6 py-2 items-start h-64 justify-end my-4 mx-4 sm:mx-auto  max-w-lg border border-gray-300 rounded shadow-lg overflow-y-scroll sm:w-full"
    >
      <div class="text-center w-full">
        <h5><strong>Today</strong> 11:38 AM</h5>
      </div>

      <text-message
        v-show="showFirstText"
        text-content="Hi 👋<br />I'm Tim McHugh."
        delay-time="1000"
      />

      <text-message
        v-if="showSecondText"
        text-content="Welcome to my website, I'm glad you are here!"
        delay-time="1250"
      />

      <text-message
        v-if="showThirdText"
        text-content="Take a look around to learn more about me and my work."
        delay-time="1500"
      />

      <div v-for="(gif, index) in gifs" :key="index">
        <img v-if="gifCount > index" :src="gif" class="w-7/12 mt-1 rounded" />
      </div>

      <div
        v-show="showTextOptions"
        class="flex flex-wrap justify-end mt-2 w-full"
      >
        <a
          href="#projects"
          class="border border-gray-800 rounded-full px-4 py-1 mt-1 shadow cursor-pointer"
        >
          Jump to projects
        </a>
        <a
          v-show="gifCount < 3"
          class="border border-gray-800 rounded-full px-4 py-1 mt-1 ml-1 shadow cursor-pointer"
          @click="requestGif"
        >
          Request a gif
        </a>
      </div>

      <!-- Loader -->
      <!-- Take a look around to learn more about me and my work -->
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
import TextMessage from '@/components/TextMessage.vue'

export default {
  components: {
    TextMessage
  },
  data() {
    return {
      showFirstText: false,
      showSecondText: false,
      showThirdText: false,

      gifCount: 0,

      showTextOptions: false,
      gifs: ['/img/Pirates.webp', '/img/Dumb.gif', '/img/Shia.gif']
    }
  },
  mounted() {
    setTimeout(() => {
      this.showFirstText = true
    }, 250)

    // +2000
    setTimeout(() => {
      this.showSecondText = true
    }, 2250)

    // +2500
    setTimeout(() => {
      this.showThirdText = true
    }, 5000)

    // +500
    setTimeout(() => {
      this.showTextOptions = true
    }, 7000)
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
