"use client";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-950 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white dark:text-white">
          Get in Touch
        </h1>
        <p className="text-white dark:text-gray-300 mt-2">
          We’d love to hear from you!
        </p>
      </div>

      <div className="w-full max-w-4xl bg-green-900 dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full" />
              <Input type="email" placeholder="Your Email" className="w-full" />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="w-full"
              />
              <Button className="w-full bg-green-600 text-white hover:bg-green-950">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="text-center items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">
              Contact Information
            </h2>
            <p className="flex items-center gap-2 text-white dark:text-gray-300 text-center">
              <FaMapMarkerAlt /> 123 Bookstore St, Lisbon, Portugal
            </p>
            <p className="flex items-center gap-2 text-white dark:text-gray-300 text-center">
              <FaPhone /> +351 123 456 789
            </p>
            <p className="flex items-center gap-2 text-white dark:text-gray-300 text-center">
              <FaEnvelope /> contact@bookstore.com
            </p>

            {/* Social Media */}
            <div className="mt-4 flex gap-4 text-center">
              <Link href="#" className="text-blue-600 text-2xl">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-blue-400 text-2xl">
                <FaTwitterSquare />
              </Link>
              <Link href="#" className="text-pink-500 text-2xl">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
