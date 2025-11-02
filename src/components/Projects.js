import websiteImg1 from "../assets/book world project.png";
import websiteImg2 from "../assets/Chatbot-Project.png";
import websiteImg3 from "../assets/YOUTUBE PROJECT.png";

export default function Projects() {
  const projects = [
    {
      image: websiteImg1,
      description:
        "📚 BookWorld: A dynamic book store UI with category filters and cart functionality. Built with React.",
      link: "https://dhamayanthi2211.github.io/BookWorld-Project/",
    },
    {
      image: websiteImg2,
      description:
        "🎥 YouTube Clone: A responsive video streaming UI with search and playback features. Built with React and RapidAPI.",
      link: "https://dhamayanthi2211.github.io/Youtube-Project/",
    },
    {
      image: websiteImg3,
      description:
        "🤖 Chatbot UI: A sleek and interactive chatbot interface with animated transitions. Built with HTML, CSS, and JavaScript.",
      link: "https://dhamayanthi2211.github.io/Chatbot-Project/",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col py-24 px-6 justify-center bg-black text-white relative overflow-hidden"
    >
      {/* Glowing border ring */}
      <div className="absolute inset-0 border-4 border-fuchsia-500 rounded-xl opacity-10 blur-2xl pointer-events-none animate-pulse"></div>

      {/* Section Heading */}
      <div className="w-full text-center mb-16 z-10">
        <h1
          className="text-6xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 
          drop-shadow-[0_0_25px_#ff00ff] hover:drop-shadow-[0_0_45px_#ff00ff] 
          transition-all duration-500 text-center mb-8"
        >
          My Projects
        </h1>

        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-white via-fuchsia-200 to-violet-300 
          drop-shadow-[0_0_15px_#ffb6ff] hover:drop-shadow-[0_0_25px_#ffb6ff] 
          transition-all duration-500"
        >
          Explore my portfolio showcasing frontend, full-stack, and static
          website projects. Each one reflects technical expertise, creative
          design, and real-world problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-[0_0_20px_#fuchsia] border border-gray-800 hover:border-fuchsia-500 transition-all duration-500 bg-[#111]"
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 shadow-[0_0_15px_#fuchsia]"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-6">
              <p className="text-white text-base font-medium mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
