import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editPhoto(id: Int!): Photo
  }
`;