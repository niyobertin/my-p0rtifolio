import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d82lumu",
        "template_4zs1em7",
        formData,
        "kTNrnf3XAW7zBaYdf"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          setFormData({ name: "", phone: "", message: "" });
        },
        (error) => {
          toast.error("Email sending failed:", error);
        }
      );
  };

  return (
    <>
      <h1 className="text-White font-bold text-2xl text-center pt-20 pb-4">
        Contact us
      </h1>
      <div className="sm:flex block gap-8 mb-6">
        <div
          className="bg-gray-800 text-white pt-[4%] pb-[2%] mr-[30%] ml-[30%] w-full text-lg rounded-[20px]"
          id="contacts"
        >
          <form
            onSubmit={sendEmail}
            className="sm:ml-[2%] ml-[2%] sm:mr-[2%] mr-[2%]"
          >
            <div className="mt-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-gray-800 border-b-2 border-blue-500 w-full focus:outline-none"
                required
              />
            </div>
            <div className="mt-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="bg-gray-800 border-b-2 border-blue-500 w-full focus:outline-none"
                required
              />
            </div>
            <div className="mt-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="bg-gray-800 border-b-2 border-blue-500 w-full focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="p-2 bg-blue-800 font-bold rounded-[30px] px-8"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contacts;
