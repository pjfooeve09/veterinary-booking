import {
  Flex,
  Button,
  InputContainer,
  InputLabel,
  InputFieldDetails,
} from "../utils/styles";
import { STEPS } from "../utils/constants";
import { useFormStateContext } from "../utils/hooks";
import { SuccessStep } from "../components/SuccessStep";
import axios from "axios";
import React, { useState } from "react";

export const ReviewForm = () => {
  const [shouldShowNextPage, setShouldShowNextPage] = useState(false);
  const { setStep, fields } = useFormStateContext();
  const [petName, setPetName] = useState(fields.pet_information.firstName);
  const goBack = () => {
    setStep(STEPS.SERVICE_APPOINTMENT);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldShowNextPage(true);
  };

  return (
    <div>
      {shouldShowNextPage ? (
        <SuccessStep petName={petName} />
      ) : (
        <form onSubmit={handleSubmit}>
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
            <InputContainer style={{ margin: "2px 0" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <InputLabel children="Last Name" />
              </Flex>
              <InputFieldDetails>
                {fields.pet_information.lastName}
              </InputFieldDetails>
            </InputContainer>
            <InputContainer style={{ margin: "2px 0" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <InputLabel children="Pet Name" />
              </Flex>
              <InputFieldDetails>
                {fields.pet_information.petName}
              </InputFieldDetails>
            </InputContainer>
            <InputContainer style={{ margin: "2px 0" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <InputLabel children="Email" />
              </Flex>
              <InputFieldDetails>
                {fields.pet_information.email}
              </InputFieldDetails>
            </InputContainer>
            <InputContainer style={{ margin: "2px 0" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <InputLabel children="Mobile" />
              </Flex>
              <InputFieldDetails>
                {fields.pet_information.mobile}
              </InputFieldDetails>
            </InputContainer>
            <InputContainer style={{ margin: "2px 0" }}>
              <Flex alignItems="center" justifyContent="space-between">
                <InputLabel children="Service Type" />
              </Flex>
              <InputFieldDetails>
                {fields.service_appointment.service}
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
              <input type="submit" />
            </Flex>
          </div>
        </form>
      )}
    </div>
  );
};
