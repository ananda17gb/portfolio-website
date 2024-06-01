import PropTypes from "prop-types";

function CardBig({ image, name, description, link }) {
  return (
    <>
      <div className="w-[300px] h-[600px] bg-[#74728F] rounded-xl p-8 gap-10 overflow-clip grid grid-rows-3">
        {link === "" ? (
          <div className="w-full h-auto flex justify-center items-center">
            <img src={image} alt={name} className="max-w-full max-h-full" />
          </div>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-auto flex justify-center items-center"
          >
            <img src={image} alt={name} className="max-w-full max-h-full" />
          </a>
        )}
        <p className="row-start-2 text-center">{name}</p>
        <p className="row-start-3 text-xl text-pretty">{description}</p>
      </div>
    </>
  );
}

CardBig.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default CardBig;
