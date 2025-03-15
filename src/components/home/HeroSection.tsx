"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Container from "../UI/Container";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row  w-full h-[80vh] bg-cover bg-center">
      {/* Text Section */}
      <div
        className="w-1/2"
        style={{
          flex: 2,
          position: "relative",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 className="text-white">
          A room without books is like a body without a soul.Reading is to the
          mind what exercise is to the body. Books are a uniquely portable
          magic.The more that you read, the more things you will know. Books
          serve to show a man that those original thoughts of his are not very
          new after all. The man who does not read good books is no better than
          the man who can not. Show me a family of readers, and I will show you
          the people who move the world. I guess there are never enough books.
        </h2>
        <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
          <Button
            style={{
              backgroundColor: "#0070f3", // Blue background
              color: "white",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "8px", // Rounded corners
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Make Appointment
          </Button>
          <Button
            style={{
              backgroundColor: "#ffffff", // White background
              color: "#0070f3", // Blue text
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "8px", // Rounded corners
              border: "2px solid #0070f3",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
          position: "relative",
        }}
      >
        <div>
          <Image
            alt="book1"
            height={300}
            src="https://st2.depositphotos.com/3875813/11782/i/450/depositphotos_117826656-bouquet-of-phlox-flowers-in-a-glass-vase-and-an-old-book-on-the-table-on-nature-background-selective-focus.jpg"
            width={300}
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div>
          <Image
            alt="book2"
            height={300}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnk1_iI3tkKd6d22dFSrhXeT2wR4mTdzZDeXJ6ItidvnSdXy-jEDTNgPOcnRgj86w4lY&usqp=CAU"
            width={300}
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div>
          <Image
            alt="book3"
            height={300}
            src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1"
            width={300}
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div>
          <Image
            alt="book4"
            height={300}
            src="https://www.lboro.ac.uk/media/media/schoolanddepartments/school-of-science/images/news/a-is-for-ai-960.jpg"
            width={300}
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
