import styled from 'styled-components';

export const Form = styled.form`
  margin: 0;
  width: 100%;
  max-width: 32rem;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  margin: 0;
  width: 100%;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 3.25rem 0.75rem 1rem;
  font-family: var(--default-font-family);
  font-size: var(--font-size-3);
  color: var(--white-2);
  font-weight: 600;
  background: var(--black-2);
  border: 1px solid var(--black-3);
  border-radius: 0.5rem;
  margin: 0;

  ::placeholder {
    color: var(--white-3);
    font-weight: 500;
  }

  :focus-visible {
    border: 1px solid var(--blue-2);
    box-shadow: inset 0 0 0 1px var(--blue-2);
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.375rem;
  padding: 0.5rem;
  margin: 0;
  border: 0;
  background: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  color: var(--white-3);

  :hover {
    background: var(--white-3-5);
    color: var(--white-2);
  }
`;
