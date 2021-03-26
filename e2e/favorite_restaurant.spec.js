// eslint-disable-next-line no-undef
Feature('Favorite Restaurant')

const assert = require('assert')

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#favorites')
  I.see('No Catalogs Saved here.', '#favorites')
})

// eslint-disable-next-line no-undef
Scenario('Liking catalog restaurants', async ({ I }) => {
  I.see('No Catalogs Saved here.', '#favorites')

  I.amOnPage('/')

  I.seeElement('.card a')

  // I.click(locate('.card a').first());
  // eslint-disable-next-line no-undef
  const firstCard = locate('.card__title').first()
  const firstCardTitle = await I.grabTextFrom(firstCard)
  I.click(firstCard)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.card')
  const likedCardTitle = await I.grabTextFrom('.card__title')

  assert.strictEqual(firstCardTitle, likedCardTitle)
})

// eslint-disable-next-line no-undef
Scenario('unliking catalog restaurants', async ({ I }) => {
  I.see('No Catalogs Saved here.', '#favorites')

  I.amOnPage('/')

  I.seeElement('.card a')

  // eslint-disable-next-line no-undef
  const firstCard = locate('.card__title').first()
  const firstCardTitle = await I.grabTextFrom(firstCard)
  I.click(firstCard)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.card')
  const likedCardTitle = await I.grabTextFrom('.card__title')

  assert.strictEqual(firstCardTitle, likedCardTitle)

  I.click(likedCardTitle)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('#favorites')

  const noFavRestaurant = await I.grabTextFrom('#favorites')

  assert.strictEqual(noFavRestaurant, 'No Catalogs Saved here.')
})

// eslint-disable-next-line no-undef
Scenario('Customer review', async ({ I }) => {
  I.see('No Catalogs Saved here.', '#favorites')

  I.amOnPage('/')

  I.seeElement('.card a')
  // eslint-disable-next-line no-undef
  I.click(locate('.card a').first())

  I.seeElement('.catalog-form')

  I.fillField('#inputName', 'Robertus Adrian')
  I.fillField('#inputReview', 'Terima kasih makanannya')

  I.click('#submit-review')

  // eslint-disable-next-line no-undef
  const lastReview = locate('.customer-reviews').last()
  const formLastReview = await I.grabTextFrom(lastReview)

  assert.strictEqual(lastReview, formLastReview)
})
