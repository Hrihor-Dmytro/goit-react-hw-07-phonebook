import styled from '@emotion/styled';
export const SectionList = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
`;
export const FormLabel = styled.label`
  margin-right: 10px;
  color: var(--text-color);
  background-color: var(--background-color);
  margin-right: 5px;
  border: 1px solid var(--input-border-color);
  border-radius: 5px;
  padding: 5px 10px;
  transition: color 500ms linear, background-color 500ms linear;
`;

export const Input = styled.input`
  margin-right: 10px;
  color: var(--text-color);
  background-color: var(--background-color);
  margin-right: 5px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 5px 10px;
  transition: color 500ms linear, background-color 500ms linear,
    border 500ms linear;
`;
