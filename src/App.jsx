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
import { Helmet, HelmetProvider } from "react-helmet-async"; // ✅ SEO package
import { Menu, X, Download, Mail, Phone, MapPin, Award, Users, BookOpen, Heart } from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <>
        {/* ✅ SEO META TAGS */}
        <Helmet>
          <title>
            Bright Moon School Faisalabad | Play to Matric | Quality Education Near Shadab Mor
          </title>
          <meta
            name="description"
            content="Bright Moon School Faisalabad offers education from Playgroup to Matric with modern classrooms, qualified teachers, and a focus on moral and academic excellence. Admissions open now!"
          />
          <meta
            name="keywords"
            content="Bright Moon School Faisalabad, school near Shadab Mor, play to matric school Faisalabad, best school Faisalabad"
          />
          <meta name="author" content="Bright Moon School Faisalabad" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://bright-moon-school.vercel.app/" />
        </Helmet>

        {/* ✅ Your Existing Layout */}
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
    </HelmetProvider>
  );
}
