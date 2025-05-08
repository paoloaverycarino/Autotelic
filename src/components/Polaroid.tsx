import React, { useState } from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  className?: string;
  title: string; // Added title prop
  description: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ src, alt, className, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening and closing the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to close the modal when clicking outside the image
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {/* Polaroid image */}
      <img
        src={src}
        alt={alt}
        className={`object-cover ${className} transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer`} 
        onClick={toggleModal} // Open the modal when the image is clicked
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close the modal if clicking outside the image
        >
          <div className="bg-transparent p-6 rounded-lg flex justify-center items-center space-x-6">
            
            {/* Polaroid Image */}
            <img
              src={src}
              alt={alt}
              className="max-w-[30%] max-h-[30%] object-contain"
            />

            {/* Title and Description */}
            <div className="text-white">
              {/* Title */}
              <h1 className="text-4xl mb-4 font-bold font-neue">{title}</h1>
              {/* Description */}
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Polaroid;


    // <div className="h-screen w-full flex justify-center items-center bg-black mt-[-80px]">
    //   {/* Polaroid component with title and description */}
    //   <Polaroid
    //     src="/images/fruit.jpeg" // Image source
    //     alt="Polaroid of fruit"  // Alt text for accessibility
    //     className="w-40 sm:w-48 md:w-60 lg:w-72" // Resize the image responsively
    //     title="Delicious Fruit" // Title for the modal
    //     description="A beautiful shot of some fresh and vibrant fruit. I went to" // Description for the modal
    //   />
    // </div>



