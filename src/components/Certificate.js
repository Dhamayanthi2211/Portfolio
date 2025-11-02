import React, { useState } from "react";

// Import certificate images from assets folder
import Cert1 from "../assets/Certificates/37th-national-games-goa-2023.jpg";
import Cert2 from "../assets/Certificates/39th-national-assam-2023.jpg";
import Cert3 from "../assets/Certificates/40th-national-2024-pondicherry.jpg";
import Cert4 from "../assets/Certificates/2023-Merit-State-Thiruvarur-34th-2023.jpg";
import Cert5 from "../assets/Certificates/Anna-University-Nagerkoil-2024.jpg";
import Cert6 from "../assets/Certificates/Form-2-Assam-Nationals-39th.jpg";
import Cert7 from "../assets/Certificates/Form-3-Punjab-1st-Year.jpg";
import Cert8 from "../assets/Certificates/Form-3-Punjab-3rd-Year.jpg";
import Cert9 from "../assets/Certificates/Thiruchi-State-Merit-35th-2024.jpg";

export default function Certificate() {
  const certificates = [
    { title: "37th National Games Goa", date: "2023", image: Cert1 },
    { title: "39th National Assam", date: "2023", image: Cert2 },
    { title: "40th National Pondicherry", date: "2024", image: Cert3 },
    { title: "Merit State Thiruvarur 34th", date: "2023", image: Cert4 },
    { title: "Anna University Nagerkoil", date: "2024", image: Cert5 },
    { title: "Form 2 Assam Nationals 39th", date: "2023", image: Cert6 },
    { title: "Form-3 Punjab 1st-Year", date: "2023", image: Cert7 },
    { title: "Form-3 Punjab 3rd-Year", date: "2023", image: Cert8 },
    { title: "Thiruchi State Merit 35th", date: "2024", image: Cert9 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certificates"
      className="flex flex-col py-24 px-6 justify-center bg-[#0b0b0b] text-white relative overflow-hidden"
    >
      {/* Neon border background glow */}
      <div className="absolute inset-0 border-4 border-purple-600 rounded-xl opacity-10 blur-2xl pointer-events-none animate-pulse"></div>

      {/* Heading */}
      <div className="w-full text-center mb-16 z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
          drop-shadow-[0_0_25px_#ff00ff] hover:drop-shadow-[0_0_45px_#ff00ff] 
          transition-all duration-500 mb-6"
        >
          Certificates
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-center 
          text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 
          drop-shadow-[0_0_8px_#c084fc]"
        >
          A showcase of my verified certificates highlighting achievements in
          Taekwondo, academics, and excellence across various competitions.
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_20px_#a855f7] hover:border-fuchsia-500 transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedImage(cert.image)} // ✅ Open full image on click
          >
            {/* Certificate Image */}
            <div className="w-full h-0 pb-[70%] relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-xl font-bold mb-2 text-fuchsia-400">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
              <span className="text-xs text-gray-300 italic">
                Click to view full
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)} // ✅ Close on click
        >
          <img
            src={selectedImage}
            alt="Full Certificate"
            className="max-w-full max-h-[90vh] rounded-xl shadow-[0_0_40px_#a855f7]"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-fuchsia-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
