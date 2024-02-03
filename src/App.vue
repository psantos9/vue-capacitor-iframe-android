<template>
  <div
    style="
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: black;
      gap: 1rem;
    "
  >
    <iframe style="width: 100px; height: 100px; background: white" :src="src" />
    <iframe style="width: 100px; height: 100px; background: white" :src="src2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const blob = new Blob(['<span>hello world</span>'], { type: 'text/html' })
const src = URL.createObjectURL(blob)
const src2 = ref<string>('')
;(async () => {
  src2.value = `data:text/html;base64,${btoa(await blob.text())}`
})()
</script>
