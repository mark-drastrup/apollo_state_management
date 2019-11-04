import React from "react";
import BookList from "./components/BookList";
import CreateBookForm from "./components/CreateBookForm";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./App.css";

const SHOW_FORM = gql`
  query showForm {
    showForm @client
  }
`;

function App() {
  const { data } = useQuery(SHOW_FORM);
  return (
    <div className="App">
      {!data.showForm ? (
        <BookList></BookList>
      ) : (
        <CreateBookForm></CreateBookForm>
      )}
    </div>
  );
}

export default App;
