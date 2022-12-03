import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[5]}px;
`;

export const OptionButton = styled.button`
  width: 200px;
  padding: ${p => p.theme.space[3]}px;
  border: none;
  cursor: pointer;

  background-color: ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.normal};

  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};

  transition: background-color 300ms linear, color 300ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accentColor};
  }
`;
