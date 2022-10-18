import { useForm } from "react-hook-form";
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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import moment from "moment";
import { SuccessStep } from "../components/SuccessStep";

export const ServiceAppointment = () => {
  const [dateState, setDateState] = useState(new Date());
  const { fields, setStep, updateFields } = useFormStateContext();
  const {
    reset,
    register, //register saves data and handles validation
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...fields.service_appointment,
    },
  });

  const goBack = () => {
    setStep(STEPS.PET_INFORMATION);
  };

  const onSubmit = (data) => {
    updateFields(FIELDS.SERVICE_APPOINTMENT, data);
    setStep(STEPS.REVIEW);
  };

  const changeDate = (e) => {
    setDateState(e);
    register("calendar", {
      value: moment(e).format("MMMM Do YYYY"),
    });
    reset({ value: moment(e).format("MMMM Do YYYY") });
  };

  return (
    <div class="base-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer style={{ margin: "2px 0" }} error={errors.service}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel
              htmlFor="service"
              children="What type of service do you need?"
            />
            {errors.service && <InputError children={errors.service.message} />}
          </Flex>
          <InputField
            id="service"
            {...register("service", {
              //this is where we set up validation rules:
              required: "Please Specify Service Type",
            })}
          />
        </InputContainer>

        <InputContainer style={{ margin: "2px 0" }} error={errors.service}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor={dateState} children="Select Date" />
            {errors.dateState && <InputError children={errors.date.message} />}
          </Flex>
          <Calendar value={dateState} onChange={changeDate} />
          <p>
            Current selected date is{" "}
            <b>{moment(dateState).format("MMMM Do YYYY")}</b>
          </p>
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
