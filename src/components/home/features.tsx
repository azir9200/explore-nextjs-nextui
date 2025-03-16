"use client";

import { useEffect, useState } from "react";
import Books from "../books/books";
import { TBook } from "@/src/types";

const Features = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/book");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data);

        const books: TBook[] = data?.data || []; // Ensure books is an array
        setBooks(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div>
        <p>
          The power to be found between the pages of a book is formidable,
          indeed. And these 80 inspiring quotes about books and importance of
          reading are here to remind you of that. From beloved bestsellers to
          iconic celebrities, these quotes exemplify the benefits of reading and
          of a good books to comfort, challenge, and inspire you. For, as author
          Anna Quindlen says, Books are the plane, and the train, and the road.
          They are the destination, and the journey. They are home.
        </p>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.slice(0, 2).map((book) => (
                <Books key={book.id} book={book} />
              ))}
            </div>
          </h2>
        )}
      </div>
      {/* Show All Button */}
      <button
        className="bg-slate-400 mt-4 px-6 py-2 rounded-r-full rounded-bl-sm"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Read more.."}
      </button>
    </div>
  );
};

export default Features;
