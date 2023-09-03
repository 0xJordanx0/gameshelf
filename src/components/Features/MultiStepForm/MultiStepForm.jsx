import { useReducer } from "react";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
const initialValues = {
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, step: Math.min(state.step + 1, 4) };
    case "back":
      return { ...state, step: Math.max(state.step - 1, 1) };
    default:
      console.log("Invalid action type: " + action.type);
      return state;
  }
}

function useMultiStepForm() {
  const [{ step }, dispatch] = useReducer(reducer, initialValues);

  function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "next" });
  }

  const stepComponents = {
    1: <OfferGamesService className="step">Step One</OfferGamesService>,
    2: <OfferInfo className="step">Step Two</OfferInfo>,
    3: <OfferInfoImage className="step">Step Three</OfferInfoImage>,
    4: <RegistrationSuccess classNames="step">Step Four</RegistrationSuccess>,
  };

  return (
    <div className="border border-gray-300">
      <Step step={step} />
      <form onSubmit={onSubmit} className="py-10 px-8 grid gap-4">
        {stepComponents[step]}
        <div className="flex justify-between mt-1">
          <button
            className={`bg-gray-300 px-4 py-2 rounded cursor-pointer ${
              step === 4 ? "hidden" : "flex"
            }`}
            onClick={() => dispatch({ type: "back" })}
            disabled={step <= 1}
          >
            Back
          </button>

          <button
            className={`bg-gray-700 text-white  cursor-pointer px-4 py-2 rounded  flex-end  ${
              step === 4 ? "hidden" : "flex"
            }`}
            disabled={step > 3}
          >
            {step === 3 ? "finished" : "next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default useMultiStepForm;