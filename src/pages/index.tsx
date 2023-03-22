import { HistoryItem } from '#/components/HistoryItem';
import { LanguageCard } from '#/components/LanguageCard';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <header className="fixed top-0 z-10 flex w-full-screen-x items-center justify-center py-12">
        <div className="flex w-full max-w-1000">
          <Link href="/" className="text-32 tracking-wide text-white duration-hover hover:text-blue">
            Portfolio
          </Link>
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
      <section id="top" className="mx-auto flex h-[calc(100vh-16rem)] w-full max-w-1000 justify-between">
        <div className="w-3/5 pt-300">
          <small className="text-20 font-normal tracking-widest">{"Hello! I'm"}</small>
          <h1 className="mb-12 text-48 font-bold leading-tight tracking-widest">{'Reiju Takahshi'}</h1>
          <p className="text-16 font-light leading-snug tracking-widest text-white-500">
            <a href="https://creators-team.com" className="text-blue hover:text-blue-300">
              Creators Team
            </a>
            {' CTO. Developing backend, frontend and infrastructure.'}
          </p>
        </div>
        <div className="flex w-2/5 items-center pt-100">
          <div className="relative w-full overflow-hidden rounded-32 brightness-90">
            <Image src="/profile.jpg" width={750} height={750} alt="Profile" className="w-full" />
          </div>
        </div>
      </section>
      <div id="career" className="mx-auto mb-100 flex min-h-full-screen-y w-full max-w-1000 flex-col pt-160 pb-60">
        <h2 className="mb-20 text-48 font-bold leading-tight tracking-widest">{'Career'}</h2>
        <div className="relative grow pt-48">
          <div className="absolute inset-y-0 left-0 h-full w-4 rounded-2 bg-black-700"></div>
          <div style={{ height: '300px' }}>
            <HistoryItem month={new Date(2021, 5)}>
              Joined <span className="text-blue">Creators Team</span> as an outsourced member
            </HistoryItem>
          </div>
          <div style={{ height: '75px' }}>
            <HistoryItem month={new Date(2022, 5)}>
              Stopped to use Ruby on Rails and started to learn <span className="text-blue">TypeScript</span> and React
            </HistoryItem>
          </div>
          <div style={{ height: '150px' }}>
            <HistoryItem month={new Date(2022, 8)}>
              Appointed as <span className="text-blue">CTO</span> in Creators Team
            </HistoryItem>
          </div>
          <div style={{ height: '150px' }}>
            <HistoryItem month={new Date(2023, 2)} emphasize>
              Developing <span className="text-blue">Werp</span>...
            </HistoryItem>
          </div>
        </div>
      </div>
      <section id="skills" className="mx-auto flex h-full-screen-y w-full max-w-1000 justify-between pb-60">
        <div className="shrink-0 pr-24">
          <div className="mb-12 grid h-max grid-cols-3 gap-12">
            <LanguageCard size="large" name="TypeScript" iconUrl="/languages/typescript.svg" iconSizeAdjust={0.6} />
            <LanguageCard size="large" name="Node.js" iconUrl="/languages/nodejs.svg" iconSizeAdjust={1} />
            <LanguageCard size="large" name="React" iconUrl="/languages/react.svg" iconSizeAdjust={0.6} />
            <LanguageCard size="large" name="Next.js" iconUrl="/languages/nextjs.svg" iconSizeAdjust={0.8} />
            <LanguageCard size="large" name="Tailwind CSS" iconUrl="/languages/tailwindcss.svg" iconSizeAdjust={0.6} />
            <LanguageCard size="large" name="Docker" iconUrl="/languages/docker.svg" iconSizeAdjust={0.8} />
            <LanguageCard size="large" name="Terraform" iconUrl="/languages/terraform.svg" iconSizeAdjust={0.7} />
            <LanguageCard size="large" name="AWS" iconUrl="/languages/aws.svg" iconSizeAdjust={0.7} />
            <LanguageCard size="large" name="Go" iconUrl="/languages/go.svg" />
          </div>
          <div className="grid h-max grid-cols-4 gap-12">
            <LanguageCard size="small" name="Sass" iconUrl="/languages/sass.svg" iconSizeAdjust={0.6} />
            <LanguageCard size="small" name="Vue.js" iconUrl="/languages/vuejs.svg" iconSizeAdjust={0.6} />
            <LanguageCard size="small" name="Ruby on Rails" iconUrl="/languages/rails.svg" iconSizeAdjust={0.8} />
            <LanguageCard size="small" name="WordPress" iconUrl="/languages/wordpress.svg" iconSizeAdjust={0.6} />
          </div>
        </div>
        <div className="grow pt-100 pl-60">
          <h2 className="mb-12 text-48 font-bold leading-tight tracking-widest">{'Skills'}</h2>
          <p className="text-16 font-light leading-snug tracking-widest text-white-500">
            {"I'm mainly using "}
            <span className="text-blue">TypeScript</span>
            {' both in backend and frontend.'}
            <br />
            {'I love its convenient typing system.'}
            <br />
            <br />
            <span className="text-blue">AWS</span> is often used for the infrastructure environment, and in that case,{' '}
            <span className="text-blue">terraform</span> and <span className="text-blue">docker</span> are used together.
            <br />
            <br />
            The CSS framework I love best is <span className="text-blue">Tailwind CSS</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
