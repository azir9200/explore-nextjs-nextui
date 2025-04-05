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
        // const res = await fetch(
        //   "https://golden-book-store-9k9td4eep-azir-uddins-projects.vercel.app/api/v1/book",
        //   {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        //   }
        // );
        console.log("Response Status:", res.status);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched Data:", JSON.stringify(data, null, 2));

        setBooks(data?.data || []); // Ensure backend returns `data` field
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const displayedBooks = showAll ? books : books.slice(0, 6);

  return (
    <div className="p-0 m-0 bg-green-950">
      <div className="px-8 py-10">
        <p className="text-xl text-white leading-relaxed">
          The power to be found between the pages of a book is formidable,
          indeed...
        </p>
      </div>

      <div className="px-6 py-8">
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-800 p-6 rounded-lg">
            {displayedBooks.map((book) => (
              <Books key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>

      {books.length > 6 && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-900 px-6 py-2 rounded-full text-white hover:bg-green-700 transition-all duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Read more.."}
          </button>
        </div>
      )}
    </div>
  );
};

export default Features;
