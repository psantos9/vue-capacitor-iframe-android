<template>
  <div class="h-screen flex items-center space-x-2 justify-center bg-gray-500">
    <iframe class="w-[250px] h-[250px] bg-white" :src="src" />
    <iframe v-if="src2 !== null" class="w-[250px] h-[250px] bg-white" :src="src2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const blob = new Blob(
  [
    '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 1.5rem;">IFRAME CONTENT SHOWN</div>'
  ],
  { type: 'text/html' }
)
const src = URL.createObjectURL(blob)
const src2 = ref<string | null>(null)
;(async () => {
  src2.value = `data:text/html;base64,${btoa(await blob.text())}`
})()
</script>
