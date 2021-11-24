import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { ICard } from '@src/types/ICard';

export const getCards = async () => {
  const res = await axios.get<any, AxiosResponse<ICard[]>>('/api/cards');
  return res.data;
};

export const useCards = () => {
  const { data, error } = useSWR('/api/cards', getCards);

  return {
    loading: !data && !error,
    cards: data
  };
};
