import type { FC } from 'react';
import { LanguageCard } from './LanguageCard';

type Props = {};

export const SkillsSection: FC<Props> = () => {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-full-screen-y w-full max-w-1000 flex-col-reverse justify-between pb-60 xl:flex-row xl:pt-100"
    >
      <div className="shrink-0 xl:pr-24">
        <div className="mb-12 grid h-max grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3">
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
        <div className="grid h-max grid-cols-2 gap-12 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4">
          <LanguageCard size="small" name="Sass" iconUrl="/languages/sass.svg" iconSizeAdjust={0.6} />
          <LanguageCard size="small" name="Vue.js" iconUrl="/languages/vuejs.svg" iconSizeAdjust={0.6} />
          <LanguageCard size="small" name="Ruby on Rails" iconUrl="/languages/rails.svg" iconSizeAdjust={0.8} />
          <LanguageCard size="small" name="WordPress" iconUrl="/languages/wordpress.svg" iconSizeAdjust={0.6} />
        </div>
      </div>
      <div className="mb-32 grow pt-60 xl:mb-0 xl:pt-100 xl:pl-60">
        <h2 className="mb-12 text-32 font-bold leading-tight tracking-widest xl:text-48">{'Skills'}</h2>
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
  );
};
