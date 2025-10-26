import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { src: "/school.jpg", label: "School Building", description: "Our modern campus facility" },
    { src: "/assembly.jpg", label: "Morning Assembly", description: "Daily gathering of students" },
    { src: "/resultday.jpg", label: "Result Day", description: "Celebrating achievements" },
    { src: "/classroom.jpg", label: "Classroom", description: "Interactive learning spaces" },
    { src: "/library.jpg", label: "Library", description: "Knowledge resource center" },
    { src: "/sports.jpg", label: "Sports Day", description: "Athletic excellence" }
  ];

  return (
    <>
      <section id="gallery" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="overflow-x-hidden max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              School <span className="text-blue-600">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore our vibrant campus life through these captured moments
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="max-w-full h-auto w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234299e1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='white'%3E${img.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ZoomIn className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-xl mb-1">{img.label}</h3>
                  <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {img.description}
                  </p>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-4 border-blue-600/0 group-hover:border-blue-600/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="max-w-full h-auto w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%234299e1' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dy='.3em' fill='white'%3E${selectedImage.label}%3C/text%3E%3C/svg%3E`;
              }}
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.label}</h3>
              <p className="text-blue-300 text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;