import ListBooks from "./ListBooks";

const WantToRead = ({ booksData }) => {
  const displayData = booksData.filter(
    (dataEntry) => dataEntry.shelf === "wantToRead"
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ListBooks booksData={displayData} />
      </div>
    </div>
  );
};

export default WantToRead;
