import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  text-transform: capitalize;
  border: 2px solid blueviolet;
  color: #6c6874;
  background-color: #e6e6fa;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #3f888f;
    background-color: #cda4de;
  }
`;
