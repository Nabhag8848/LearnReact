import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved": {
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    }

    case "dataFailed": {
      return {
        ...state,
        status: "error",
      };
    }

    case "start": {
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    }

    case "answered": {
      const { questions, index } = state;
      const question = questions.at(index);
      const { correctOption, points } = question;
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + points
            : state.points,
      };
    }

    case "next": {
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    }

    case "finish": {
      return { ...state, status: "finish" };
    }

    case "restart": {
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    }

    case "tick": {
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finish" : state.status,
      };
    }

    default: {
      throw new Error("Error");
    }
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPointsPossible = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(function () {
    fetch("http://localhost:8080/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <ProgressBar
              points={points}
              maxPointsPossible={maxPointsPossible}
              index={index}
              numQuestions={numQuestions}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <>
            <FinishScreen
              points={points}
              maxPointsPossible={maxPointsPossible}
              dispatch={dispatch}
            />
          </>
        )}
      </Main>
    </div>
  );
}
