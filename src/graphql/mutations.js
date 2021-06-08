/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModeluserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userId
      name
      address
      telephone
      foodPreferences
      reservations
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModeluserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userId
      name
      address
      telephone
      foodPreferences
      reservations
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModeluserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userId
      name
      address
      telephone
      foodPreferences
      reservations
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
