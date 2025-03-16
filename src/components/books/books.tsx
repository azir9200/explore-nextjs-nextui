import { TBook } from "@/src/types";

interface BookProps {
  book: TBook;
}

const Books: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={book?.image}
        alt={book.title}
      />
      <div className="py-4">
        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">
          Genre: <span className="font-medium">{book.genre}</span>
        </p>
        <p className="text-gray-600">
          Published Year:{" "}
          <span className="font-medium">{book.publishedYear}</span>
        </p>
        <p className="text-gray-600">
          Available Copies:{" "}
          <span className="font-medium">{book.availableCopies}</span>
        </p>
        <p className="text-gray-600">
          Total Copies: <span className="font-medium">{book.totalCopies}</span>
        </p>
      </div>
    </div>
  );
};

export default Books;
