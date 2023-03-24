import type { FC, ReactNode } from 'react';

type Props = {
  href: string;
  name: string;
  description: ReactNode;
  iconUrl: string;
  iconSizeAdjust?: number;
};

export const ProductCard: FC<Props> = ({ href, name, description, iconUrl, iconSizeAdjust = 1 }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-100 flex-col items-center gap-x-36 gap-y-20 rounded-16 bg-black-500 p-20 duration-hover hover:bg-black-600 md:flex-row"
    >
      <div className="flex h-52 w-52 shrink-0 items-center justify-center md:h-60 md:w-60">
        <img src={iconUrl} alt="VSCode icon" className="h-full max-w-full" style={{ transform: `scale(${iconSizeAdjust})` }} />
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-y-4 pt-8 md:w-auto md:gap-y-0">
        <h4 className="text-20 font-semibold leading-tight tracking-widest">{name}</h4>
        <p className="text-14 font-light leading-tight tracking-widest text-white-500">{description}</p>
      </div>
    </a>
  );
};
