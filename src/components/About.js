import AboutImg from "../assets/about.png";

export default function About() {
  const highlights = [
    "💻 Full Stack Web Developer (MERN Stack) – Building responsive, scalable, and visually engaging web applications using React.js, Node.js, Express.js, and MongoDB.",
    "🥋 National-Level Taekwondo Champion – Represented Anna University in All India University Tournaments and National Games, showcasing discipline, focus, and resilience.",
    "🚀 Project-Focused Innovator – Developed and deployed multiple full-stack projects, delivering clean code, creative solutions, and real-world impact.",
    "🛠️ Versatile & Fearless – Skilled in driving bikes, cars, and operating heavy machinery such as Backhoe Loaders, Hitachi, and JCBs, demonstrating adaptability and hands-on expertise.",
  ];

  return (
    <section
      className="flex flex-col md:flex-row bg-black px-5 text-white relative overflow-hidden"
      id="about"
    >
      {/* Glowing border ring */}
      <div className="absolute inset-0 border-4 border-fuchsia-500 rounded-xl opacity-10 blur-2xl pointer-events-none animate-pulse"></div>

      <div className="py-5 md:w-1/2 z-10 flex justify-center items-center">
        <img
          src={AboutImg}
          className="rounded-lg shadow-[0_0_40px_#fuchsia] hover:scale-105 transition-transform duration-500"
          alt="About Dhamayanthi"
        />
      </div>

      <div className="md:w-1/2 flex justify-center items-center z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-5 w-fit border-b-4 border-fuchsia-500 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-text-glow">
            About Me
          </h1>
          {highlights.map((line, index) => (
            <p
              key={index}
              className="pb-4 leading-relaxed text-gray-400 hover:text-white transition-colors duration-300 hover:scale-[1.02] hover:drop-shadow-[0_0_10px_#fuchsia]"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}