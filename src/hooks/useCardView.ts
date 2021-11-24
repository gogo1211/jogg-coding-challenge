import { useContext } from 'react';

import { CardViewContext } from '@src/contexts/CardViewContext';

const useCardView = () => {
  const context = useContext(CardViewContext);

  if (!context) {
    throw new Error('useCardView needs to be used inside CardViewProvider');
  }

  return context;
};

export { useCardView };
