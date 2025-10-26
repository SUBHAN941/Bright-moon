import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";

export default function SchoolHero() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleApplyClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dpihwq9", // ✅ your Service ID
        "template_7ax7w8g", // ✅ your Template ID
        {
          name: formData.name,
          email: formData.email,
          grade: formData.grade,
          message: formData.message,
        },
        "CRSDtCgkpZKZWu3DA" // ✅ your Public Key
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
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Excellence in Education Since 1990
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bright Moon{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Public High School
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              Nurturing young minds and building tomorrow's leaders through quality education,
              strong values, and holistic development.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-sm sm:text-lg">Jhand Road, Mughalabad, Punjab</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Apply Now
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-4 pt-6 border-t border-gray-200 mt-4">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm sm:text-base">+92-XXX-XXXXXXX</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm sm:text-base">
                  info@brightmoonschool.edu.pk
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm sm:max-w-md transform hover:scale-105 transition duration-300 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Principal's Message
              </div>

              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">Principal Name</h3>
                <p className="text-blue-600 font-semibold text-base">M.Ed, B.Ed</p>
                <p className="text-gray-600 italic text-sm sm:text-base px-2">
                  "Education is the most powerful weapon which you can use to change the world.
                  At Bright Moon, we are committed to shaping future leaders with knowledge,
                  integrity, and compassion."
                </p>
              </div>
            </div>

            {/* Background Circles */}
            <div className="absolute -z-10 top-10 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {[ 
            { value: "2000+", label: "Students", color: "text-blue-600" },
            { value: "100+", label: "Teachers", color: "text-indigo-600" },
            { value: "95%", label: "Success Rate", color: "text-purple-600" },
            { value: "30+", label: "Years Legacy", color: "text-pink-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition"
            >
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 sm:w-96 p-6 relative animate-slide-up">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
              Apply for Admission
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                name="grade"
                placeholder="Grade / Class"
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Message or Additional Info"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
