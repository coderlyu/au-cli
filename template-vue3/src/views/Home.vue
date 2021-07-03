<template>
  <div>{{ message }}</div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const message = ref('this is home page')
    return {
      message
    }
  }
})
</script>