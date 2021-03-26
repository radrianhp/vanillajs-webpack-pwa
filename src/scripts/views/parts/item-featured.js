
class ItemFeatured extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = ` 
              <h1 class="header-features">Fitur Yang tersedia</h1>
              <p>
                  Beberapa fitur yang bisa kami sediakan.
              </p>
              <div class="features">
                  <div class="card">
                    <figure class="img-wrapper">
                        <img src="./images/hero-image_1-large.jpg"
                            srcset="./images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w"
                            sizes="(max-width: 600px) 480px, 800px"
                            class="img-cover lazyload" 
                            alt="berbagi nasi" 
                            crossorigin="anonymous"/>
                        <figcaption>
                          Pelayanan yang kami berikan 100% orang yang sudah berpengalaman.
                        </figcaption>
                    </figure>
                  </div>
                  <div class="card">
                    <figure class="img-wrapper">
                        <img src="./images/hero-image_3-large.jpg"
                            srcset="./images/hero-image_3-small.jpg 480w, ./images/hero-image_3-large.jpg 800w"
                            sizes="(max-width: 600px) 480px, 800px"
                            class="img-cover lazyload" alt="berbagi nasi" 
                            crossorigin="anonymous"/>
                        <figcaption>
                          Kami selalu siap sedia. 24 jam
                      </figcaption>
                    </figure>
                  </div>
                  <div class="card">
                    <figure class="img-wrapper">
                        <img src="./images/hero-image_4-large.jpg"
                            srcset="./images/hero-image_4-small.jpg 480w, ./images/hero-image_4-large.jpg 800w"
                            sizes="(max-width: 600px) 480px, 800px"
                            class="img-cover lazyload" 
                            alt="berbagi nasi" 
                            crossorigin="anonymous"/>
                        <figcaption>
                        Kualitas makanan yang kami berikan terjaga dan kekinian
                      </figcaption>
                    </figure>
                  </div>
              </div>
        `
  }
}

customElements.define('item-featured', ItemFeatured)
