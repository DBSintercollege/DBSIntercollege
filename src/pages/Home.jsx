import React from "react";
import { Link } from "react-router";
import backgroundimg from '../assets/image.jpg'

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* Hero Banner */}
      <section style={{backgroundImage:`url(${backgroundimg}`}} className={` text-emerald-900 py-20   min-h-screen bg-cover bg-center flex items-center justify-center`}>
        <div className="flex flex-col sm:flex-row w-full text-center bg-white/70 py-10 justify-center items-center ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/046/318/995/small/smiling-schoolboy-holding-a-book-with-backpack-on-transparent-background-png.png"
            alt=""
            className="w-50 animate-fade-in"
          />
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Welcome to D.B.S Inter College 
            </h1>
            <p className="text-sm md:text-sm mb-6 max-w-xl mx-auto">
              A place where learning begins, dreams grow, and leaders are made.
              Explore our holistic and inclusive approach to education.
            </p>
            <Link to="/gallery">
            <button className="bg-emerald-400 hover:bg-gray-300 active:bg-gray-300 text-black font-semibold py-2 px-6 rounded shadow cursor-pointer">
              Explore Campus
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-emerald-700 mb-12">
            Achive Your Golas With D.B.S School
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1089/1089129.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Experienced Faculty
              </h3>
              <p>
                Our passionate and qualified educators are dedicated to shaping
                young minds with innovative and student-focused teaching
                techniques.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center">
              <img
                src="https://www.freeiconspng.com/thumbs/classes-icon/classes-icon-17.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Smart Classrooms
              </h3>
              <p>
                Fully equipped digital classrooms enhance interactivity,
                comprehension, and student engagement in every lesson.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5d52020057622900012d00ed/1678413923858-4T8WW8BW8DPDV8HATQU2/LPPS-PC-icon-extra-curricular-activities.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Co-curricular Excellence
              </h3>
              <p>
                Balanced development through sports, music, arts, drama, and
                leadership activities to enrich every child’s potential.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/855/855601.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Secure Campus
              </h3>
              <p>
                Safety is our top priority with full CCTV surveillance, security
                staff, and a student-friendly environment.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center">
              <img
                src="https://www.pikpng.com/pngl/b/469-4693954_middle-school-education-icon-education-clipart.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Affordable Education
              </h3>
              <p>
                High-quality education at reasonable fees with scholarship
                options for deserving and underprivileged students.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7541/7541894.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                Parent Engagement
              </h3>
              <p>
                Regular communication, PTMs, and online access to progress
                reports keep parents informed and involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-100 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
            About Our School
          </h2>
          <p className="text-lg text-gray-700">
            D.B.S Inter College school is committed to nurturing excellence in
            every student. We emphasize academic brilliance, moral values, and
            skill development, shaping individuals who contribute to society
            with responsibility and compassion.
          </p>
        </div>
      </section>

      <div className="text-emerald-800 text-center space-y-3">
        <img
          src="https://static-bestcolleges.tosshub.com/2025/News/xe7PbSdvHAX03a8QyKrpsZugKp2RTr8NmBLGz4E2.jpg"
          alt=""
          className="mx-auto max-w-sm m-5 sm:max-w-xl md:max-w-3xl "
        />
        
          <h1 className="font-bold text-3xl sm:text:3xl">For Appointment Today!</h1>
          <p className="text-sm"> For details of admission and other query</p>
          <Link to="/contact">
          <button className="bg-emerald-400 hover:bg-gray-300 active:bg-gray-300 text-black font-semibold py-2 px-6 rounded shadow cursor-pointer mb-5">Contact us</button>
          
          </Link> 
        
      </div>

      {/* Vision and Mission */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Vision:</strong> To be a beacon of excellence in education
            by creating global citizens with strong values, critical thinking,
            and leadership qualities.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Mission:</strong> To deliver a student-centered education
            that develops intellectual, social, emotional, and physical skills
            through innovative and engaging learning environments.
          </p>
        </div>   
      </section>

      {/* School Stats */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-12">
            School at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-yellow-500">500+</p>
              <p className="text-gray-700">Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-500">30+</p>
              <p className="text-gray-700">Qualified Staff</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-500">15+</p>
              <p className="text-gray-700">Classrooms</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-500">10+</p>
              <p className="text-gray-700">Clubs & Events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
