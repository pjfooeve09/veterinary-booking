import { Flex, Button } from "../utils/styles";
import { useContext } from "react";
import { FormStepContext } from "../utils/contexts/FormStepContext";
import { STEPS } from "../utils/constants";

export const ReviewForm = () => {
  const goBack = () => {
    setStep(STEPS.SERVICE_APPOINTMENT);
  };

  const { setStep } = useContext(FormStepContext);

  return (
    <div className="base-form">
      Review Details
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
