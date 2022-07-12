import ListBooks from "./ListBooks";

const CurrentlyReading = ({ booksData }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === "currentlyReading"
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ListBooks booksData={displayData} />
      </div>
    </div>
  );
};

export default CurrentlyReading;
