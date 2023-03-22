import type { FC } from 'react';

type Props = {
  size: 'small' | 'large';
  name: string;
  iconUrl: string;
  iconSizeAdjust?: number;
};

export const LanguageCard: FC<Props> = ({ size, name, iconUrl, iconSizeAdjust = 1 }) => {
  return (
    <div
      className={`group flex flex-col items-center justify-between rounded-16 bg-black-500 pt-24 pb-12 duration-hover hover:bg-black-600 ${
        {
          small: 'w-auto xl:w-120 2xl:w-120 h-auto xl:h-120 2xl:h-120',
          large: 'w-auto xl:w-164 2xl:w-164 h-auto xl:h-164 2xl:h-164',
        }[size]
      }`}
    >
      <div className="mb-8 flex h-100 w-1/2 grow items-center justify-center">
        <img src={iconUrl} alt={name} width={100} height={100} className="w-full" style={{ transform: `scale(${iconSizeAdjust})` }} />
      </div>
      <h4
        className={`shrink-0 text-white-900 duration-hover group-hover:text-white ${
          {
            small: 'text-10',
            large: 'text-12',
          }[size]
        }`}
      >
        {name}
      </h4>
    </div>
  );
};
