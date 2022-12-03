import styled from 'styled-components';

export const StatisticList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  width: 350px;
  margin: 0 auto;
`;

export const StatisticItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;

  border-bottom: ${p => p.theme.borders.normal};

  :nth-last-child(-n + 2) {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
