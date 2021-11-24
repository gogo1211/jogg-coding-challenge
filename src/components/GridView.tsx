import { FC, useMemo } from 'react';
import styled from '@emotion/styled';

import { ICard } from '@src/types/ICard';
import { MotionInView } from '@src/animation/MotionInView';
import { varFadeInUp } from '@src/animation/variants';

import { Card } from './Card';

const ContainerDiv = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2rem;

    ${theme.media?.gteSmall} {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }

    ${theme.media?.gteMedium} {
      grid-column-gap: 3rem;
      grid-row-gap: 3.2rem;
    }
  `
);

interface GridViewProps {
  cards: ICard[];
}

export const GridView: FC<GridViewProps> = ({ cards }) => {
  const memorized = useMemo(
    () =>
      cards.map((card) => (
        <MotionInView key={card.id} variants={varFadeInUp}>
          <Card card={card} />
        </MotionInView>
      )),
    [cards]
  );

  return <ContainerDiv>{memorized}</ContainerDiv>;
};
