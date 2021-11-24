export type IStatus = 'ongoing' | 'scheduled' | 'ended';

export interface ICard {
  id: number;
  replies: number;
  title: string;
  image: string;
  status: IStatus;
  date: Date;
}
