import PropTypes from "prop-types";

const Title = ({ title = "ssss", titleRef }) => {
  const arr = title.split("");
  return (
    <h1 id={title} ref={titleRef} className="flex text-center text-[8vw] mb-4 md:mb-0 md:text-[7vw] select-none">
      {arr.map((d, i) => (
        <div key={`${d}-${i}`} className={`span leading-[1.5] ${d === ' ' ? 'mx-6' : ''} NexaHeavy`}>
          {d}
        </div>
      ))}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  titleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]).isRequired,
};

export default Title;
