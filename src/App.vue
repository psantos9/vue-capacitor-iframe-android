<template>
  <div class="h-screen flex items-center justify-center bg-gray-500">
    <iframe class="w-[500px] h-[500px] bg-white" :src="src" />
  </div>
</template>

<script lang="ts" setup>
const blob = new Blob(
  [
    '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 2rem;">IFRAME CONTENT SHOWN</div>'
  ],
  { type: 'text/html' }
)
const src = URL.createObjectURL(blob)
</script>
