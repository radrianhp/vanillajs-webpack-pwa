import RestaurantDbSource from '../data/catalogdb-source'

const CreateReviewInitiator = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review
  }
  RestaurantDbSource.getDataReview(dataInput)
}
export default CreateReviewInitiator
