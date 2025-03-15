"use client";

import { Button, Card } from "@nextui-org/react";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://us.123rf.com/450wm/sensay/sensay2205/sensay220500529/186493818-open-book-on-a-wooden-table-in-a-garden-sunny-summer-day-reading-in-a-vacation-concept.jpg?ver=6')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />{" "}
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 md:px-12">
        <Card
          isHoverable
          className="bg-opacity-90 p-8 md:p-12 max-w-3xl"
          style={{ borderRadius: "12px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Unlock the Power of Stories with Our Book Collection 📚
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Dive into a world of knowledge, adventure, and imagination. Our
            bookstore offers books from all genres, perfect for every reader.
          </p>

          <Button
            as="a"
            className="mt-6"
            color="primary"
            href="/shop"
            radius="full"
            size="lg"
          >
            Explore Our Collection
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Banner;
