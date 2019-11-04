import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useApolloClient } from "@apollo/react-hooks";

const GET_BOOKS = gql`
  query books {
    books {
      title
      description
      author
    }
  }
`;

const BookList = props => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const client = useApolloClient();
  client.writeData({ data: { books: data } });
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  console.log("This is my books", data);
  return (
    <div>
      <h1>This is my book list</h1>
      {data.books.map(book => {
        return <p key={book.author}>{book.title}</p>;
      })}
    </div>
  );
};

export default BookList;
