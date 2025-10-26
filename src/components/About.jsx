import React from 'react';
import { Award, Target, Eye, Heart, Users, Trophy } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '2000+', label: 'Students' },
    { number: '150+', label: 'Faculty Members' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="overflow-x-hidden min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-wrap">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">
                Excellence School
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Our School
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2">
            Nurturing young minds and shaping future leaders through quality
            education and holistic development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-blue-50 p-6 sm:p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To provide a nurturing and stimulating environment where students
              can achieve academic excellence, develop strong character, and
              become responsible global citizens.
            </p>
          </div>

          <div className="bg-green-50 p-6 sm:p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="w-8 sm:w-10 h-8 sm:h-10 text-green-600 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To be recognized as a leading educational institution that empowers
              students to excel in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We uphold honesty, transparency, and ethical behavior in all our
                actions and decisions.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Respect</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We value diversity and treat every individual with dignity,
                kindness, and understanding.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We pursue the highest standards in education and encourage
                students to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
