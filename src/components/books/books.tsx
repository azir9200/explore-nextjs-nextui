import { TBook } from "@/src/types";

interface BookProps {
  book: TBook;
}

const Books: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Book Image */}
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={book?.image}
        alt={book.title}
      />

      {/* Book Info */}
      <div className="py-4">
        <h3 className="text-xl font-semibold text-gray-800">📖 {book.title}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Published:</span> {book.publishedYear}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Available Copies:</span>{" "}
          {book.availableCopies}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Total Copies:</span>{" "}
          {book.totalCopies}
        </p>
      </div>

      {/* Borrow Button */}
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
        Borrow This Book
      </button>
    </div>
  );
};

export default Books;
