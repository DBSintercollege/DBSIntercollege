import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ComplainForm = () => {
  const [activeTab, setActiveTab] = useState("child");
  const childFormRef = useRef();
  const otherFormRef = useRef();

  const sendChildComplaint = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pkpc21i",
        "template_a33kj5m",
        childFormRef.current,
        "WU0MXO0nGH01YTVAO"
      )
      .then(() => {
        alert("Child complaint sent!");
        childFormRef.current.reset();
      })
      .catch((err) => console.error(err));
  };

  const sendOtherComplaint = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pkpc21i",
        "template_a33kj5m",
        otherFormRef.current,
        "WU0MXO0nGH01YTVAO"
      )
      .then(() => {
        alert("Other complaint sent!");
        otherFormRef.current.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-xl  text-emerald-800 p-6 ">
        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row mb-6">
          <button
            className={`flex-1 py-2 text-center font-semibold rounded-t sm:rounded-none sm:rounded-l ${
              activeTab === "child" ? "bg-emerald-700 text-white" : "bg-gray-100 text-emerald-800"
            }`}
            onClick={() => setActiveTab("child")}
          >
            Child Complain
          </button>
          <button
            className={`flex-1 py-2 text-center font-semibold rounded-b sm:rounded-none sm:rounded-r ${
              activeTab === "other" ? "bg-emerald-700 text-white" : "bg-gray-100 text-emerald-800"
            }`}
            onClick={() => setActiveTab("other")}
          >
            Other Issue
          </button>
        </div>

        {/* Child Complaint Form */}
        {activeTab === "child" && (
          <form
            ref={childFormRef}
            onSubmit={sendChildComplaint}
            className="space-y-4"
          >
            <h2 className="text-lg font-bold mb-2">Child Complaint Form</h2>
            <input
              name="child_name"
              placeholder="Child Name"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            />
            <input
              name="parent_mobile"
              placeholder="Parent Mobile"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            />
            <textarea
              name="complain"
              placeholder="Your Complaint"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 py-3 rounded font-semibold text-white"
            >
              Submit
             
            </button>
          </form>
        )}

        {/* Other Complaint Form */}
        {activeTab === "other" && (
          <form
            ref={otherFormRef}
            onSubmit={sendOtherComplaint}
            className="space-y-4"
          >
            <h2 className="text-lg font-bold mb-2 text-emerald-700">Other issues Complaint Form</h2>
            <input
              name="student_name"
              placeholder=" Name"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            />
            <input
              name="student_mobile"
              placeholder="Mobile Number"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            />
            <input
              name="regarding"
              placeholder="Regarding (e.g. Teacher)"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            />
            <textarea
              name="desc"
              placeholder="Complaint Description"
              className="w-full p-3 rounded bg-gray-100 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-green-800 py-3 rounded font-semibold text-white"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComplainForm;
