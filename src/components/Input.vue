<template>
  <div class="mt-3" :class="`col-${col}`">
    <label class="form-label" :for="id">{{ label }}</label>
    <input :isValid="isValid" @keyup="showError = !isValid" class="w-100 form-control" :placeholder="label" :id="id" :name="name" :value="modelValue" @input="(event) => $emit('update:modelValue', event.target.value)" :type="type">
    <inputFeedback :customFeedback="customFeedback" v-if="showError" />
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'
  import inputFeedback from './inputFeedback.vue'

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "text"
    },
    col: {
      type: [Number, String],
      required: true,
      default: "12"
    },
    label: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true,
    },
    customFeedback: {
      type: String,
      required: false
    }, 
    name: String,
    modelValue: String,
  })

  const showError = ref(false)
</script>

<style scoped>
  label {
    display: block;
  }
</style>
