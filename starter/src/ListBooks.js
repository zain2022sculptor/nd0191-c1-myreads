import ShelfChanger from "./ShelfChanger";

const ListBooks = ({ booksData, onUpdateBooksData }) => {
  try {
    return (
      <ol className="books-grid">
        {booksData.map((bookentry) => {
          return (
            <li key={bookentry.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${bookentry.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <ShelfChanger
                    bookentry={bookentry}
                    onUpdateBooksData={onUpdateBooksData}
                  />
                </div>
                <div className="book-title">{bookentry.title}</div>
                <div className="book-authors">{bookentry.authors}</div>
              </div>
            </li>
          );
        })}
      </ol>
    );
  } catch (err) {
    return (
      <div>
        {console.log(err)}
        <p>Database error!, Please search for something else!</p>
      </div>
    );
  }
};

export default ListBooks;
