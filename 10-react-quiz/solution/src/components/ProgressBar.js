import { useQuiz } from "../contexts/QuizContext";

export default function ProgressBar() {
  const { points, index, answer, questions, maxPointsPossible } = useQuiz();
  const numQuestions = questions.length;

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPointsPossible}
      </p>
    </header>
  );
}
