"use client";

import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const BookType = () => {
  const [search, setSearch] = useState("");
  const bookImages = [
    "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200",
    "https://blog.bookbaby.com/wp-content/uploads/2023/04/BookSizes_Feature-696x503.jpg",
    "https://thebftonline.com/wp-content/uploads/2020/12/books.jpeg",
    "https://www.onctrust.in/wp-content/uploads/2020/05/books.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlialIsrVW2TgOxmI_UjvvvNC_rJnWHTmJkw&s",
    "https://stevelaube.com/wp-content/uploads/2024/03/4425215-xsmall.jpg",
    "https://www.popsci.com/wp-content/uploads/2024/07/buy_physical_books.jpg?quality=85",
  ];

  return (
    <div className="min-h-screen bg-green-950 dark:bg-gray-900 p-6">
      {/* <div className="min-h-screen bg-green-950 dark:bg-gray-900 p-6"> */}
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to Our Bookstore
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Discover and enjoy books from various genres!
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <FaSearch className="text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full bg-transparent text-lg outline-none"
          placeholder="Search for books..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Book Grid Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-200">
          Browse Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {bookImages.map((src, index) => (
            <Card
              key={index}
              className="p-4 bg-green-900 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition"
            >
              <div className="overflow-hidden rounded-lg shadow-lg bg-green-700">
                <Image
                  alt={`book-${index + 1}`}
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  height={300}
                  src={src}
                  width={300}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white dark:text-white">
                Book Title: Science Explore{index + 1}
              </h3>
              <p className="text-white dark:text-gray-400">
                Author Name: Joe Adam{index + 1}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookType;
