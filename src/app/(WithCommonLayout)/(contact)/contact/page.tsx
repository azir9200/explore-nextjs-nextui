/* eslint-disable import/order */
"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { Building2, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/src/components/UI/Container";

import { toast } from "sonner";
import { Textarea } from "@nextui-org/input";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";

const ContactPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    toast.success("Successfully submitted");
  };

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {/* Background Image */}
          <div>
            <Image
              alt="contactImg"
              className="rounded-lg w-full h-full object-cover"
              height={500}
              src="https://www.sandyfordmotors.com/images/common/carservice-image.webp"
              width={650}
            />
          </div>
          {/* Contact Form */}
          <div>
            <div className="space-y-2 mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Let&apos;s Get In Touch.
              </h1>
              <p className="font-medium">
                Or just reach out manually to{" "}
                <span className="text-primary dark:text-primary-400">
                  hello@yummy.com
                </span>
              </p>
            </div>

            <FXForm
              // resolver={zodResolver(contactValidationSchema)}
              onSubmitAction={onSubmit}
            >
              <div className="py-3">
                <FXInput label="Name" name="name" type="text" />
              </div>
              <div className="py-3">
                <FXInput label="Email" name="email" type="email" />
              </div>
              <div className="py-3">
                <FXInput label="Subject" name="subject" type="text" />
              </div>
              <div className="py-3">
                <Textarea label="Message" variant="bordered" />
              </div>
              <Button
                className="mt-3 w-full rounded-md bg-default-900 font-semibold text-default"
                type="submit"
              >
                Submit
              </Button>
            </FXForm>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="pt-14 md:pt-20 grid gap-10">
          <div className="font-medium space-y-3">
            <span className="text-sm font-semibold border rounded-full px-3 py-1">
              Reach Out To Us
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold pt-2">
              We&apos;d Love To Hear From You
            </h1>
            <p className="font-medium">
              Or just reach out manually to{" "}
              <a
                className="text-primary dark:text-primary-400 underline"
                href="mailto:hello@yummy.com"
              >
                hello@yummy.com
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Support */}
            <div className="p-4">
              <Mail className="inline-block p-2 mb-3 bg-indigo-50 rounded-full text-primary dark:text-primary-400" />
              <h3 className="text-lg font-bold">Email Support</h3>
              <p className="text-sm">Our team can respond in real time.</p>
              <p className="mt-3 text-primary dark:text-primary-400 font-bold">
                hello@yummy.com
              </p>
            </div>
            {/* Office Location */}
            <div className="p-4">
              <Building2 className="inline-block p-2 mb-3 bg-indigo-50 rounded-full text-primary dark:text-primary-400" />
              <h3 className="text-lg font-bold">Visit Our Office</h3>
              <p className="text-sm">Visit our office in real life.</p>
              <address className="mt-3 text-primary dark:text-primary-400 font-bold not-italic">
                22/c Elementary Avenue, NY
              </address>
            </div>
            {/* Phone Support */}
            <div className="p-4">
              <Phone className="inline-block p-2 mb-3 bg-indigo-50 rounded-full text-primary dark:text-primary-400" />
              <h3 className="text-lg font-bold">Call Us Directly</h3>
              <p className="text-sm">Available during working hours.</p>
              <p className="mt-3 text-primary dark:text-primary-400 font-bold">
                (+1)234-4567-789
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
