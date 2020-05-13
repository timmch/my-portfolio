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
            <client-only>
              <h5>{{ prettyLoadTime }}</h5>
            </client-only>
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

    <div class="bg-indigo-600 text-white px-8 pt-16 pb-20">
      <div class="max-w-4xl m-auto">
        <h3 class="text-4xl">About</h3>
        <p class="font-serif mt-6 text-xl">
          My passion for technology can be traced back to my pre-professional
          days. Whether I was booting obscure linux distros or building black
          jack games in the terminal, I’ve been on a technology path from the
          start. The reason? I like
          <highlighted-text selected-text="exploring the possibilities" />
          offered by technology to create progress away from the keyboard.
        </p>
        <p class="font-serif mt-3 text-xl">
          Outside of the “office”, I’m committed to family and fitness. I love
          to cook, and I am always looking to try a new dish that can bring a
          smile to someone’s face. I’m currently trying my hand at gardening,
          like most things I do its developed into a big project (If all turns
          out well, I’ll be needing to get rid of 100 watermelons).
        </p>
        <nuxt-link
          to="/about"
          class="underline mt-4 block text-xl text-teal-100"
        >
          Read more
        </nuxt-link>
      </div>
    </div>

    <div id="projects" class="py-16 px-8 md:py-24 text-center md:text-left">
      <div class="max-w-4xl m-auto">
        <h4 class="text-lg text-indigo-500 uppercase font-black leading-tight">
          Portfolio
        </h4>
        <h2 class="text-4xl leading-tight">Featured Projects</h2>

        <div class="grid md:grid-cols-2 text-left mt-6 md:mt-8">
          <featured-project
            :project-icon="['fas', 'bullhorn']"
            project-superlative="The project I share the&nbsp;most"
            project-description="I tell all my friends about my Johnny Seeds Harvest Tracker."
            project-slug="/projects/johnnyseeds-web-crawler"
          />
          <featured-project
            :project-icon="['fas', 'globe-americas']"
            project-superlative="A project built across&nbsp;cultures"
            project-description="For the Virtual Classes project I collaborated with a core team in four timezones, across
              three countries."
            project-slug="/projects/johnnyseeds-web-crawler"
          />
        </div>
        <div class="mt-6 md:mt-12">
          <nuxt-link
            to="/projects"
            class="text-teal-500 text-xl border-2 border-teal-500 py-3 px-12 w-full md:w-auto rounded hover:bg-teal-500 hover:text-white active:bg-teal-800 shadow-lg"
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
import HighlightedText from '@/components/HighlightedText.vue'
import FeaturedProject from '@/components/FeaturedProject.vue'

export default {
  components: {
    TextMessage,
    HighlightedText,
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

<style>
.messages-app {
  top: -40px;
  min-height: 310px;
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
