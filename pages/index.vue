<template>
  <div>
    <div class="bg-gray-200 lg:flex items-center lg:bg-white">
      <img class="m-auto lg:w-7/12" src="/img/TimMcHugh_Full.jpg" alt="" />
      <div class="px-4 pt-0 relative lg:w-5/12 messages-app">
        <div
          class="flex flex-col items-start w-full px-6 py-4 sm:mx-auto border border-gray-400 rounded shadow-2xl bg-white"
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

    <div class="bg-indigo-600 text-white px-8 py-12">
      <h3 class="text-4xl">About</h3>
      <p class="font-serif mt-6 text-xl">
        My passion for technology can be traced back to my pre-professional
        days. Whether I was booting obscure linux distros or building black jack
        games in the terminal, I’ve been on a technology path from the start.
        The reason? I like
        <span class="bg-yellow-400 text-gray-700"
          >exploring the possibilities</span
        >
        offered by technology to create progress away from the keyboard.
      </p>
      <p class="font-serif mt-3 text-xl">
        Outside of the “office”, I’m committed to family and fitness. I love to
        cook, and I am always looking to try a new dish that can bring a smile
        to someone’s face. I’m currently trying my hand at gardening, like most
        things I do its developed into a big project (If all turns out well,
        I’ll be needing to get rid of 100 watermelons).
      </p>
      <nuxt-link to="/about" class="underline mt-4 block text-xl text-teal-100">
        Read more
      </nuxt-link>
    </div>

    <div id="projects" class="py-16 px-8 md:p-32 text-center">
      <h4 class="text-lg text-indigo-500 uppercase font-black leading-tight">
        Portfolio
      </h4>
      <h2 class="text-4xl leading-tight">Featured Projects</h2>
      <div class="grid md:grid-cols-2 text-left mt-10">
        <div
          class="pt-0 pb-8 px-8 md:p-16 rounded-lg border-indigo-400 border-2 shadow-lg"
        >
          <div class="text-center h-0">
            <fa
              class="h-12 w-12 p-2 fill-current text-white bg-indigo-500 rounded-full relative"
              :icon="['fas', 'bullhorn']"
              style="width: 3rem !important; top: -1.5rem;"
            />
          </div>
          <h5 class="font-bold text-2xl leading-tight mt-8">
            The project I share the most
          </h5>
          <p class="mt-2 text-xl">
            I tell all my friends about my
            <nuxt-link
              to="/projects/johnnyseeds-web-crawler"
              class="underline text-teal-400"
              >JohnnySeeds Harvest Tracker</nuxt-link
            >
          </p>
        </div>
        <div
          class="pt-0 pb-8 px-8 md:p-16 rounded-lg border-indigo-400 border-2 shadow-lg mt-8"
        >
          <div class="text-center h-0">
            <fa
              class="h-12 w-12 p-2 fill-current text-white bg-indigo-500 rounded-full relative"
              :icon="['fas', 'globe-americas']"
              style="width: 3rem !important; top: -1.5rem;"
            />
          </div>
          <h5 class="font-bold text-2xl leading-tight mt-8">
            A project built across cultures
          </h5>
          <p class="mt-2 text-xl">
            For the
            <nuxt-link to="/projects" class="underline text-teal-400"
              >Virtual Classes</nuxt-link
            >
            project I collaborated with a core team in four timezones, across
            three countries.
          </p>
        </div>
      </div>
      <div class="mt-6">
        <nuxt-link to="/projects" class="underline text-teal-400 text-xl">
          Browse all projects
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

<style>
.messages-app {
  top: -40px;
  min-height: 310px;
  @screen lg {
    top: 0px;
    left: -80px;
  }
}
</style>
