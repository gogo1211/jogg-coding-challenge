import { createContext, useReducer, Reducer } from 'react';

import type { FC } from 'react';

interface CardViewContextType {
  mode: 'list' | 'grid';
  statusFilter: string;
  setMode: (mode: 'list' | 'grid') => void;
  setStatusFilter: (filter: string) => void;
}

interface CardViewState {
  mode: 'list' | 'grid';
  statusFilter: string;
}

type Action =
  | {
      type: 'setMode';
      payload: 'list' | 'grid';
    }
  | {
      type: 'setStatusFilter';
      payload: string;
    };

const CardViewContext = createContext<CardViewContextType | null>(null);

const initialState: CardViewState = { mode: 'grid', statusFilter: '' };

const CardViewProvider: FC = ({ children }) => {
  const [{ mode, statusFilter }, dispatch] = useReducer<Reducer<CardViewState, Action>>((state, action) => {
    switch (action.type) {
      case 'setMode':
        return {
          ...state,
          mode: action.payload
        };
      case 'setStatusFilter': {
        return {
          ...state,
          statusFilter: action.payload
        };
      }
      default:
        return initialState;
    }
  }, initialState);

  const setMode = (payload: 'list' | 'grid') => {
    dispatch({
      type: 'setMode',
      payload
    });
  };

  const setStatusFilter = (payload: string) => {
    dispatch({
      type: 'setStatusFilter',
      payload
    });
  };

  return (
    <CardViewContext.Provider value={{ mode, statusFilter, setMode, setStatusFilter }}>
      {children}
    </CardViewContext.Provider>
  );
};

export { CardViewProvider, CardViewContext };
