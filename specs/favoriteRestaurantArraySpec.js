/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteRestaurants = []

const FavoriteMovieArray = {

  getRestaurant (id) {
    if (!id) {
      return
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurant () {
    return favoriteRestaurants
  },

  putRestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return
    }

    favoriteRestaurants.push(restaurant)
  },

  deleteRestaurant (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id)
  }

}

// eslint-disable-next-line no-undef
describe('Favorite restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-undef
  afterEach(() => favoriteRestaurants = [])

  itActsAsFavoriteRestaurantModel(FavoriteMovieArray)
})
