import PropTypes from 'prop-types';

const SpanCard = ({image, text}) => {
  return (
    <span
      style={{ backgroundImage: `url(${image})` }}
      className="bg-center bg-cover font-bold text-white h-48 flex flex-col items-center justify-center text-2xl shadow-xl rounded-md hover:cursor-pointer relative"
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <h1 className="relative">{text}</h1>
    </span>
  );
};

SpanCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default SpanCard;