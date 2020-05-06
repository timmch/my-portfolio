<template>
  <div>
    <div class="bg-blue-600 pt-24 pb-16">
      <div class="max-w-lg text-center m-auto">
        <div>
          <img
            class="h-56 rounded-full border-gray-100 border-4 m-auto shadow-lg"
            src="/img/Tim_Profile.jpg"
            alt="Tim Profile"
          />

          <h1 class="font-bold text-4xl">My Portfolio</h1>
          <h2>My exquisite Nuxt.js project</h2>
        </div>
      </div>
    </div>
    <div class="p-32 text-center">
      <h4 class="text-lg text-blue-500 uppercase font-black">Portfolio</h4>
      <h2 class="text-4xl">Recent Projects</h2>
      <div class="grid grid-cols-2 text-left">
        <div class="bg-red-500 p-16">
          <h5 class="font-bold text-2xl">My favorite project</h5>
          <p>Working with brilliant people!</p>
        </div>
        <div class="bg-yellow-500 p-16">
          <h5 class="font-bold text-2xl">
            The project that taught me the most
          </h5>
          <p>Where I learned more about myself than the project.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
