import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $name: String!
    $email: String!
    $firstName: String
    $lastname: String
  ) {
    createAccount(
      username: $rname
      email: $email
      firstName: $firstName
      lastname: $lastname
    )
  }
`;
