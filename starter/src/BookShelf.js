import ListBooks from "./ListBooks";
import ShelfTitle from "./ShelfTitle";

const BookShelf = ({ booksData, onUpdateBooksData, results }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === results
  );

  let title = "";
  results === "currentlyReading"
    ? (title = "Currently Reading")
    : results === "wantToRead"
    ? (title = "Want to Read")
    : (title = "Read");

  return (
    <div className="bookshelf">
      <ShelfTitle title={title} />
      <ListBooks
        booksData={displayData}
        onUpdateBooksData={onUpdateBooksData}
      />
    </div>
  );
};

export default BookShelf;
