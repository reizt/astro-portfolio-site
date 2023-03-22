import type { FC } from 'react';
import { HistoryItem } from './HistoryItem';

type Props = {};

export const CareerSection: FC<Props> = () => {
  return (
    <section
      id="career"
      className="mx-auto flex min-h-full-screen-y w-full max-w-1000 flex-col py-60 xl:py-120 xl:pt-160 2xl:py-120 2xl:pt-160"
    >
      <h2 className="mb-20 text-32 font-bold leading-tight tracking-widest xl:text-48 2xl:text-48">{'Career'}</h2>
      <div className="relative grow pt-48">
        <div className="absolute inset-y-0 left-0 h-full w-4 rounded-2 bg-black-700"></div>
        <div style={{ minHeight: '300px' }}>
          <HistoryItem month={new Date(2021, 5)}>
            Joined <span className="text-blue">Creators Team</span> as an outsourced member
          </HistoryItem>
        </div>
        <div style={{ minHeight: '75px' }}>
          <HistoryItem month={new Date(2022, 5)}>
            Stopped to use Ruby on Rails and started to learn <span className="text-blue">TypeScript</span> and React
          </HistoryItem>
        </div>
        <div style={{ minHeight: '150px' }}>
          <HistoryItem month={new Date(2022, 8)}>
            Appointed as <span className="text-blue">CTO</span> in Creators Team
          </HistoryItem>
        </div>
        <div style={{ minHeight: '150px' }}>
          <HistoryItem month={new Date(2023, 2)} emphasize>
            Developing <span className="text-blue">Werp</span>...
          </HistoryItem>
        </div>
      </div>
    </section>
  );
};
