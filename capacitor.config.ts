import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.iframe.android',
  appName: 'vue-capacitor-iframe-android',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

if (process.env.NODE_ENV === 'development') {
  config.server = {
    url: 'http://192.168.1.4:5173',
    cleartext: true
  }
}

export default config
