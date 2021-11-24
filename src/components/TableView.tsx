import { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';

import { ICard, IStatus } from '@src/types/ICard';
import { Replies } from './Replies';
import { IconButton } from './IconButton';
import { MoreIcon } from './icons';

const Table = styled.table`
  width: 100%;
  font-size: 1.2rem;

  td:not(:first-child) {
    text-align: center;
    vertical-align: middle;
  }

  thead {
    color: #999;
    line-height: 1.33;

    td {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  tbody {
    td:nth-of-type(3) {
      text-transform: capitalize;
    }
  }
`;

const ContentDiv = styled.div<{ status: IStatus }>(
  ({ theme, status }) => css`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-left: 4px solid ${theme.colors?.[status]};
  `
);

const Image = styled.img`
  margin-right: 1.6rem;
  width: 7.2rem;
  height: 4rem;
  object-fit: cover;
`;

const TitleH4 = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.primary};
  white-space: nowrap;

  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.media?.lteMedium} {
    max-width: 20rem;
  }

  ${({ theme }) => theme.media?.lteSmall} {
    max-width: 15rem;
  }
`;

interface TableViewProps {
  cards: ICard[];
}

export const TableView: FC<TableViewProps> = ({ cards }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const memorized = useMemo(
    () =>
      cards?.map((card) => (
        <tr key={card.id}>
          <td>
            <ContentDiv status={card.status}>
              <Image src={card.image} alt={card.title} />
              <TitleH4>{card.title}</TitleH4>
            </ContentDiv>
          </td>
          {!isMobile ? (
            <>
              <td>
                <Replies replies={card.replies} />
              </td>
              <td>{card.status}</td>
              <td>{new Date(card.date).toLocaleDateString('en-US', { dateStyle: 'long' })}</td>
            </>
          ) : null}
          <td>
            <IconButton icon={<MoreIcon />} />
          </td>
        </tr>
      )),
    [cards, isMobile]
  );

  return (
    <Table>
      <thead>
        {!isMobile ? (
          <tr>
            <td>Jogg</td>
            <td>Replies</td>
            <td>Status</td>
            <td>Date Created</td>
            <td>Options</td>
          </tr>
        ) : null}
      </thead>
      <tbody>{memorized}</tbody>
    </Table>
  );
};
