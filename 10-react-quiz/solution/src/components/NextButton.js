import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { answer, dispatch, index, questions } = useQuiz();
  const numQuestions = questions.length;

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}
