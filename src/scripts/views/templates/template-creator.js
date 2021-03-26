import CONFIG from '../../globals/config'

const createCatalogTemplate = (restaurant) =>
  `      
  <div class="card">
    <div class="header">
    ${restaurant.city}
    </div>
    <figure class="img-wrapper">
      <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
            restaurant.name}" 
            class="img-cover lazyload" crossorigin="anonymous">
        <figcaption>
          ⭐️
            <span class="rating">
            ${restaurant.rating}
            </span>
        </figcaption>
        <div class="catalog-item">
            <h2 class="card__title"><a href="${`/#/detail/${restaurant.id}`}" aria-label="detail item">${
                  restaurant.name
                }</a>
            </h2>
            <p>${restaurant.description}</p>
        </div>

    </figure>

  </div>
  `
const createSkeletonCatalogTemplate = (count) => {
  let template = ''

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card">
      <div class="skeleton">
      </div>
      <figure class="img-wrapper">
        <img data-src="./images/placeholder.png" 
            srcset="./images/placeholder.png 480w, ./images/placeholder.png 800w"
            sizes="(max-width: 600px) 480px, 800px"
            alt="skeleton lazyload" 
            class="img-cover" 
            crossorigin="anonymous">
          <div class="catalog-item">
              <h2 class="skeleton">Lorem ipsum dolor sit.</h2>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>

      </figure>

    </div>
    `
  }

  return template
}

const createCatalogDetailTemplate = (restaurant) => {
  let listFood = ''
  let listDrink = ''
  let listReview = ''

  for (const food of restaurant.menus.foods) {
    listFood += `<li>${food.name}</li>`
  }

  for (const drink of restaurant.menus.drinks) {
    listDrink += `<li>${drink.name}</li>`
  }

  for (const consumerReview of restaurant.customerReviews) {
    listReview += `
        <div class="content-review">
            <h4>${consumerReview.name}</h4>
            <p>${consumerReview.review}</p>
            <span class="time-left">${consumerReview.date}</span>
        </div>
         `
  }

  return `
        <div class="catalog">
          <h2>${restaurant.name}</h2>
          <img class="img-wrapper img-cover" src="${
            CONFIG.BASE_IMAGE_URL + restaurant.pictureId
          }" alt="${restaurant.name}" crossorigin="anonymous" />
            <h3>Information</h3>
              <h4>Deskripsi</h4>
              <p>${restaurant.description}</p>
              <h4>City</h4>
              <p>${restaurant.city}</p>
              <h4>Location</h4>
              <p>${restaurant.address} </p>
              <h4>Rating</h4>
              <p>${restaurant.rating}</p>
              <h4>Categories</h4>
              <p>${restaurant.categories
                .map((category) => category.name)
                .join(', ')}
              </p>
            <div class="menus">
              <h4>Foods</h4>
              <ul>${listFood}</ul>
              <h4>Drinks</h4>
              <ul>${listDrink}</ul>
            </div>
          <div class="customer-reviews">
            <h4>Comment Overview</h4>
              ${listReview}
          </div>

        </div>

`
}

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this catalog" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this catalog" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const showResponseMessage = () => {
  alert('Check your internet connection')
}

const createPageLoaderTemplate = {
  show () {
    return `
      <div class="page-loader"></div>
    `
  },
  remove () {
    document.querySelector('.page-loader').remove()
  }
}

export {
  createPageLoaderTemplate,
  showResponseMessage,
  createCatalogTemplate,
  createCatalogDetailTemplate,
  createSkeletonCatalogTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
