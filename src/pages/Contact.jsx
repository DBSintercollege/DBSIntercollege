import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_to0gxi5', "template_jlst8ai", form.current, 'WU0MXO0nGH01YTVAO')
      .then((result) => {
        alert("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        alert("Failed to send message. Try again.");
      });
  };

  return (
    
    <div className="max-w-xl mx-auto p-4 ">
      <div className="my-30">

      <h1 className="text-2xl font-bold my-5 text-emerald-800">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="email" name="your_email" placeholder="Your Email" className="w-full p-2 border-none rounded  bg-gray-100" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 border-none rounded  bg-gray-100 h-32" required></textarea>
        <button type="submit" className="bg-emerald-700 text-white px-4 py-2 rounded">Send</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;