import type { FC } from 'react';

type Props = {};

export const Header: FC<Props> = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 mx-auto flex h-72 w-full-screen-x items-center justify-center py-12 px-16 xl:px-60">
      <div className="flex w-full max-w-1000">
        <div className="grow"></div>
        <nav className="flex items-center justify-between gap-x-32">
          <a href="#top" className="text-20 tracking-widest text-white duration-hover hover:text-blue">
            Top
          </a>
          <a href="#career" className="text-20 tracking-widest text-white duration-hover hover:text-blue">
            Career
          </a>
          <a href="#skills" className="text-20 tracking-widest text-white duration-hover hover:text-blue">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
};
