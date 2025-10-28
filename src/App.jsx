import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import FemaleStaff from "./components/FemaleStaff";
import Achievement from "./components/Achivement";
import Gallery from "./components/Galerry";
import DateSheet from "./components/DateSheett";
import Contact from "./components/Contactt";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import SEO from "./components/SEO"; // ✅ new component

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ SEO tags */}
      <SEO
        title="Bright Moon School Faisalabad | Play to Matric | Quality Education Near Shadab Mor"
        description="Bright Moon School Faisalabad offers education from Playgroup to Matric with modern classrooms, qualified teachers, and a focus on moral and academic excellence."
        keywords="Bright Moon School Faisalabad, school near Shadab Mor, play to matric school Faisalabad, best school Faisalabad"
        url="https://bright-moon-school.vercel.app/"
      />

      {/* ✅ your existing layout */}
      <div className="min-h-screen bg-gray-50">
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Hero />
        <About />
        <Service />
        <FemaleStaff />
        <Achievement />
        <Gallery />
        <DateSheet />
        <SocialMedia />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
