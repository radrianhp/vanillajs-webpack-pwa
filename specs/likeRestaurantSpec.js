import FavoriteRestaurantIdb from '../src/scripts/data/favrestaurant-db'
import * as TestFactories from './helpers/testFactories'

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
// Widget untuk menyukai catalog restaurant ditampilkan
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer()
  })

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this catalog"]'))
      .toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this catalog"]'))
      .toBeFalsy()
  })

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

    // eslint-disable-next-line no-undef
    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  // Ternyata film sudah disukai
  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 })

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    // tidak ada film yang ganda
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }])

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  // Data film memiliki id (sistem tidak memproses penyimpanan dan sistem tidak gagal)
  // eslint-disable-next-line no-undef
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})
