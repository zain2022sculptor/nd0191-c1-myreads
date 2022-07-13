import { useState } from "react";

const ShelfChanger = ({ bookentry, onUpdateBooksData }) => {
  //const [shelf, setShelf] = useState("none");

  if (!bookentry.shelf) {
    bookentry.shelf = "none";
  }

  console.log("Book entry shelf in shelf changer:", bookentry);

  const updateShelf = (event) => {
    onUpdateBooksData(bookentry, event.target.value);
    //setShelf(event.target.value);
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
