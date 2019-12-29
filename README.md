## Installation

```bash
npm i react-dyslexia
```

### Example

```js
import React from "react";
import Dyslexia from "react-dyslexia";

function App() {
  return (
    <Dyslexia
      delay={700}
      text="There is no such thing as an accident. What we call by that name is the effect of some cause which we do not see."
    />
  );
}

export default App;
```


| name | types | default | Detail |
| ------ | ------ |------|------|
| text | String | 'Dyslexia' | Text for effect |
| delay | Number  | 500 | Delay of dyslexia effect |
| minWordLength | Number  | 4 |  Minimal word length |
| scrambleChance | Number  | 80 | Percentage chance of a word being scrambled |


### TODO LIST

* More customizations.
* Add support for Typescript.


If you want, you can contribute to https://github.com/digitalapplebee/react-dyslexia

Based on https://github.com/L1fescape/dyslexia