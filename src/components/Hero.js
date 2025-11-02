import HeroImg from "../assets/DhamyPicBlack.jpg";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    name: "DHAMAYANTHI M",
    subtitle:
      "I’m a passionate Full Stack Web Developer specializing in the MERN Stack, creating modern and scalable web applications.",
    social: {
      github: "https://github.com/Dhamayanthi2211",
      gmail: "mailto:ddhamayanthim@gmail.com",
      linkedin: "https://linkedin.com/in/dhamayanthi",
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-16 bg-primary">
      {/* Left Section */}
      <div className="md:w-[52%] flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-[3.4rem] font-bold leading-tight md:leading-[1.2]">
          Hi,&nbsp;
          <span className="whitespace-nowrap">
            I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              {config.name}
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mt-6 text-white max-w-xl">
          {config.subtitle}
        </p>

        {/* Social Links */}
        <div className="flex gap-6 py-8">
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

          <a
            href={config.social.gmail}
            title="Email"
            className="relative group text-white p-3 rounded-full bg-gradient-to-br from-red-600 to-pink-500 shadow-lg hover:scale-110 transition-transform"
          >
            <AiOutlineMail size={36} className="z-10 relative" />
            <span className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse"></span>
          </a>

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

        <a
          href="#contact"
          className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary transition"
        >
          Let’s Connect
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-[48%] flex justify-center items-center md:-ml-10 lg:-ml-16">
        <img
          src={HeroImg}
          alt="Dhamayanthi M"
          className="w-full max-w-[340px] h-[400px] object-cover rounded-t-[0.75rem] rounded-b-[3rem] shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
