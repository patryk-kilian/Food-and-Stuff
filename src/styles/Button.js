import styled from '@emotion/styled';

export const StyledButton = styled.button`
  max-width: 200px;
  width: 100%;
  border: 2px solid ${props => props.color};
  text-transform: uppercase;
  color: ${props => props.color};
  padding: 8px;
  font-size: 1rem;
  font-weight: 900;
  z-index: 3;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  :hover {
    background: ${props => props.color};
    color: #fff;
  }
`;
