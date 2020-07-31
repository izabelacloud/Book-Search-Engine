import gql from 'graphql-tag';

export const LOGIN_USER = gql`
#   mutation loginUser($email: String!, $password: String!) {
#     login(email: $email, password: $password) {
#       token
#       user {
#         _id
#         username
#       }
#     }
#   }

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
            _id
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
  mutation saveBook($description: String!) {
    saveBook(description: $description) {
      _id
      bookId
      authors
      description
      title
      image
      link
      bookCount
      savedBooks {
          _id
      }
      
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId:$bookId) {
        bookId
    }
}
`;

