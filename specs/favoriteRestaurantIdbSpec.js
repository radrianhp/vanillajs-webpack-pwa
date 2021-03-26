import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurantIdb from '../src/scripts/data/favrestaurant-db'

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb)
})
