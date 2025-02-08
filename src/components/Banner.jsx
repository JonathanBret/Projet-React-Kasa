import PropTypes from 'prop-types';
import "../style/Banner.scss";

const Banner = ({ image, showText = true, overlayOpacity = 0.6 }) => {
  const backgroundStyle = `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${image})`;

  return (
    <div 
      className="banner" 
      style={{ backgroundImage: backgroundStyle }}
    >
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  showText: PropTypes.bool,
  overlayOpacity: PropTypes.number
};

export default Banner;
