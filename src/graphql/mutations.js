/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserRating = /* GraphQL */ `
  mutation CreateUserRating(
    $input: CreateUserRatingInput!
    $condition: ModeluserRatingConditionInput
  ) {
    createUserRating(input: $input, condition: $condition) {
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
export const updateUserRating = /* GraphQL */ `
  mutation UpdateUserRating(
    $input: UpdateUserRatingInput!
    $condition: ModeluserRatingConditionInput
  ) {
    updateUserRating(input: $input, condition: $condition) {
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
export const deleteUserRating = /* GraphQL */ `
  mutation DeleteUserRating(
    $input: DeleteUserRatingInput!
    $condition: ModeluserRatingConditionInput
  ) {
    deleteUserRating(input: $input, condition: $condition) {
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
export const createUserPreferences = /* GraphQL */ `
  mutation CreateUserPreferences(
    $input: CreateUserPreferencesInput!
    $condition: ModeluserPreferencesConditionInput
  ) {
    createUserPreferences(input: $input, condition: $condition) {
      id
      userId
      username
      foodPreferences
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPreferences = /* GraphQL */ `
  mutation UpdateUserPreferences(
    $input: UpdateUserPreferencesInput!
    $condition: ModeluserPreferencesConditionInput
  ) {
    updateUserPreferences(input: $input, condition: $condition) {
      id
      userId
      username
      foodPreferences
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPreferences = /* GraphQL */ `
  mutation DeleteUserPreferences(
    $input: DeleteUserPreferencesInput!
    $condition: ModeluserPreferencesConditionInput
  ) {
    deleteUserPreferences(input: $input, condition: $condition) {
      id
      userId
      username
      foodPreferences
      createdAt
      updatedAt
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelrestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelrestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelrestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
