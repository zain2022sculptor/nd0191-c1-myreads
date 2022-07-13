import ListBooks from "./ListBooks";

const CurrentlyReading = ({ booksData, onUpdateBooksData }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === "currentlyReading"
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ListBooks
          booksData={displayData}
          onUpdateBooksData={onUpdateBooksData}
        />
      </div>
    </div>
  );
};

export default CurrentlyReading;
