"use client";

import { Button, Card } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-green-800">
      <Card className="p-10 bg-opacity-90 bg-green-900 text-white max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Your Next Favorite Book 📚
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          A world of stories and knowledge at your fingertips.
        </p>

        <Button
          as="a"
          className="mt-6 bg-green-300 text-amber-800 font-semibold"
          href="https://car-refresh-service-87ur6gbfy-azir-uddins-projects.vercel.app/shop"
          // href="http://localhost:3000/shop"
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
