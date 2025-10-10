"use client";

import ContactSectionMap from "@/components/ContactSectionMap";
import Form from "/src/components/Form.jsx";
export default function Page() {
  const handleFormSubmit = (data) => {
    console.log("Form data received in parent:", data);
  };

  return (
    <div className="p-32  flex flex-col">
      <div className="flex flex-col ">
        <p className="text-normal text-blue-500">Contact Us</p>
        <p className="text-3xl font-semibold">Get in touch with us</p>
        <p className="text-lg text-[#0a4174]">
          We&#39;re here to answer your questions, discuss your shipments, and
          help you find the best solutions for your export needs. Reach out to
          us, and let&#39;s start building something great
        </p>
      </div>
      <div className="flex flex-row w-full">
        <Form onSubmitSuccess={handleFormSubmit} />
        <div className="pl-8">
          <ContactSectionMap />
        </div>
      </div>
    </div>
  );
}
