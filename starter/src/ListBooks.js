import ShelfChanger from "./ShelfChanger";

const ListBooks = ({ booksData }) => {
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
                  <ShelfChanger />
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
    return <p>{console.log(err)}No data available</p>;
  }
};

export default ListBooks;
