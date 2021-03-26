import FavRestaurantIdb from '../../data/favrestaurant-db'
import {
  createCatalogTemplate,
  createPageLoaderTemplate
} from '../templates/template-creator'

const Favorites = {
  async render () {
    return `
    ${(document.querySelector(
      'main'
    ).innerHTML = createPageLoaderTemplate.show())}

    <div class="container">
      <h2 class="header-features">Now Favorites Page</h2>
      <div id="favorites" class="catalogs">
      </div>
    </div>
  `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const favorites = await FavRestaurantIdb.getAllRestaurant()
    const favoritesContainer = document.querySelector('#favorites')

    if (favorites.length > 0) {
      favorites.forEach((restaurant) => {
        favoritesContainer.innerHTML += createCatalogTemplate(restaurant)
      })
    } else {
      document.querySelector(
        '#favorites'
      ).innerHTML = '  <h2 class="header-features">No Catalogs Saved here.</h2>'
    }
    createPageLoaderTemplate.remove()
  }
}

export default Favorites
