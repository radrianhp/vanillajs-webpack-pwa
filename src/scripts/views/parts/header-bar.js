class HeaderBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = ` 
    <div class="app-bar">
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="hamburger button">☰</button>
      </div>
      <div class="app-bar__brand">
        <h1>Berbagi <span>Nasi.</span></h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li class="nav-item">
            <a href="#/home" aria-label="home"> Home </a>
          </li>
          <li class="nav-item" aria-label="favorite">
            <a href="#/favorites"> Favorite </a>
          </li>
          <li class="nav-item">
            <a href="#/about-us" aria-label="about us"> About Us </a>
          </li>
        </ul>
      </nav>
    </div>
    `
  }
}

customElements.define('header-bar', HeaderBar)
