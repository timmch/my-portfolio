<template>
  <div>
    <Navbar />
    <nuxt />
    <footer
      class="text-center mt-2 py-6 flex justify-center items-center flex-col border-gray-300 border-t-2"
    >
      <h5 class="text-md text-gray-700">
        Built with Vue.js, Nuxt.js, and Netlify
        <br />
        <nuxt-link
          :to="'/projects/my-portfolio'"
          class="underline text-teal-500"
        >
          Read about this Project
        </nuxt-link>
      </h5>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped></style>
