"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[90vh] bg-gray-900 text-white p-2 lg:p-8">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-2xl justify-center text-center">
          {" "}
          A beautiful Book
        </h2>
        <p className="text-xl lg:text-xl font-semibold leading-relaxed px-4">
          A room without books is like a body without a soul. Reading is to the
          mind what exercise is to the body. Books are a uniquely portable
          magic. The more you read, the more things you will know. Books serve
          to show a man that those original thoughts of his are not very new
          after all. The man who does not read good books is no better than the
          man who cannot. Show me a family of readers, and I will show you the
          people who move the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <button className="bg-[#0070f3] text-white px-6 py-3 text-lg rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-[#005bb5]">
            Make Appointment
          </button>
          <button className="bg-white text-[#0070f3] px-6 py-3 text-lg rounded-lg border-2 border-[#0070f3] shadow-md transition duration-300 ease-in-out hover:bg-[#0070f3] hover:text-white">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://st2.depositphotos.com/3875813/11782/i/450/depositphotos_117826656-bouquet-of-phlox-flowers-in-a-glass-vase-and-an-old-book-on-the-table-on-nature-background-selective-focus.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnk1_iI3tkKd6d22dFSrhXeT2wR4mTdzZDeXJ6ItidvnSdXy-jEDTNgPOcnRgj86w4lY&usqp=CAU",
            "https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1",
            "https://www.lboro.ac.uk/media/media/schoolanddepartments/school-of-science/images/news/a-is-for-ai-960.jpg",
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                alt={`book-${index + 1}`}
                height={300}
                width={300}
                className="w-full h-[200px] object-cover transition duration-300 ease-in-out transform hover:scale-105"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
