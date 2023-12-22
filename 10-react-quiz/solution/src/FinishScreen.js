export default function FinishScreen({ points, maxPointsPossible, dispatch }) {
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
