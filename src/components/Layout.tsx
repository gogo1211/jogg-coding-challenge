import { FC } from 'react';

import { Container } from './Container';
import { Header } from './Header';

export const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
  </Container>
);
