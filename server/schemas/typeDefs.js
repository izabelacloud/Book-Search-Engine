// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id: ID
    authors: String
    bookId: String
    image: String
    link: String
    title: String
    description: String
  }

# type Author {
#     name: String
#     books: [Book]
# }


type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

type Query {
    me: User  
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: String, description: String!, bookId: String, image: String, link: String): User
    removeBook(bookId: String!): User
}

type Auth {
    token: ID!
    user: User
  }

`;



// export the typeDefs
module.exports = typeDefs;