import styled, { css } from "styled-components";

export const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: inherit;
  color: white;
  padding: 0;
  font-size: 0.8rem;
  margin: 4px 0px;
  font-family: "Assistant", sans-serif;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-top: 4px;
`;

export const InputContainer = styled.div`
  /* background-color: #008b8b; */
  background-color: #134f4f;
  border: 1px solid rgb(255, 255, 255, 0.1);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-family: "Assistant", sans-serif;
  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `}/* box-sizing: border-box; */
`;

export const InputError = styled.div`
  font-size: 1rem;
  margin-top: 4px;
  color: #f50000;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ApplicationRootStyles = styled.div`
  height: 100%;
  display: Flex;
  justify-content: center;
  align-items: center;
  .base-form {
    width: 650px;
  }
`;

export const Button = styled.button`
  padding: 10px 60px;
  font-size: 18px;
  font-family: "Assistant", sans-serif;
  outline: none;
  border: none;
  background-color: blue;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  :hover {
    background-color: #1c68ff;
  }
  :active {
    background-color: #2f74ff;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: #8d2727;
      border: 1px solid #0a0606;
      :hover {
        background-color: #6a32329e;
      }
    `}
`;

export const InputFieldDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  color: white;
  padding: 0;
  font-size: 0.8rem;
  margin: 4px 0px;
  font-family: "Assistant", sans-serif;
`;
