import type { FC } from 'react';
import { HistoryItem } from './HistoryItem';

type Props = {};

export const CareerSection: FC<Props> = () => {
  return (
    <section id="career" className="mx-auto flex min-h-full-screen-y w-full max-w-1000 flex-col py-60 xl:py-120 xl:pt-160">
      <h2 className="mb-20 text-32 font-bold leading-tight tracking-widest xl:text-48">{'Career'}</h2>
      <div className="relative grow pt-48">
        <div className="absolute inset-y-0 left-0 h-full w-4 rounded-2 bg-black-700"></div>
        <div className="mb-20" style={{ minHeight: '4rem' }}>
          <HistoryItem month={new Date(2021, 3)}>
            Entered <span className="text-blue">Tokyo University of Science</span>, Department of Information Engineering
          </HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '29rem' }}>
          <HistoryItem month={new Date(2021, 5)}>
            Joined <span className="text-blue">Creators Team</span> as an outsourced member
          </HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '6.5rem' }}>
          <HistoryItem month={new Date(2022, 5)}>
            Started to learn <span className="text-blue">TypeScript</span> and React
          </HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '9rem' }}>
          <HistoryItem month={new Date(2022, 8)}>
            Appointed as <span className="text-blue">CTO</span> in Creators Team
          </HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '4rem' }}>
          <HistoryItem month={new Date(2023, 0)}>
            Joined a internship program <span className="text-blue">Tech Accel</span> of <span className="text-blue">Cyber Agent</span>
          </HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '1.5rem' }}>
          <HistoryItem month={new Date(2023, 2)}>End the internship</HistoryItem>
        </div>
        <div className="mb-20" style={{ minHeight: '14rem' }}>
          <HistoryItem month={new Date(2023, 3)}>
            Developing <span className="text-blue">Werp</span>...
          </HistoryItem>
        </div>
      </div>
    </section>
  );
};
