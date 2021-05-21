/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      username
      resname
      rating
      description
      liked
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelratingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        resname
        rating
        description
        liked
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserAttended = /* GraphQL */ `
  query GetUserAttended($id: ID!) {
    getUserAttended(id: $id) {
      id
      username
      resname
      attended
      createdAt
      updatedAt
    }
  }
`;
export const listUserAttendeds = /* GraphQL */ `
  query ListUserAttendeds(
    $filter: ModeluserAttendedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAttendeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        resname
        attended
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
