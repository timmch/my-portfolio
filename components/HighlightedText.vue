<template>
  <span class="bg-yellow-400 text-gray-800">{{ selectedText }}</span>
</template>

<script>
export default {
  props: {
    selectedText: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>
