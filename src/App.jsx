import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBookData(res.data.books);
      })
      .catch((err) => {
        if (err.request.status === 404) {
          console.log("Status Code: 404");
          console.log("Website not found");
        }
      });
  }, []);

  return (
    <div id="container">
      {bookData.map((book, index) => (
        <div key={index} id="book">
          <p id="title">{book.title}</p>
          <div id="details">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <p>{book.description}</p>
          </div>
          <p id="author">
            {book.authors.map((author, index) => (
              <i key={index}>{author}</i>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
