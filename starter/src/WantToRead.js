import ListBooks from "./ListBooks";

const WantToRead = ({ booksData, onUpdateBooksData }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === "wantToRead"
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ListBooks
          booksData={displayData}
          onUpdateBooksData={onUpdateBooksData}
        />
      </div>
    </div>
  );
};

export default WantToRead;
