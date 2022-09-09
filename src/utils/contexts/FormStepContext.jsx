import { createContext } from "react";
import { STEPS } from "../constants";

export const FormStepContext = createContext({
  step: STEPS.PET_INFORMATION,
  setStep: () => {},
});
