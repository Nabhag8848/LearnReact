import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

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

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const maxPointsPossible = state.questions.reduce(
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
    <QuizContext.Provider value={{ ...state, maxPointsPossible, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext is used outside of QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
