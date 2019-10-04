import React, { useState, useEffect } from "react";
import dyslexiaFunc from './dyslexia';

function Dyslexia({ text, delay }) {
  const [dyslexiaText, setText] = useState();
  useEffect(() => {
    handleChange();
  });

  const handleChange = () => {
    setTimeout(
      () =>
        setText(
          dyslexiaFunc(text, {
            minWordLength: 2,
            scrambleChance: 80
          })
        ),
      delay
    );
  };

  return <p style={{ margin: 0, padding: 0 }}>{dyslexiaText}</p>;
}

export default Dyslexia;
