import TheCatalogDbSource from '../../data/catalogdb-source'
import {
  createCatalogTemplate,
  createPageLoaderTemplate,
  createSkeletonCatalogTemplate
} from '../templates/template-creator'

const Home = {
  async render () {
    return `
    ${(document.querySelector(
      'main'
    ).innerHTML = createPageLoaderTemplate.show())}
    
      <hero-bar></hero-bar>
        <div class="container">
          <item-featured></item-featured>
          <h1 class="header-features">List Catalog</h1>
          <div id="catalogs" class="catalogs">
            ${createSkeletonCatalogTemplate(20)}
          </div>
        </div>  
    `
  },

  async afterRender () {
    const restaurants = await TheCatalogDbSource.restaurantList()
    const catalogContainer = document.querySelector('#catalogs')
    catalogContainer.innerHTML = ''
    restaurants.forEach((restaurant) => {
      catalogContainer.innerHTML += createCatalogTemplate(restaurant)
    })
    createPageLoaderTemplate.remove()
  }
}

export default Home
