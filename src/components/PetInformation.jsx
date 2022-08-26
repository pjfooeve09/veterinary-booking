import {
  InputField,
  InputContainer,
  InputLabel,
  InputError,
} from "../utils/styles";

export const PetInformation = () => {
  return (
    //The htmlFor property sets or returns the value of the for attribute of a label. The for attribute specifies which form element a label is bound to. In this case, it's <InputField id="firstName" />
    //children is the actual value. That way we dont need to put open and closing tag to write the value
    <form>
      <InputContainer>
        <div>
          <InputLabel htmlFor="firstName" children="Your First Name" />
          <InputError />
        </div>
        <InputField id="firstName" />
      </InputContainer>
      <InputContainer>
        <div>
          <InputLabel htmlFor="lastName" children="You Last Name" />
          <InputError />
        </div>
        <InputField id="lastName" />
      </InputContainer>
      <InputContainer>
        <div>
          <InputLabel htmlFor="petName" children="You Pet's Name" />
          <InputError />
        </div>
        <InputField id="petName" />
      </InputContainer>
      <InputContainer>
        <div>
          <InputLabel htmlFor="email" children="Email Address" />
          <InputError />
        </div>
        <InputField id="email" />
      </InputContainer>
    </form>
  );
};
