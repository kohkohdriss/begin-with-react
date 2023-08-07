import { useState } from "react";

function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  const error = inputValue.includes("f");

  function checkValue(value) {
    if (!inputValue.includes("f")) {
      setInputValue(value);
    }
  }

  return (
    <div>
      {error && <h2>attention tu as utilisé la lettre f</h2>}
      <textarea
        value={inputValue}
        onChange={(e) => checkValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
}

export default QuestionForm;
