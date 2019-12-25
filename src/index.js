import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dyslexiaFunc from "./dyslexia";

function Dyslexia({ text, delay, minWordLength, scrambleChance }) {
  const [dyslexiaText, setText] = useState();

  useEffect(() => {
    handleChange();
  });

  const handleChange = () => {
    setTimeout(
      () =>
        setText(
          dyslexiaFunc(text, {
            minWordLength: minWordLength,
            scrambleChance: scrambleChance
          })
        ),
      delay
    );
  };

  return <p style={{ margin: 0, padding: 0 }}>{dyslexiaText}</p>;
}

Dyslexia.defaultProps = {
  text: "Dyslexia",
  delay: 500,
  minWordLength: 3,
  scrambleChance: 80
};

Dyslexia.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  minWordLength: PropTypes.number,
  scrambleChance: PropTypes.number
};

export default Dyslexia;
