"use client";

import { Button, Card } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
      <Card className="p-10 bg-opacity-90 bg-black text-white max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Your Next Favorite Book 📚
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          A world of stories and knowledge at your fingertips.
        </p>

        <Button
          as="a"
          className="mt-6"
          color="primary"
          href="/shop"
          radius="full"
          size="lg"
        >
          Shop Now
        </Button>
      </Card>
    </section>
  );
};

export default Hero;
