import FavoriteRestaurantIdb from '../src/scripts/data/favrestaurant-db'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  })

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this catalog"]'))
      .toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this catalog"]'))
      .toBeFalsy()
  })

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    document.querySelector('[aria-label="unlike this catalog"]').dispatchEvent(new Event('click'))

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })

  // eslint-disable-next-line no-undef
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1)

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this catalog"]').dispatchEvent(new Event('click'))

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})
