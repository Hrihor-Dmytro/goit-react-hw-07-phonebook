import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrapp = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-right: 0;
  margin-bottom: 10px;
  position: relative;
`;
export const TextBox = styled.p`
  margin: 10px;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
  font-family: 'Gill Sans';
  color: var(--text-color);
  transition: color 500ms linear;
`;
export const FormInput = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 5px 10px;
  color: var(--text-color);
  background-color: var(--background-color);
  transition: color 500ms linear, background-color 500ms linear;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--background-color);
  transition: color 500ms linear, background-color 500ms linear;
  transition: background-color 500ms linear, border 500ms linear,
    color 500ms linear;
  &:hover,
  &:focus {
    background-color: tomato;
    border: 2px solid var(--text-color);
  }
`;

// export const TostPozition = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
// `;
