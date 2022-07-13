import "./App.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksData, setBooksData] = useState([]);
  //const [dataToUpdateShelf, setDataToUpdateShelf] = useState([]);

  const setShowPage = () => {
    setShowSearchpage(!showSearchPage);
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooksData(res);
    };

    getBooks();
  }, []);

  console.log(booksData);

  const updateBooksData = (bookEntry, shelf) => {
    console.log(bookEntry.title, shelf);
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
      {showSearchPage ? (
        <Search
          booksData={booksData}
          onsetShowPage={setShowPage}
          onUpdateBooksData={updateBooksData}
        />
      ) : (
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
              <Read booksData={booksData} onUpdateBooksData={updateBooksData} />
            </div>
          </div>

          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
