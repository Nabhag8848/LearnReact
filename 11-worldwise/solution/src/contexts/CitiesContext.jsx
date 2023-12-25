import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = `http://localhost:8080`;
const CitiesContext = createContext();

function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "start": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "cities/loaded": {
      return {
        ...state,
        cities: payload,
      };
    }
    case "city/loaded": {
      return {
        ...state,
        currentCity: payload,
      };
    }
    case "city/created": {
      return {
        ...state,
        cities: [...state.cities, payload],
        currentCity: payload,
      };
    }
    case "city/deleted": {
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== payload),
        currentCity: {},
      };
    }
    case "finish": {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      throw new Error("Couldn't Resolved with Action");
    }
  }
}

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function getCities() {
    dispatch({ type: "start" });

    try {
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      dispatch({ type: "cities/loaded", payload: data });
    } catch (err) {
      alert("Error when fetching Cities");
    } finally {
      dispatch({ type: "finish" });
    }
  }

  async function getCityById(id) {
    if (id == currentCity.id) return;

    dispatch({ type: "start" });

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (err) {
      alert("Error when fetching CityById");
    } finally {
      dispatch({ type: "finish" });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "start" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      alert("Error when creating City");
    } finally {
      dispatch({ type: "finish" });
    }
  }

  async function deleteCityById(id) {
    dispatch({ type: "start" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      alert("Error when Deleting City");
    } finally {
      dispatch({ type: "finish" });
    }
  }

  useEffect(function () {
    getCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        isLoading,
        cities,
        currentCity,
        getCityById,
        createCity,
        deleteCityById,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
