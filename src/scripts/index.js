import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'

// lazyloading
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// parts
import './views/parts/hero-bar'
import './views/parts/item-featured'
import './views/parts/header-bar'

import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  // scrolling header
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
