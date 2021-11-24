import { FC } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ICard, IStatus } from '@src/types/ICard';
import { LinkIcon } from './icons';
import { Replies } from './Replies';

interface CardProps {
  card: ICard;
}

const ContainerDiv = styled.div<{ status: IStatus }>(({ theme, status }) => {
  return css`
    border-bottom: 4px solid ${theme.colors?.[status]};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  `;
});

const ImageWrapperDiv = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ContentDiv = styled.div`
  padding: 1.3rem 2.35rem;
`;

const TitleWrapperDiv = styled.div`
  min-height: 7.5rem;
  display: flex;
  align-items: center;
`;

const TitleH4 = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.38;
  letter-spacing: 0.039rem;
`;

const StatusContainerDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  line-height: 1.5;
`;

const ActionWrapperDiv = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Card: FC<CardProps> = ({ card }) => (
  <ContainerDiv status={card.status}>
    <ImageWrapperDiv>
      <Image src={card.image} alt={card.title} />
    </ImageWrapperDiv>
    <ContentDiv>
      <TitleWrapperDiv>
        <TitleH4>{card.title}</TitleH4>
      </TitleWrapperDiv>
      <StatusContainerDiv>
        <Replies replies={card.replies} />
        <ActionWrapperDiv>
          <LinkIcon />
        </ActionWrapperDiv>
      </StatusContainerDiv>
    </ContentDiv>
  </ContainerDiv>
);
