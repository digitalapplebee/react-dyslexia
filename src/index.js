import React, { useState, useEffect } from "react";
import dyslexiaFunc from './dyslexia';

function Dyslexia({ 
  text,
  delay,
  minWordLength,
  scrambleChance
}) {

  const [dyslexiaText, setText] = useState();

  useEffect(() => {
    handleChange();
  });

  const handleChange = () => {
    setTimeout(
      () =>
        setText(
          dyslexiaFunc(text || 'Dyslexia', {
            minWordLength: minWordLength || 2,
            scrambleChance: scrambleChance || 80
          })
        ),
      delay || 2000
    );
  };

  return <p style={{ margin: 0, padding: 0 }}>{dyslexiaText}</p>;
}

export default Dyslexia;
