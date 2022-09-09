import { useContext } from "react";
import { FormFieldContext } from "../contexts/FormFieldsContext";
import { FormStepContext } from "../contexts/FormStepContext";

export function useFormStateContext(){
  return {
    ...useContext(FormStepContext),
    ...useContext(FormFieldContext),
  };
}