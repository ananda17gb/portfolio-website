import PropTypes from "prop-types";

function CardBig({ image, name, description, link }) {
  return (
    <>
      <div className="w-[300px] h-[600px] bg-[#6B728E] rounded-xl p-8 gap-10 overflow-clip grid grid-rows-3 border-[#50577A] border-2 ">
        {image && link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-auto flex justify-center items-center"
          >
            <img
              src={image}
              alt={name}
              className="max-w-full max-h-full hover:transform-gpu hover:scale-110 hover:transition duration-200"
            />
          </a>
        ) : image ? (
          <div className="w-full h-auto flex justify-center items-center">
            <img src={image} alt={name} className="max-w-full max-h-full" />
          </div>
        ) : link ? (
          <div className="w-[100%] h-[100%]"></div>
        ) : (
          <div className="w-[100%] h-[100%]"></div>
        )}
        {name && link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <p className="row-start-2 text-center hover:underline">{name}</p>
          </a>
        ) : name ? (
          <p className="row-start-2 text-center">{name}</p>
        ) : null}
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
