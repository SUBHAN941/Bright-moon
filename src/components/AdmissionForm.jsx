import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function SchoolHero() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dpihwq9", // 👈 paste here
        "template_7ax7w8g", // 👈 paste here
        {
          name: formData.name,
          email: formData.email,
          grade: formData.grade,
          message: formData.message,
        },
        "CRSDtCgkpZKZWu3DA" // 👈 paste here
      )
      .then(
        (result) => {
          alert("✅ Application sent successfully!");
          setShowModal(false);
          setFormData({ name: "", email: "", grade: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div>
      {/* ...your hero content here... */}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 sm:w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Apply for Admission</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
              <input
                type="text"
                name="grade"
                placeholder="Grade / Class"
                value={formData.grade}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Message or Additional Info"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
