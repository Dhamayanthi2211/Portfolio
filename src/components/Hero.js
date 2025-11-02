import HeroImg from "../assets/DhamayPic1.jpg";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    name: "DHAMAYANTHI M", // added non-breaking space between words
    subtitle:
      "I’m a passionate Full Stack Web Developer specializing in the MERN Stack, creating modern and scalable web applications.",
    social: {
      github: "https://github.com/Dhamayanthi2211",
      gmail: "mailto:ddhamayanthim@gmail.com",
      linkedin: "https://linkedin.com/in/dhamayanthi",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-24 md:py-32 bg-primary justify-center items-center md:items-start gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Hi, <br />
          I'm{" "}
          <span className="whitespace-nowrap bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            DHAMAYANTHI&nbsp;M
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-white max-w-xl">
          {config.subtitle}
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 py-8">
          {/* GitHub */}
          <a
            href={config.social.github}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-white p-3 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-lg hover:scale-110 transition-transform"
          >
            <AiOutlineGithub size={36} className="z-10 relative" />
            <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse"></span>
          </a>

          {/* Mail */}
          <a
            href={config.social.gmail}
            title="Email"
            className="relative group text-white p-3 rounded-full bg-gradient-to-br from-red-600 to-pink-500 shadow-lg hover:scale-110 transition-transform"
          >
            <AiOutlineMail size={36} className="z-10 relative" />
            <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse"></span>
          </a>

          {/* LinkedIn */}
          <a
            href={config.social.linkedin}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-white p-3 rounded-full bg-gradient-to-br from-blue-700 to-purple-600 shadow-lg hover:scale-110 transition-transform"
          >
            <AiOutlineLinkedin size={36} className="z-10 relative" />
            <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse"></span>
          </a>
        </div>

        {/* Contact Button */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          className="md:w-96 w-64 sm:w-72 rounded-full shadow-lg border-4 border-white"
          src={HeroImg}
          alt="Hero section image"
        />
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
}
