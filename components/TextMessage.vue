<template>
  <div class="w-full">
    <typing-indicator v-show="!showMessage" />
    <div
      v-show="showMessage"
      class="bg-indigo-500 text-white font-sans font-light p-2 w-56 text-message mt-2 md:w-7/12 shadow rounded-lg"
    >
      <div v-html="textContent"></div>
    </div>
  </div>
</template>

<script>
import TypingIndicator from '@/components/TypingIndicator.vue'

export default {
  components: {
    TypingIndicator
  },
  props: {
    textContent: {
      type: String,
      default: ''
    },
    delayTime: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      showMessage: false
    }
  },
  created() {
    setTimeout(() => {
      this.showMessage = true
    }, this.delayTime)
  }
}
</script>

<style scoped>
.text-message {
  position: relative;
}

.text-message:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: #6781e7;
  border-left: 0;
  border-bottom: 0;
  margin-top: -5px;
  margin-left: -10px;
}
</style>
