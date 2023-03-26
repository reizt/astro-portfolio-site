import { formatMonth } from '#/utils/date';
import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  month: Date;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const HistoryItem: FC<Props> = ({ month, children, className = '', ...restProps }) => {
  return (
    <div className={`group relative flex flex-col pl-32 xl:flex-row xl:items-center ${className}`} {...restProps}>
      <i
        className={`absolute top-0 -left-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue shadow-dot shadow-blue duration-150 group-hover:-left-10 group-hover:h-24 group-hover:w-24 sm:top-1/2 sm:-translate-y-1/2`}
      >
        <i className={`h-12 w-12 rounded-full border-2 border-black bg-blue duration-150 group-hover:h-20 group-hover:w-20`}></i>
      </i>
      <span className="mr-20 font-mono text-16 font-bold tracking-widest text-white">{formatMonth(month)}</span>
      <p className="text-16 font-light tracking-wider text-white-500">{children}</p>
    </div>
  );
};
