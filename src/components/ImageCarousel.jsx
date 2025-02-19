import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/ImageCarousel.scss"; 

const ImageCarousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={title} className="carousel-image" />

      {pictures.length > 1 && (
        <button className="carousel-button left" onClick={prevImage}>
          <FaChevronLeft />
        </button>
      )}

      {pictures.length > 1 && (
        <button className="carousel-button right" onClick={nextImage}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

ImageCarousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCarousel;
