import { useState } from 'react';
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setResumeFile(file);
      setResumeUrl(url);
    }
  };

  const handleDelete = () => {
    setResumeFile(null);
    setResumeUrl(null);
  };

  return (
    <section
      id="resume"
      className="flex flex-col bg-primary px-6 py-20 text-white relative overflow-hidden animate-fade-in"
    >
      {/* Glowing border ring */}
      <div className="absolute inset-0 border-4 border-accent rounded-xl opacity-10 blur-2xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row z-10">
        {/* Resume Image */}
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-[300px] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            src={ResumeImg}
            alt="Resume Visual"
          />
        </div>

        {/* Resume Upload & Download */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <h1
  className="text-6xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text 
  bg-gradient-to-r from-blue-400 via-yellow-400 via-violet-500 to-pink-500 
  drop-shadow-[0_0_25px_#ff00ff] hover:drop-shadow-[0_0_45px_#ff00ff] 
  transition-all duration-500 text-center mb-8"
>
  Resume
</h1>

          {!resumeFile ? (
            <>
              <p className="pb-5 text-base text-gray-300">
                Upload your resume (PDF or image).
              </p>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={handleUpload}
                className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-secondary file:text-white hover:file:bg-yellow-400 transition"
              />
            </>
          ) : (
            <>
              <p className="pb-5 text-base text-gray-300">
                All my skills, experience, and projects—ready for your review.
              </p>
              <a
                href={resumeUrl}
                download={resumeFile.name}
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold hover:from-white hover:to-white hover:text-secondary transition-all duration-300 shadow-lg"
              >
                🔽 Download Resume
              </a>
              <button
                onClick={handleDelete}
                className="mt-4 text-sm underline text-red-300 hover:text-red-500 transition"
              >
                Upload New Resume
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}