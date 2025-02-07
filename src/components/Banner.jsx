import PropTypes from 'prop-types';
import "../style/Banner.scss";

const Banner = ({ image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})` }}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};


Banner.propTypes = {
  image: PropTypes.string.isRequired, 
};

export default Banner;
