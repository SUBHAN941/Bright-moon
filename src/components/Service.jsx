import React from 'react';
import {
  Award,
  BookOpen,
  Users,
  Trophy,
  Microscope,
  Palette,
  Globe,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Academic Excellence',
      description:
        'Comprehensive curriculum from elementary to high school with focus on STEM and humanities.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Faculty',
      description:
        "Highly qualified teachers dedicated to nurturing each student's potential and growth.",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Science Labs',
      description:
        'State-of-the-art laboratories for physics, chemistry, biology, and computer science.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Arts & Culture',
      description:
        'Music, dance, drama, and visual arts programs to foster creativity and expression.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Sports Facilities',
      description:
        'Modern sports complex with facilities for cricket, football, basketball, and athletics.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Exposure',
      description:
        'International exchange programs and global curriculum to prepare students for the world.',
    },
  ];

  return (
    <div className="overflow-x-hidden min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Excellence School
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive educational services designed to support every aspect
            of student development
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Additional Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Library & Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Extensive collection of books, digital resources, and quiet study
                spaces for research and learning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Over 10,000 books and periodicals</li>
                <li>• Digital library access</li>
                <li>• Reading rooms and study areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Transport Services
              </h3>
              <p className="text-gray-600 mb-4">
                Safe and reliable transportation covering all major areas of the
                city with GPS tracking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• GPS-enabled buses</li>
                <li>• Trained drivers and attendants</li>
                <li>• Multiple routes across the city</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
