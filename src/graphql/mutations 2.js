/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelratingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelratingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelratingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createUserAttended = /* GraphQL */ `
  mutation CreateUserAttended(
    $input: CreateUserAttendedInput!
    $condition: ModeluserAttendedConditionInput
  ) {
    createUserAttended(input: $input, condition: $condition) {
      id
      username
      resname
      attended
      createdAt
      updatedAt
    }
  }
`;
export const updateUserAttended = /* GraphQL */ `
  mutation UpdateUserAttended(
    $input: UpdateUserAttendedInput!
    $condition: ModeluserAttendedConditionInput
  ) {
    updateUserAttended(input: $input, condition: $condition) {
      id
      username
      resname
      attended
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserAttended = /* GraphQL */ `
  mutation DeleteUserAttended(
    $input: DeleteUserAttendedInput!
    $condition: ModeluserAttendedConditionInput
  ) {
    deleteUserAttended(input: $input, condition: $condition) {
      id
      username
      resname
      attended
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
