import React from 'react';
import Polaroid from '../components/Polaroid'; // Adjust the import based on the correct path

const Hero: React.FC = () => {
  return (
    <div className="hero flex justify-center items-center min-h-screen mt-[-80px]">
      <div className="video-container w-full max-w-6xl mx-auto px-4">
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ehH_52fzStw?si=nypKfkKOqOTiPNAV"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;




