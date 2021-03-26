import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../src/scripts/data/favrestaurant-db'

const createLikeButtonPresenterWithMovie = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createLikeButtonPresenterWithMovie }
