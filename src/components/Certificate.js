import React, { useState } from "react";

// 🥋 Sports Certificates
import Cert1 from "../assets/Certificates/37th-national-games-goa-2023.jpg";
import Cert2 from "../assets/Certificates/39th-national-assam-2023.jpg";
import Cert3 from "../assets/Certificates/40th-national-2024-pondicherry.jpg";
import Cert4 from "../assets/Certificates/2023-Merit-State-Thiruvarur-34th-2023.jpg";
import Cert5 from "../assets/Certificates/Anna-University-Nagerkoil-2024.jpg";
import Cert6 from "../assets/Certificates/Form-2-Assam-Nationals-39th.jpg";
import Cert7 from "../assets/Certificates/Form-3-Punjab-1st-Year.jpg";
import Cert8 from "../assets/Certificates/Form-3-Punjab-3rd-Year.jpg";
import Cert9 from "../assets/Certificates/Thiruchi-State-Merit-35th-2024.jpg";
import Cert10 from "../assets/Certificates/36th-Thanjavur-State-Poomsae.jpg";
import Cert11 from "../assets/Certificates/36th-Thanjavur-State.jpg";
import Cert12 from "../assets/Certificates/38th-Junior-Nationals-Bronze.jpg";
import Cert14 from "../assets/Certificates/Form-2-Puducherry-Nationals.jpg";
import Cert17 from "../assets/Certificates/Khelo-India-Nationals.jpg";
import Cert18 from "../assets/Certificates/KheloIndiaLeagueNational.jpg";
import Cert19 from "../assets/Certificates/South-Zone-Nationals-Gold.jpg";
import Cert20 from "../assets/Certificates/Black-Belt.jpg";

// 🎓 Academic Certificates
import Acad1 from "../assets/Accadamics/Bull-Machineries-Pvt-Ltd-Internship.jpg";
import Acad2 from "../assets/Accadamics/Career-Essentials-GitHub.jpg";
import Acad3 from "../assets/Accadamics/Cloud-Computing&Devops.jpg";
import Acad4 from "../assets/Accadamics/Continuous-Integration&Delivery.jpg";
import Acad5 from "../assets/Accadamics/devtown.jpg";
import Acad6 from "../assets/Accadamics/FullStackApp-with-Bolt.jpg";
import Acad7 from "../assets/Accadamics/Introduction-Agile-Methodology.jpg";
import Acad8 from "../assets/Accadamics/JUNIOR-GRADE-TYPEWRITING.jpg";
import Acad9 from "../assets/Accadamics/NATIONAL-LEVEL-HACKATHON.jpg";
import Acad10 from "../assets/Accadamics/PAPER-PRESENTATION.jpg";
import Acad11 from "../assets/Accadamics/Technical-Quiz.jpg";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🥋 Sports Certificates
  const sportsCertificates = [
    { title: "37th National Games Goa", date: "2023", image: Cert1 },
    { title: "39th National Assam", date: "2023", image: Cert2 },
    { title: "40th National Pondicherry", date: "2024", image: Cert3 },
    { title: "Merit State Thiruvarur 34th", date: "2023", image: Cert4 },
    { title: "Anna University Nagerkoil", date: "2024", image: Cert5 },
    { title: "Form 2 Assam Nationals 39th", date: "2023", image: Cert6 },
    { title: "Form 3 Punjab 1st-Year", date: "2023", image: Cert7 },
    { title: "Form 3 Punjab 3rd-Year", date: "2023", image: Cert8 },
    { title: "Thiruchi State Merit 35th", date: "2024", image: Cert9 },
    { title: "36th Thanjavur State Poomsae", date: "2022", image: Cert10 },
    { title: "36th Thanjavur State", date: "2022", image: Cert11 },
    { title: "38th Junior Nationals Bronze", date: "2023", image: Cert12 },
    { title: "Form 2 Puducherry Nationals", date: "2023", image: Cert14 },
    { title: "Khelo India Nationals", date: "2023", image: Cert17 },
    { title: "Khelo India League", date: "2023", image: Cert18 },
    { title: "South Zone Nationals Gold", date: "2024", image: Cert19 },
    { title: "Black Belt Certification", date: "2025", image: Cert20 },
  ];

  // 🎓 Academic Certificates
  const academicCertificates = [
    {
      title: "Bull Machineries Pvt Ltd Internship",
      date: "2025",
      image: Acad1,
    },
    { title: "Career Essentials GitHub", date: "2024", image: Acad2 },
    { title: "Cloud Computing & DevOps", date: "2024", image: Acad3 },
    { title: "Continuous Integration & Delivery", date: "2024", image: Acad4 },
    { title: "Devtown Bootcamp", date: "2024", image: Acad5 },
    { title: "Full Stack App with Bolt", date: "2024", image: Acad6 },
    { title: "Introduction to Agile Methodology", date: "2024", image: Acad7 },
    { title: "Junior Grade Typewriting", date: "2022", image: Acad8 },
    { title: "National Level Hackathon", date: "2024", image: Acad9 },
    { title: "Paper Presentation", date: "2023", image: Acad10 },
    { title: "Technical Quiz", date: "2023", image: Acad11 },
  ];

  // 🧩 Sort certificates by date (latest first)
  const sortedSports = [...sportsCertificates].sort((a, b) => b.date - a.date);
  const sortedAcademics = [...academicCertificates].sort(
    (a, b) => b.date - a.date
  );

  // 🔍 Rendering reusable certificate grid
  const renderCertificates = (certList) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
      {certList.map((cert, index) => (
        <div
          key={index}
          className="relative group bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_20px_#a855f7] hover:border-fuchsia-500 transition-all duration-500 cursor-pointer"
          onClick={() => setSelectedImage(cert.image)}
        >
          <div className="w-full h-0 pb-[70%] relative">
            <img
              src={cert.image}
              alt={cert.title}
              className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
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
  );

  return (
    <section
      id="certificates"
      className="flex flex-col py-24 px-6 justify-center bg-[#0b0b0b] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 border-4 border-purple-600 rounded-xl opacity-10 blur-2xl pointer-events-none animate-pulse"></div>

      {/* Section Heading */}
      <div className="w-full text-center mb-16 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 drop-shadow-[0_0_25px_#ff00ff] hover:drop-shadow-[0_0_45px_#ff00ff] transition-all duration-500 mb-6">
          Certificates
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-sky-300 drop-shadow-[0_0_10px_#a855f7] font-medium">
          Balancing sports and studies isn’t a matter of luck — it takes
          consistency, courage, and commitment. I’ve learned that true strength
          comes from patience, perseverance, and dedication, not from
          perfection. These certificates are more than just recognition —
          they’re proof that when passion is guided by purpose and hard work,
          there are no limits to what can be achieved.
        </p>
      </div>

      {/* Sports Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-fuchsia-400 underline decoration-pink-500">
        Sports Certificates
      </h2>
      {renderCertificates(sortedSports)}

      {/* Academic Section */}
      <h2 className="text-3xl font-bold text-center mt-24 mb-8 text-fuchsia-400 underline decoration-yellow-400">
        Academic Certificates
      </h2>
      {renderCertificates(sortedAcademics)}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
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
