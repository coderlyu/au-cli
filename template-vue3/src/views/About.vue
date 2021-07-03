<template>
  <div>
    {{ msg }}
    <p>about us: ******</p>
    <span class="test">测试样式</span>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { getStore } from '@/store'
export default defineComponent({
  name: 'About',
  setup() {
    const { store } = getStore()
    const msg =  computed(() => store.getters.message)
    return {
      msg
    }
  }
})
</script>