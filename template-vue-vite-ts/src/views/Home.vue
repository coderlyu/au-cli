<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { getStore } from '../store/index'

export default defineComponent({
  name: 'Home',
  setup() {
    const { store } = getStore()
    const message = computed(() => store.getters.message)
    return {
      message
    }
  }
})
</script>
