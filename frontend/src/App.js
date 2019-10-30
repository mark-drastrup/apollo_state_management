import React from "react";
import BookList from "./components/BookList";
import CreateBookForm from "./components/CreateBookForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BookList></BookList>
      <CreateBookForm></CreateBookForm>
    </div>
  );
}

export default App;
