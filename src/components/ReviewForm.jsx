import {
  Flex,
  Button,
  InputContainer,
  InputLabel,
  InputFieldDetails,
} from "../utils/styles";
import { useContext } from "react";
import { FormStepContext } from "../utils/contexts/FormStepContext";
import { STEPS } from "../utils/constants";
import { useFormStateContext } from "../utils/hooks";

export const ReviewForm = () => {
  const { setStep, fields } = useFormStateContext();
  const goBack = () => {
    setStep(STEPS.SERVICE_APPOINTMENT);
  };

  return (
    <div className="base-form">
      Review Details
      <InputContainer style={{ margin: "2px 0" }}>
        <Flex alignItems="center" justifyContent="space-between">
          <InputLabel children="First Name" />
        </Flex>
        <InputFieldDetails>
          {fields.pet_information.firstName}
        </InputFieldDetails>
      </InputContainer>
      <Flex justifyContent="flex-end">
        <Button
          type="button"
          children="Back"
          secondary
          style={{ margin: "0 10px" }}
          onClick={goBack}
        />
        <Button children="Next" />
      </Flex>
    </div>
  );
};
