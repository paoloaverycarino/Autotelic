import { useState, useEffect } from "react";

export default function HeroCarousel() {
  // Define your slides data here
  const slides = [
    {
      image: "/imgs/img1.jpg", // Path to image in public folder
      title: "Title 1",
      description: "This is the first slide description.",
    },
    {
      image: "/imgs/img2.jpg", // Path to image in public folder
      title: "Title 2",
      description: "This is the second slide description.",
    },
    {
      image: "/imgs/img3.jpg", // Path to image in public folder
      title: "Title 3",
      description: "This is the third slide description.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // To track slide direction
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to go to the previous slide
  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to open modal with specific image
  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Auto advance slides every 5 seconds, but pause when modal is open
  useEffect(() => {
    if (!modalOpen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [modalOpen]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Carousel container */}
      <div className="relative w-full h-full">
        {/* Slides container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            // Calculate position based on index and current slide
            let position = "translate-x-full"; // Default position (right side)
            
            if (index === currentIndex) {
              position = "translate-x-0"; // Current slide (center)
            } else if (
              (direction === "right" && index === (currentIndex - 1 + slides.length) % slides.length) ||
              (direction === "left" && index === (currentIndex + 1) % slides.length)
            ) {
              position = "-translate-x-full"; // Previous slide (left side)
            }
            
            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-700 ease-in-out ${position}`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center p-4">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <button 
                    onClick={() => openModal(slide.image)}
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    View Image
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-5 text-3xl rounded-full opacity-70 hover:opacity-100 transition z-10"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-5 text-3xl rounded-full opacity-70 hover:opacity-100 transition z-10"
        >
          →
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <img 
              src={modalImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            <button 
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-opacity-90"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
