"use client";

import { Link, Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 max-w-[h-screen]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Store Info */}
        <div>
          <h2 className="text-xl font-bold">📚 My Bookstore</h2>
          <p className="text-sm mt-2 text-gray-400">
            Discover a world of books. From bestsellers to classics, we bring
            you the joy of reading.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link color="foreground" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link color="foreground" href="/categories">
                Categories
              </Link>
            </li>
            <li>
              <Link color="foreground" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link color="foreground" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-sm mt-2 text-gray-400">
            Email: support@mybookstore.com
          </p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>

          {/* Social Media */}
          <div className="flex mt-4 space-x-3">
            <Button
              isIconOnly
              as={Link}
              color="primary"
              href="#"
              variant="light"
            >
              📘
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              href="#"
              variant="light"
            >
              🐦
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              href="#"
              variant="light"
            >
              📷
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              href="#"
              variant="light"
            >
              🔗
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} My Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
