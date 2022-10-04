import { useContext } from "react";
import { FormFieldsContext } from "../contexts/FormFieldsContext";
import { FormStepContext } from "../contexts/FormStepContext";

export function useFormStateContext(){
  return {
    ...useContext(FormStepContext),
    ...useContext(FormFieldsContext),
  };
}