import React, { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $description: String!
  ) {
    createBook(title: $title, author: $author, description: $description) {
      title
      author
      description
    }
  }
`;

const CreateBookForm = props => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [description, setDescription] = useState("");
  const [createBook, { data }] = useMutation(CREATE_BOOK);

  const handleSubmit = () => {
    createBook({
      variables: { title: title, author: author, description: description }
    });
    setTitle((title = ""));
    setAuthor((author = ""));
    setDescription((description = ""));
  };

  return (
    <div>
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={e => setTitle((title = e.target.value))}
      ></input>
      <input
        type="text"
        placeholder="Author"
        onChange={e => setAuthor((author = e.target.value))}
      ></input>
      <input
        type="text"
        placeholder="Description"
        onChange={e => setDescription((description = e.target.value))}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateBookForm;
