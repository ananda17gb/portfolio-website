import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div className="w-80 rounded-xl px-16 flex justify-center">
        <img src={`plLogo/${props.image}`} alt={props.image} />
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string,
};

export default Card;
