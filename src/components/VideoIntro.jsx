import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoIntro = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Dentist</h2>
        <p className="text-gray-600 mb-6">
          Watch this short video to understand our philosophy, care approach, and what makes SmileCare different.
        </p>

        <div className="relative mx-auto max-w-2xl">
          {!open && (
            <div
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/video-thumb.jpg"
                alt="Intro Video"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow">
                  <FaPlay className="text-xl text-blue-600" />
                  <span className="font-semibold text-blue-600">Watch Video</span>
                </div>
              </div>
            </div>
          )}

          {open && (
            <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow"
                src="https://www.youtube.com/embed/lR5ONQ2tYZw?autoplay=1"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
                onClick={() => setOpen(false)}
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
