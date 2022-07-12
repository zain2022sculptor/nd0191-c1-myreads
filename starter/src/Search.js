import { useEffect, useState } from "react";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

const Search = ({ booksData, onsetShowPage }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearhResutls] = useState([]);

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      const searchBooks = async () => {
        const res = await BooksAPI.search(query.trim(), 20);
        setSearhResutls(res);
      };
      searchBooks();
    }

    return () => {
      console.log("Cleanup called");
    };
  }, [query]);

  console.log(searchResults);

  const displayData = booksData.filter((dataEntry) =>
    query === ""
      ? booksData
      : dataEntry.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => onsetShowPage()}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => {
              updateQuery(e);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        {query.length > 0 && <ListBooks booksData={searchResults} />}
      </div>
    </div>
  );
};

export default Search;
