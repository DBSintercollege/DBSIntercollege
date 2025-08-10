import React, { useState } from "react";

export default function Alumni() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Change to your actual password
  const correctPassword = "school2025";

  // Change to your actual hosted PDF link
  const alumniPDF =
    "./src/assets/class7.pdf";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Alumni Records
        </h2>

        {!isAuthenticated ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Access PDF
            </button>
          </form>
        ) : (
          <div className="mt-4">
            <p className="mb-2 text-gray-700 text-center">
              Alumni List PDF:
            </p>
            <iframe
              src={alumniPDF}
              title="Alumni PDF"
              className="w-full h-[500px] border rounded-lg"
            />
            <a
              href={alumniPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
