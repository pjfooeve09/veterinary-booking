import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormStepContext } from "../utils/contexts/FormStepContext";
import { FIELDS, STEPS } from "../utils/constants";
import { useFormStateContext } from "../utils/hooks";
import {
  InputField,
  InputContainer,
  InputLabel,
  InputError,
  Flex,
  Button,
} from "../utils/styles";

export const ServiceAppointment = () => {
  const {
    register, //register saves data and handles validation
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setStep, updateFields } = useFormStateContext();

  const goBack = () => {
    setStep(STEPS.PET_INFORMATION);
  };

  const onSubmit = (data) => {
    updateFields(FIELDS.SERVICE_APPOINTMENT, data);
    setStep(STEPS.REVIEW);
  };

  const onError = (errors, error) => {
    // console.log(error);
  };

  return (
    <div class="base-form">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputContainer style={{ margin: "2px 0" }} error={errors.service}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="service" children="Select Service Type" />
            {errors.service && <InputError children={errors.service.message} />}
          </Flex>
          <InputField
            id="service"
            {...register("service", {
              //this is where we set up validation rules:
              required: "Please Select Service Type",
            })}
          />
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
      </form>
    </div>
  );
};
