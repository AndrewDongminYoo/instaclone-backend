import { gql } from "apollo-server";

// The GraphQL schema
export default gql`

  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }

  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    updateMovie(id: Int!, title: String, year: Int, genre: String): Movie
    deleteMovie(id: Int!): Movie
  }
`;