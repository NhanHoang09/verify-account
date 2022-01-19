import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  input {
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #000;
    margin: 1%;
    text-align: center;
    font-weight: 300;

    ::placeholder {
      color: #ccc;
      font-size: 6rem;
      text-align: center;
    }
    input:valid {
      border-color: #3498db;
      box-shadow: 0 10px 10px -5px rgb(0 0 0 / 25%);
    }
  }
`;

function FocusInput() {
  return (
    <InputContainer>
      <input type="text" placeholder="0" />
      <input type="text" placeholder="0" />
      <input type="text" placeholder="0" />
      <input type="text" placeholder="0" />
      <input type="text" placeholder="0" />
      <input type="text" placeholder="0" />
  
    </InputContainer>
  );
}

export default FocusInput;
