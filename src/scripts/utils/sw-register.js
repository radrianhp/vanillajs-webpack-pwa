// import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import { Workbox } from 'workbox-window'

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // await runtime.register()
    // return
    const workbox = new Workbox('../sw.js')
    workbox.register()
  }
  // console.log('Service worker not supported in this browser')
}

export default swRegister
