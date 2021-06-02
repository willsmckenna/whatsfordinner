/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserRating = /* GraphQL */ `
  query GetUserRating($id: ID!) {
    getUserRating(id: $id) {
      id
      username
      resname
      attended
      liked
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listUserRatings = /* GraphQL */ `
  query ListUserRatings(
    $filter: ModeluserRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        resname
        attended
        liked
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPreferences = /* GraphQL */ `
  query GetUserPreferences($id: ID!) {
    getUserPreferences(id: $id) {
      id
      username
      foodPreferences
      createdAt
      updatedAt
    }
  }
`;
export const listUserPreferencess = /* GraphQL */ `
  query ListUserPreferencess(
    $filter: ModeluserPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferencess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        foodPreferences
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      userId
      resName
      address
      telephone
      hours
      reservations
      order
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelrestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        resName
        address
        telephone
        hours
        reservations
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
