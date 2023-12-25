import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, dispatch, maxPointsPossible } = useQuiz();

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPointsPossible}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
