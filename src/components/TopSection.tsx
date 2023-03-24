import type { FC } from 'react';

type Props = {};

export const TopSection: FC<Props> = () => {
  return (
    <section
      id="top"
      className="mx-auto flex w-full max-w-1000 flex-col-reverse justify-between xl:min-h-[calc(100vh-16rem)] xl:flex-row"
    >
      <div className="w-full pt-32 xl:w-3/5 xl:pt-300">
        <small className="text-20 font-normal tracking-widest">{"Hello! I'm"}</small>
        <h1 className="mb-12 text-32 font-bold leading-tight tracking-widest xl:text-48">{'Reiju Takahashi'}</h1>
        <p className="text-16 font-light leading-snug tracking-widest text-white-500">
          <a href="https://creators-team.com" className="text-blue hover:text-blue-300">
            Creators Team
          </a>
          {' CTO. Developing backend, frontend and infrastructure.'}
        </p>
      </div>
      <div className="flex w-160 items-center pt-60 lg:w-200 xl:w-2/5 xl:pt-100">
        <div className="relative w-full overflow-hidden rounded-32 brightness-90">
          <img src="/profile.jpg" width={750} height={750} alt="Profile" className="w-full" />
        </div>
      </div>
    </section>
  );
};
