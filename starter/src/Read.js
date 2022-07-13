import ListBooks from "./ListBooks";

const Read = ({ booksData, onUpdateBooksData }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === "read"
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ListBooks
          booksData={displayData}
          onUpdateBooksData={onUpdateBooksData}
        />
      </div>
    </div>
  );
};

export default Read;
