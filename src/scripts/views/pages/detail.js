import UrlParser from '../../routes/url-parser'
import TheCatalogDbSource from '../../data/catalogdb-source'
import { createCatalogDetailTemplate } from '../templates/template-creator'
import '../parts/review-content'
import ReviewInitiator from '../../utils/review-iniator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/favrestaurant-db'

const Detail = {
  async render () {
    return `
    <div id="restaurant"></div>
    <input-review></input-review>
    <div id="likeButtonContainer"></div>
  `
  },
  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await TheCatalogDbSource.restaurantDetail(url.id)
    const detailContainer = document.querySelector('#restaurant')
    detailContainer.innerHTML = createCatalogDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating
      }
    })

    const btnSubmit = document.querySelector('#submit-review')
    const nameInput = document.querySelector('#inputName')
    const reviewInput = document.querySelector('#inputReview')

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault()
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Mohon diisi terlebih dahulu')
        nameInput.value = ''
        reviewInput.value = ''
      } else {
        ReviewInitiator(url, nameInput.value, reviewInput.value)
        nameInput.value = ''
        reviewInput.value = ''
      }
    })
  }
}

export default Detail
