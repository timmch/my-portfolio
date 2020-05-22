<template>
  <div class="bg-indigo-600">
    <header
      class="max-w-4xl m-auto sm:flex sm:justify-between sm:items-center sm:px-4 lg:px-0 sm:py-3"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <nuxt-link :to="'/'">
            <h2
              class="text-white font-semibold rounded cursor-pointer text-2xl"
            >
              Tim McHugh
            </h2>
          </nuxt-link>
          <a
            href="mailto:timmch@gmail.com"
            class="block text-white font-semibold"
            >timmch@gmail.com</a
          >
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            @click="isOpen = !isOpen"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 sm:flex sm:p-0"
      >
        <nuxt-link
          :to="'/projects'"
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-indigo-700"
          >Projects</nuxt-link
        >
        <nuxt-link
          :to="'/about'"
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-indigo-700"
          >About</nuxt-link
        >
        <nuxt-link
          :to="'/remote'"
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-indigo-700"
          >Remote</nuxt-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
