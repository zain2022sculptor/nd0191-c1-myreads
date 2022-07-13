const ShelfChanger = ({ bookentry, onUpdateBooksData }) => {
  if (!bookentry.shelf) {
    bookentry.shelf = "none";
  }

  const updateShelf = (event) => {
    onUpdateBooksData(bookentry, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={bookentry.shelf} onChange={(e) => updateShelf(e)}>
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
