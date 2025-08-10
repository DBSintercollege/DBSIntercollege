import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <div>

    <section className="bg-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-10 text-center">

        {/* Main About Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-4xl font-bold text-emerald-700 mb-6">
              About D.B.S Inter College
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Established in <strong>2005</strong>, D.B.S inter college is a center of
              excellence in education. We believe in nurturing every child’s
              potential through modern learning techniques, character building,
              and a strong foundation in values.
            </p>
            <p className="text-gray-600 mb-4">
              Our school is equipped with cutting-edge infrastructure,
              well-qualified faculty, and a learning-friendly environment that
              inspires students to think creatively and act responsibly.
            </p>
            <p className="text-gray-600">
              Join us in building a bright, ethical, and capable generation for
              the future.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=60"
              alt="Students"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-700">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading school that nurtures students into confident,
                competent, and compassionate individuals who are ready to meet
                global challenges.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-700">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality education that develops intellectual,
                emotional, and physical capabilities, while instilling strong
                moral values and social responsibility.
              </p>
            </div>
          </div>
        </div>

       {/* Principal Message with Image */}
<div className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
  {/* Principal Image */}
  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-emerald-700 shadow-md">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60"
      alt="Principal"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Message Text */}
  <div className="text-center md:text-left">
    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Message from the Principal</h3>
    <p className="text-gray-700 text-lg italic">
      "At D.B.S Inter college, we believe education is not just about
      academics — it’s about preparing students for life. Our mission is to
      create a nurturing environment where students grow with confidence,
      curiosity, and courage."
    </p>
    <p className="mt-4 font-semibold text-emerald-700">– Mrs. Renu Sharma, Principal</p>
  </div>
</div>
<Link className="text-blue-500 text-end" to={"/committe"}>
Committee Members
</Link>
      </div>

      
    </section>

      <section className="bg-gray-100 py-14 px-4 sm:px-8 lg:px-20 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-700 mb-6">📍 Our Location</h2>

          <div className="flex items-start gap-4 mb-4">
            <FaMapMarkerAlt className="text-emerald-700 mt-1" size={20} />
            <p className="text-gray-700">
              D.B.S Inter College, Sheesham jhari muni ki reti , Rishikesh<br />
              Tehri garhwal , Uttarakhand, India – 249137 
            </p>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <FaPhoneAlt className="text-emerald-700 mt-1" size={18} />
            <p className="text-gray-700">+91 </p>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-emerald-700 mt-1" size={18} />
            <p className="text-gray-700">dbsintercollege@gamil.com</p>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="School Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.372391160554!2d78.30376527534766!3d30.11215587488956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091610c4328839%3A0x1aa0ed7e0d021443!2sD.B.S%20INTER%20COLLEGE!5e0!3m2!1sen!2sin!4v1754197145933!5m2!1sen!2sin" 
          ></iframe>
        </div>
      </div>
    </section>
    
      </div>
  );
};

export default AboutSection;
