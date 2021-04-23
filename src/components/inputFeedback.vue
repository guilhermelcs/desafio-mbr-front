<template>
    <div v-if="!customFeedback" class="invalid-feedback d-block">
      Ops, preencha este campo direito!
    </div>
    <div v-else class="invalid-feedback d-block">
      {{ customFeedback }}
    </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    customFeedback: {
      type: String,
      required: false
    }
  })

</script>

<style scoped>

</style>