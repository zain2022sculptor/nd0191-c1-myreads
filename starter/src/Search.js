import { useEffect, useState } from "react";
import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

const Search = ({ booksData, onUpdateBooksData }) => {
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

    return () => {};
  }, [query]);

  const datainShelf = booksData.filter((dataEntry) =>
    query === ""
      ? booksData
      : dataEntry.title.toLowerCase().includes(query.toLowerCase())
  );

  let tempdata = [];
  if (searchResults.length > 0) {
    tempdata = searchResults.filter(
      (searchResult) =>
        !datainShelf.some((bookentry) => bookentry.id === searchResult.id)
    );
  }

  const displayData = [...datainShelf, ...tempdata];

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
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
        {query.length > 0 && (
          <ListBooks
            booksData={displayData}
            onUpdateBooksData={onUpdateBooksData}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
