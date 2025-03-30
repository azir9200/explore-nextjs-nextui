"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Bookish: How Reading Shapes Our Lives",
    author: "Lucy Mangan",
    description:
      "In this memoir, Lucy Mangan reflects on her lifelong obsession with books, detailing how literature has influenced her personal growth and outlook on life.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.nexhhcfXXSeAiHs8yHGSCQAAAA&pid=Api",
    link: "https://www.theguardian.com/books/2025/mar/16/bookish-how-reading-shapes-our-lives-by-lucy-mangan-review",
  },
  {
    title: "7 Books That Invite Readerly Exploration",
    author: "Steven Hall",
    description:
      "This list highlights seven books that showcase the power of literature in offering adventure and discovery beyond other media.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.VPN5S4xIupxbA4mlc91cnwHaLI&pid=Api",
    link: "https://lithub.com/7-books-that-invite-readerly-exploration-adventure-and-discovery/",
  },
  {
    title: "10 Books to Bring Out Your Inner Explorer",
    description:
      "A curated list of ten captivating books that unveil the mysteries of new worlds, perfect for curious minds and adventurers.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.usFkLxbSpZni3OrYof2jjgHaE8&pid=Api",
    link: "https://wandering-everywhere.com/best-travel-books-for-explorers/",
  },
  {
    title: "Bookish: How Reading Shapes Our Lives",
    author: "Lucy Mangan",
    description:
      "In this memoir, Lucy Mangan reflects on her lifelong obsession with books, detailing how literature has influenced her personal growth and outlook on life.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.nexhhcfXXSeAiHs8yHGSCQAAAA&pid=Api",
    link: "https://www.theguardian.com/books/2025/mar/16/bookish-how-reading-shapes-our-lives-by-lucy-mangan-review",
  },
  {
    title: "Popular Exploration Books on Goodreads",
    description:
      "A list of popular exploration books, including 'The Endurance' and 'Alone on the Ice,' featuring gripping survival stories and adventures.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.K6-vFsZ25RyVmzJTP2tFigHaI6&pid=Api",
    link: "https://www.goodreads.com/shelf/show/exploration",
  },
  {
    title: "Resources and Ideas for Exploring Books",
    description:
      "This article provides reading communities, planning tools, and teacher resources to inspire young readers and foster literary exploration.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.8eEyB17ynU18uOyAAFGc8gAAAA&pid=Api",
    link: "https://natlib.govt.nz/blog/posts/resources-and-ideas-for-exploring-books-and-inspiring-young-readers",
  },
  {
    title: "7 Books That Invite Readerly Exploration",
    author: "Steven Hall",
    description:
      "This list highlights seven books that showcase the power of literature in offering adventure and discovery beyond other media.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.VPN5S4xIupxbA4mlc91cnwHaLI&pid=Api",
    link: "https://lithub.com/7-books-that-invite-readerly-exploration-adventure-and-discovery/",
  },
  {
    title: "10 Books to Bring Out Your Inner Explorer",
    description:
      "A curated list of ten captivating books that unveil the mysteries of new worlds, perfect for curious minds and adventurers.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.usFkLxbSpZni3OrYof2jjgHaE8&pid=Api",
    link: "https://wandering-everywhere.com/best-travel-books-for-explorers/",
  },
];

const BookExplore = () => {
  return (
    <section className="px-6 py-12  bg-green-900 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Explore the World of Books
        </h1>
        <p className="text-white mt-2 text-lg">
          Discover new ideas, adventures, and perspectives through these
          must-read articles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-900">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-green-900 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <Image
              alt={article.title}
              className="w-full h-48 object-cover"
              height={250}
              src={article.image}
              width={400}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">
                {article.title}
              </h3>
              {article.author && (
                <p className="text-white text-sm">By {article.author}</p>
              )}
              <p className="text-white mt-2 text-sm">{article.description}</p>
              <Link href={article.link} target="_blank">
                <span className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookExplore;
