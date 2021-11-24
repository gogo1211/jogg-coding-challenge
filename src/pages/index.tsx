import type { NextPage } from 'next';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SWRConfig } from 'swr';

import { useCards } from '@src/hooks/useCards';
import { GridView } from '@src/components/GridView';
import { TableView } from '@src/components/TableView';
import { useCardView } from '@src/hooks/useCardView';

import { MotionInView } from '@src/animation/MotionInView';
import { varFadeIn } from '@src/animation/variants';

import { generateCards } from './api/cards';

const ContentDiv = styled.div(
  ({ theme }) => css`
    padding: 2rem;
    background-color: #fff;

    ${theme.media?.gteMedium} {
      padding: 2.5rem 4rem;
    }
  `
);

const CardView = () => {
  const { loading, cards } = useCards();
  const { mode, statusFilter } = useCardView();

  const filteredCards = useMemo(
    () => cards?.filter((card) => card.status.includes(statusFilter)),
    [cards, statusFilter]
  );

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <ContentDiv>
      <MotionInView variants={varFadeIn} key={mode + statusFilter}>
        {mode === 'grid' ? <GridView cards={filteredCards || []} /> : <TableView cards={filteredCards || []} />}
      </MotionInView>
    </ContentDiv>
  );
};

const Home: NextPage<{ fallback: any }> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <CardView />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  const cards = JSON.parse(JSON.stringify(generateCards()));
  return {
    props: {
      fallback: {
        '/api/cards': cards
      }
    }
  };
}

export default Home;
