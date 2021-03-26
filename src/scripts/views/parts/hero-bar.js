class Hero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = ` 
            <div class="hero-section img-cover">
              <div class="hero-text">
                <h1> Share your Love,</br>
                for Carring Everyone
                </h1>
                <p>Hallo Foodies Selamat Datang di Aplikasi Berbagi Nasi.
                  Aplikasi ini bertujuan untuk memberikan informasi makanan di berbagai tempat sudah disediakan oleh Donatur. 
                  Agar Para pengguna bisa mengetahui tempat mana saja yang bisa memberikan makanan secara gratis.
                </p>
              </div>
            </div>
      `
  }
}

customElements.define('hero-bar', Hero)
