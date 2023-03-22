import { formatMonth } from '#/utils/date';
import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  month: Date;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  emphasize?: boolean;
};

export const HistoryItem: FC<Props> = ({ month, children, className = '', emphasize = false, ...restProps }) => {
  return (
    <div className={`relative flex flex-col pl-32 xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center ${className}`} {...restProps}>
      <i
        className={`absolute top-1/2 block -translate-y-1/2 rounded-full bg-blue shadow-dot shadow-blue ${
          emphasize ? '-left-10 h-24 w-24' : '-left-6 h-16 w-16'
        }`}
      ></i>
      <span className="mr-20 font-mono text-16 font-bold tracking-widest text-white">{formatMonth(month)}</span>
      <p className="text-16 font-light tracking-wider text-white-500">{children}</p>
    </div>
  );
};
