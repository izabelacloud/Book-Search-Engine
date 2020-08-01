import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        bookId
        image
        link
        title
        description
      }
    }
    token
  }
}
`;

export const SAVE_BOOK = gql`
#   mutation saveBook($bookId: ID!) {
#     saveBook(bookId: $bookId) {
#       _id
#       bookId
#       authors
#       description
#       title
#       image
#       link
#       bookCount      
#     }
#   }
    mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
        {
            _id
            username
            email
            bookCount
        }
    }
`;

// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!) {
//     addThought(thoughtText: $thoughtText) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//       }
//     }
//   }
// `;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId:$bookId) {
        bookId
    }
}
`;

