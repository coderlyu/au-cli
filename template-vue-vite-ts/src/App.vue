<template>
  <div class="root">
    <img src="../public/favicon.ico" alt="">
    <h1>{{ message }}</h1>
    <router-link to="/home" >to home</router-link>
    <router-link to="/about" >to about</router-link>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const message = ref('vue-vite-ts template')
    return {
      message
    }
  },
})
</script>
<style>
.root {
  display: flex;
  padding-top: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  align-self: center;
  width: 120px;
}
h1 {
  text-align: center;
}
</style>