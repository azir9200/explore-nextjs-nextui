import Image from "next/image";

import Container from "@/src/components/UI/Container";

const AboutPage = () => {
  return (
    <div className="bg-green-950">
      <Container>
        {/* page header */}
        <div className="flex flex-col items-center text-center gap-4 font-medium py-14 md:py-16 lg:py-20">
          <span className="text-sm font-semibold border rounded-full px-3 py-1 text-white">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 pt-2 max-w-screen-lg text-white">
            Golden Book is bringing to you get access easily to your favourite
            book.
          </h1>
          <p className="font-medium md:text-lg text-white">
            Stop struggling with outdated platforms. Its time to start savoring
            the joy of sharing.
          </p>
        </div>

        {/* images gallery section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <Image
              alt="recipe image1"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
              width={270}
            />
          </div>
          <div className="md:col-span-6">
            <Image
              alt="recipe image2"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcL3a_klbUkpzghDp_a2QA71-eWoF5Y-E4vKURqMA_HX0ijNUuErkrlemH3wGbrttUpM&usqp=CAU"
              width={270}
            />
          </div>
          <div className="md:col-span-3">
            <Image
              alt="recipe image3"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfP3I60Nn0B4tWBakOgz4_3JziO04B--m8T-xDiVWBfPwyoSmGla_NaUoqcgZZ51eT8AQ&usqp=CAU"
              width={270}
            />
          </div>
        </div>
        {/* our mission section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between py-16">
          <div className="md:col-span-2">
            <h1 className="text-white  dark:text-slate-50 text-2xl md:text-3xl font-extrabold mb-4">
              Your Vision
            </h1>
            <p className="text-white bg-green-950 dark:text-slate-300 font-medium">
              Bookshops are open, inclusive, welcoming spaces for everyone. Amid
              growing polarizations and censorship, this campaign will give voice
              to booksellers from across the RISE network who go above and
              beyond to ensure that their bookshops remain welcoming and
              inclusive spaces for all.
            </p>
            <p className= "bg-green-900 text-white dark:text-slate-300 font-medium">
              Our mission is to inspire a love for reading by offering a diverse
              collection of books that ignite imagination, expand knowledge, and
              connect readers to new worlds. We strive to create a welcoming and
              accessible space where book lovers of all ages can discover,
              learn, and grow through the power of literature
            </p>
          </div>
          <div className="bg-green-950 dark:bg-primary-50 text-white p-6 rounded-md">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              Our Mission
            </h1>
            <p className="font-medium">
              Bookshops have a unique role in fostering values of peace,
              democracy, and tolerance. Following the European elections, now,
              more than ever, it is vital to remind policymakers and
              stakeholders how crucial support from democratic institutions and
              book friendly policies are, not just for bookshops, but also for
              the vitality and vibrancy of society.
            </p>
          </div>
        </div>
        {/* our team section */}
        <div className="py-8 md:py-12">
          <h1 className="text-white dark:text-slate-50 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Meet Our Team
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium text-center">
            Our team united by passion, driven by excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://www.airdesignspokane.com/wp-content/uploads/2016/04/serviceman.png"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Adrian</h3>
                <p className="font-semibold">Team Leader</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://www.buythebook.ie/wp-content/uploads/2022/07/rachel-drury-6.jpg"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Daiana Gomes</h3>
                <p className="font-semibold">Support Officer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://pyxis.nymag.com/v1/imgs/b4a/93c/7cf7653a2cdd61b31c81828d6c3d3ea13f-celeb-book-club-lede-1.1x.rsquare.w1400.jpg"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Andrew</h3>
                <p className="font-semibold">Designer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://focus.independent.ie/thumbor/8-EOOn8L90HdaIhaCXV-27-il3s=/0x43:3112x2117/960x640/prod-mh-ireland/67f4806b-51cd-4133-abde-716583d2230d/c875f79f-489a-42d6-a403-37f933360ed4/67f4806b-51cd-4133-abde-716583d2230d.jpg"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Lucass Finn</h3>
                <p className="font-semibold">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
