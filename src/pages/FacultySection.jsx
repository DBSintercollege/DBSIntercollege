import React from "react";

const facultyList = [
  {
    id: 1,
    name: "Mr. Rajesh Sharma",
    subject: "Mathematics Teacher",
    education: "M.Sc. Mathematics, B.Ed.",
    image: "./src/assets/staf1.jpg",
    description: "Dedicated to making math easy and fun for all students.",
  },
  {
    id: 2,
    name: "Mrs. Anita Verma",
    subject: "Science Teacher",
    education: "M.Sc. Physics, B.Ed.",
    image: "./src/assets/staf2.jpg",
    description: "Inspires young minds through engaging science activities.",
  },
  {
    id: 3,
    name: "Mr. Arvind Gupta",
    subject: "English Teacher",
    education: "M.A. English, B.Ed.",
    image: "./src/assets/staf3.jpg",
    description: "Encourages creativity and communication through language.",
  },
  {
    id: 4,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf4.jpg",
    description: "Leading the school with experience and strong values.",
  },
  {
    id: 5,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf5.jpg",
    description: "Leading the school with experience and strong values.",
  },
  {
    id: 6,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf6.jpg",
    description: "Leading the school with experience and strong values.",
  },
  {
    id: 7,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf7.jpg",
    description: "Leading the school with experience and strong values.",
  },
  {
    id: 8,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf8.jpg",
    description: "Leading the school with experience and strong values.",
  },
  {
    id: 9,
    name: "Mrs. Sunita Joshi",
    subject: "School Principal",
    education: "M.A. Education, M.Ed.",
    image: "./src/assets/staf9.jpg",
    description: "Leading the school with experience and strong values.",
  },
];

const FacultySection = () => {
  return (
    <section className="bg-gray-50 py-30 px-4 sm:px-8 lg:px-20 " id="faculty">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12">
           Meet Our Faculty
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {facultyList.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition animate-fade-in"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-56 object-fit "
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-emerald-800">
                  {faculty.name}
                </h3>
                <p className="text-sm text-emerald-600">{faculty.subject}</p>
                <p className="text-sm text-gray-700 italic mb-2">
                  🎓 {faculty.education}
                </p>
                <p className="text-gray-700 text-sm">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
