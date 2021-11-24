import styled from '@emotion/styled';
import { FC } from 'react';

const Span = styled.span`
  position: relative;
  padding-left: 1.5rem;
  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

interface RepliesProps {
  replies: number;
}

export const Replies: FC<RepliesProps> = ({ replies }) => <Span>{replies} replies</Span>;
