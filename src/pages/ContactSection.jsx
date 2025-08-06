import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
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
    <section className="bg-gray-100 py-20 px-4 sm:px-8 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
           Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6 text-emerald-700">
            <div>
              <h3 className="text-2xl font-semibold mb-2">School Address</h3>
              <p>D.B.S Inter College School</p>
              <p>Sheesham jhari muni ki reti</p>
              <p>Rishikesh , Uttrakhand - 249137</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p>📞 +91 </p>
              <p>📞 +91 </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p> dbsintercollege@.com</p>
              
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4"  ref={form} onSubmit={sendEmail}>
            

            <div>
              <label className="block text-emerald-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                name="your_email"
                className="w-full px-4 py-2 border-none bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 "
                required
              />
            </div>

            <div>
              <label className="block text-emerald-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                name="message"
                className="w-full px-4 py-2 border-none bg-gray-100 focus:outline-none focus:ring focus:ring-emerald-700"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
