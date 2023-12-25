import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { dispatch, questions } = useQuiz();
  const numQuestions = questions.length;

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
