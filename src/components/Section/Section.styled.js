import styled from 'styled-components';

export const SectionStyled = styled.section`
  text-align: center;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.l};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
`;
