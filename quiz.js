import { useState } from "react";

const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Managing Links", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which CSS property is used to change text color?", options: ["text-color", "color", "font-color", "background-color"], answer: "color" },
  { question: "What is the correct syntax to link an external CSS file in HTML?", options: ["<link rel='stylesheet' href='style.css'>", "<css src='style.css'>", "<style src='style.css'>", "<stylesheet>style.css</stylesheet>"], answer: "<link rel='stylesheet' href='style.css'>" },
  { question: "Which JavaScript method is used to select an HTML element by ID?", options: ["getElementByClassName", "querySelector", "getElementById", "getElementsByTagName"], answer: "getElementById" },
  { question: "Which framework is commonly used for building responsive web pages?", options: ["Angular", "Bootstrap", "React", "Django"], answer: "Bootstrap" }
];

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[index].answer) setScore(score + 1);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  return finished ? (
    <div>
      <h2>Your score: {score} / {questions.length}</h2>
      <button onClick={restartQuiz}>Start Again</button>
    </div>
  ) : (
    <div>
      <h2>{questions[index].question}</h2>
      {questions[index].options.map((opt, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="quiz"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={handleNext} disabled={!selected}>Next</button>
    </div>
  );
}