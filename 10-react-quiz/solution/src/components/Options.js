import { useQuiz } from "../contexts/QuizContext";

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer && "answer"} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={crypto.randomUUID()}
          onClick={() => dispatch({ type: "answered", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
