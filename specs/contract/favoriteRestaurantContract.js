const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  // eslint-disable-next-line no-undef
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({ id: 1 })
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({ id: 2 })
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(3))
      .toEqual(undefined)
  })

  // eslint-disable-next-line no-undef
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' })

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurant())
      .toEqual([])
  })

  // eslint-disable-next-line no-undef
  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  // eslint-disable-next-line no-undef
  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    favoriteRestaurant.putRestaurant({ id: 3 })

    await favoriteRestaurant.deleteRestaurant(1)

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 }
      ])
  })

  // eslint-disable-next-line no-undef
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 })
    favoriteRestaurant.putRestaurant({ id: 2 })
    favoriteRestaurant.putRestaurant({ id: 3 })

    await favoriteRestaurant.deleteRestaurant(4)

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export { itActsAsFavoriteRestaurantModel }
