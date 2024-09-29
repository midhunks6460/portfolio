import PropTypes from 'prop-types'; // Import PropTypes for prop validation

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

// PropTypes for validation
SkillList.propTypes = {
  src: PropTypes.string.isRequired,  // Ensure 'src' is a required string
  skill: PropTypes.string.isRequired, // Ensure 'skill' is a required string
};

export default SkillList;
