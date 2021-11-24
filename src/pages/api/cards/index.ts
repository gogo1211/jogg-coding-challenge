import type { NextApiRequest, NextApiResponse } from 'next';
import faker from 'faker';

import { ICard, IStatus } from '../../../types/ICard';

export function generateCards() {
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      id: i + 1,
      replies: faker.random.number({ min: 0, max: 100 }),
      title: faker.name.title(),
      image: faker.random.image(),
      status: faker.random.arrayElement<IStatus>(['ongoing', 'scheduled', 'ended']),
      date: faker.date.recent()
    });
  }
  return data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ICard[]>) {
  const data = generateCards();

  res.status(200).json(data);
}
