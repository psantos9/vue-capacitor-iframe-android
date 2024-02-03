# vue-capacitor-iframe-android

Example project that reproduces [github issue 6377](https://github.com/ionic-team/capacitor/issues/6377)

## Issue description

This project has two iframes set side by side: the leftmost iframe's src is set as a URL.createObjectURL from a blob, the righmost iframe src is set as a base64 encoded string with the contents of that same blob.
####Issue: The leftmost frame is not rendered in Android but renders in Web (browser).

```
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


```

In Android, setting the iframe src with a URL.createObjectURL will result on an empty iframe as follows:
![Empty android iframe](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/empty-android-iframe.png)

![Android behavior](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/android-behavior.png)

The same code on a browser will render the Iframe as expected:

![Web iframe](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/web-iframe.png)

![Web behavior](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/web-behavior.png)


###Expected behavior:
Leftmost iframe renders in Android and Web.