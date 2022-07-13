import "./App.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link, Route, Routes } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";

function App() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooksData(res);
    };

    getBooks();
  }, []);

  const updateBooksData = (bookEntry, shelf) => {
    let entryPresent = false;
    BooksAPI.update(bookEntry, shelf);

    setBooksData(
      booksData.map((book) => {
        if (book.id === bookEntry.id) {
          book.shelf = shelf;
          entryPresent = true;
          return book;
        } else {
          return book;
        }
      })
    );
    if (!entryPresent) {
      bookEntry.shelf = shelf;
      setBooksData((booksData) => [...booksData, bookEntry]);
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search booksData={booksData} onUpdateBooksData={updateBooksData} />
          }
        />
        <Route
          exact
          path="/"
          element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  <CurrentlyReading
                    booksData={booksData}
                    onUpdateBooksData={updateBooksData}
                  />
                  <WantToRead
                    booksData={booksData}
                    onUpdateBooksData={updateBooksData}
                  />
                  <Read
                    booksData={booksData}
                    onUpdateBooksData={updateBooksData}
                  />
                </div>
              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
