export default function Contact() {
  const config = {
    email: "ddhamayanthim@gmail.com",
    phone: "+91 9080244112",
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-primary px-6 py-32 text-white relative overflow-hidden animate-fade-in"
    >
      {/* Glowing border ring */}
      <div className="absolute inset-0 border-4 border-secondary rounded-xl opacity-30 blur-lg pointer-events-none"></div>

      {/* Content */}
      <div className="z-10 text-center max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-text-glow">
          Contact
        </h1>

        <p className="text-lg mb-6 font-light tracking-wide">
          I welcome opportunities to collaborate on innovative projects, apply
          my full-stack development skills, and contribute to impactful
          solutions. Feel free to reach out for professional discussions or
          potential collaborations.
        </p>

        <div className="space-y-4 text-base font-medium">
          <p>
            <span className="text-accent font-bold">📧 Email:</span>{" "}
            <a
              href={`mailto:${config.email}`}
              className="underline hover:text-yellow-300 transition-colors duration-300"
            >
              {config.email}
            </a>
          </p>
          <p>
            <span className="text-accent font-bold">📞 Phone:</span>{" "}
            <a
              href={`tel:${config.phone}`}
              className="underline hover:text-yellow-300 transition-colors duration-300"
            >
              {config.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}