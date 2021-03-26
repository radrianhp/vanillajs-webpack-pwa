import FavRestaurantIdb from '../data/favrestaurant-db'
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate
} from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isCatalogExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isCatalogExist (id) {
    const catalog = await FavRestaurantIdb.getRestaurant(id)
    return !!catalog
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
