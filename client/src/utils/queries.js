import gql from 'graphql-tag';

// export const QUERY_USER = gql`
// {
//     user {
//       _id
//       username
//       email
//       bookCount
//       savedBooks {
//         # _id
//         bookId
//         # authors
//         image
//         link
//         title
//         description
//       }
//     }
//   }
// `;

export const GET_ME = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

// export const QUERY_BOOKS = gql`
//   query savedBooks($authors: String, $description: String!, $bookId: String, $image: String, $link: String) {
//     books(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link) {
//         _id
//         # authors
//         bookId
//         image
//         link
//         title
//         description
//     }
//   }
// `;

