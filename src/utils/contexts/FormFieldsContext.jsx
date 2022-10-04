import { createContext } from "react";
import { defaultFields } from "../constants";

export const FormFieldsContext = createContext({
  fields: defaultFields,
  updateFields: () => {},
});
