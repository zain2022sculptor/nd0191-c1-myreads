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

  return (
    <div className="app">
      {showSearchPage ? (
        <Search booksData={booksData} onsetShowPage={setShowPage} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <CurrentlyReading booksData={booksData} />
              <WantToRead booksData={booksData} />
              <Read booksData={booksData} />
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
