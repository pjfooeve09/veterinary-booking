import { createContext } from "react";
import { defaultFields } from "../constants";

export const FormFieldContext = createContext({
  fields: defaultFields,
  updateFields: () => {},
});
