import React from "react";

const achievements = [
  {
    title: "Best School Award",
    description:
      "Our school won the Best School Award for excellence in academics and extracurricular activities.",
    year: "2024",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "State-Level Sports Winner",
    description:
      "Our students secured 1st place in the state-level football championship.",
    year: "2023",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Science Exhibition Champion",
    description:
      "The school science club bagged the champion trophy at the National Science Fair.",
    year: "2022",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Cultural Fest Winner",
    description:
      "Our school dance and music team won multiple awards at the state cultural festival.",
    year: "2021",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Top School in Board Results",
    description:
      "Achieved the highest average marks in the district board examinations.",
    year: "2020",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function Achievements() {
  return (
    <div className="px-4 py-30 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        School Achievements
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              <span className="block mt-4 text-sm text-gray-500">
                Year : {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
