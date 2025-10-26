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
    <section id="resume" className="flex flex-col bg-secondary px-5 py-16 text-white animate-fade-in">
      {/* Resume Section */}
      <div className="flex flex-col md:flex-row">
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
          <img className="w-[300px] rounded shadow-lg" src={ResumeImg} alt="Resume Visual" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">Resume</h1>

          {!resumeFile ? (
            <>
              <p className="pb-5 text-base">Upload your resume (PDF or image).</p>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={handleUpload}
                className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary file:text-white hover:file:bg-yellow-400 transition"
              />
            </>
          ) : (
            <>
              <p className="pb-5 text-base">
                All my skills, experience, and projects—ready for your review
              </p>
              <a href={resumeUrl} download={resumeFile.name} className="btn mt-2">
                Download Resume
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
