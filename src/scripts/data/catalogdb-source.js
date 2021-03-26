import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'

class TheCatalogDbSource {
  static async restaurantList () {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async restaurantDetail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async getDataReview (data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(data)
    })
    const responseJson = await response.json()
    return responseJson
  }
}

export default TheCatalogDbSource
