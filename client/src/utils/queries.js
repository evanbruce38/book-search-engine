import { gql } from '@apollo/client';

//TODO add pageCount and publishedDate to savedBooks
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
        pageCount
        publishedDate
      }
    }
  }
`;