const gql = require("graphql-tag");

const typeDefs = gql`
  type Querry {
    "give all the non-null tracks array"
    trackForHome: [Track!]!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
