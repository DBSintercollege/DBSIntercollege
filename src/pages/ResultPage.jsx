import React, { useState } from "react";

const classData = {
  "8": {
    password: "class8pass",
    pdfUrl: "/src/assets/class7.pdf",
  },
  "9": {
    password: "class9pass",
    pdfUrl: "https://example.com/result-class-9.pdf",
  },
  "11": {
    password: "class11pass",
    pdfUrl: "https://example.com/result-class-11.pdf",
  },
};

const ResultPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");

  const handleClassClick = (cls) => {
    setSelectedClass(cls);
    setEnteredPassword("");
    setAccessGranted(false);
    setError("");
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword === classData[selectedClass].password) {
      setAccessGranted(true);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-30 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-emerald-700 mb-2">
         Student Result Portal
      </h2>
      <h1 className="text-xl font-bold text-center text-emerald-600 mb-10">Select Your class to access result</h1> 


      {!selectedClass ? (
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(classData).map((cls) => (
            <button
              key={cls}
              onClick={() => handleClassClick(cls)}
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Class {cls}
            </button>
          ))}
        </div>
      ) : !accessGranted ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-emerald-700">
            Enter password for Class {selectedClass}
          </h3>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-md mb-4"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            onClick={handlePasswordSubmit}
            className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">
            ✅ Access Granted – Class {selectedClass} Result
          </h3>
          <iframe
            src={classData[selectedClass].pdfUrl}
            title={`Class ${selectedClass} Result`}
            className="w-full max-w-4xl h-[600px] mx-auto border shadow-md"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
