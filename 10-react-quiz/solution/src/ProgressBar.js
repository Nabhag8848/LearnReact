export default function ProgressBar({
  index,
  numQuestions,
  points,
  maxPointsPossible,
  answer,
}) {
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
