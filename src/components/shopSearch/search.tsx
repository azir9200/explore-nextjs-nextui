"use client";

import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const BookType = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Our Bookstore
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Discover and enjoy books from various genres!
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition hover:shadow-lg">
        <FaSearch className="text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder="Search for books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none text-lg"
        />
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Buying a book is not just about reading—it is about gaining a lifelong
          friend that enriches your home.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          Explore a Variety of Books in Our Collection
        </h2>
      </div>

      {/* Book Classification Section */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Book Classifications
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Books can be categorized in various ways:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>By Genre:</strong> Fiction, Non-Fiction, Mystery, Romance,
            Fantasy, Thriller, Science Fiction.
          </li>
          <li>
            <strong>By Age Group:</strong> Children Books, Young Adult (YA),
            Adult.
          </li>
          <li>
            <strong>By Format:</strong> Hardcover, Paperback, eBook, Audiobook.
          </li>
          <li>
            <strong>By Purpose:</strong> Textbooks, Reference Books, Religious
            Books, Guidebooks.
          </li>
        </ul>
      </div>

      {/* Book Grid Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Browse Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  Book Image
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Book Title {index + 1}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Author Name {index + 1}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookType;
