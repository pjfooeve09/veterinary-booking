import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormStepContext } from "../utils/contexts/FormStepContext";
import { STEPS } from "../utils/constants";
import {
  InputField,
  InputContainer,
  InputLabel,
  InputError,
  Flex,
  Button,
} from "../utils/styles";

export const PetInformation = () => {
  const {
    register, //register saves data and handles validation
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setStep } = useContext(FormStepContext);

  const onSubmit = (data) => {
    setStep(STEPS.SERVICE_APPOINTMENT);
  };

  const onError = (errors, error) => {
    console.log(errors.firstName);
  };

  return (
    //The htmlFor property sets or returns the value of the for attribute of a label. The for attribute specifies which form element a label is bound to. In this case, it's <InputField id="firstName" />
    //children is the actual value. That way we dont need to put open and closing tag to write the value
    <div className="base-form">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputContainer style={{ margin: "2px 0" }} error={errors.firstName}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="firstName" children="Your First Name" />
            {errors.firstName && (
              <InputError children={errors.firstName.message} />
            )}
          </Flex>
          <InputField
            id="firstName"
            {...register("firstName", {
              //this is where we set up validation rules:
              required: "First Name Required",
            })}
          />
        </InputContainer>
        <InputContainer style={{ margin: "2px 0" }} error={errors.lastName}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="lastName" children="Your Last Name" />
            {errors.lastName && (
              <InputError children={errors.lastName.message} />
            )}
          </Flex>
          <InputField
            id="lastName"
            {...register("lastName", {
              required: "Last Name Required",
            })}
          />
        </InputContainer>
        <InputContainer style={{ margin: "2px 0" }} error={errors.petName}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="petName" children="Your Pet's Name" />
            {errors.petName && <InputError children={errors.petName.message} />}
          </Flex>
          <InputField
            id="petName"
            {...register("petName", {
              required: "Pet Name Required",
            })}
          />
        </InputContainer>
        <InputContainer style={{ margin: "2px 0" }} error={errors.email}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="email" children="Email Address" />
            {errors.email && <InputError children={errors.email.message} />}
          </Flex>
          <InputField
            id="email"
            type="email"
            {...register("email", {
              required: "Email Required",
            })}
          />
        </InputContainer>
        <InputContainer style={{ margin: "2px 0" }} error={errors.mobile}>
          <Flex alignItems="center" justifyContent="space-between">
            <InputLabel htmlFor="mobile" children="Mobile" />
            {errors.mobile && <InputError children={errors.mobile.message} />}
          </Flex>
          <InputField
            id="mobile"
            maxLength={10}
            {...register("mobile", {
              required: "Mobile Required",
              pattern: {
                message: "Invalid Mobile Number",
                value: /^\d{10}$/,
              },
            })}
          />
        </InputContainer>
        <Flex justifyContent="flex-end">
          <Button children="Next" />
        </Flex>
      </form>
    </div>
  );
};
