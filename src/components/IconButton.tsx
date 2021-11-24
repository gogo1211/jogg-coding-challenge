import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  active?: boolean;
}

const Button = styled.button<{ active?: boolean }>(
  ({ theme, active }) => css`
    width: 3.2rem;
    height: 3.2rem;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: ${active ? theme.colors?.secondary : theme.colors?.primary};

    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `
);

export const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => <Button {...rest}>{icon}</Button>;
