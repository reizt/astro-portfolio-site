import { CareerSection } from '#/components/CareerSection';
import { Header } from '#/components/Header';
import { SkillsSection } from '#/components/SkillsSection';
import { TopSection } from '#/components/TopSection';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="px-16 xl:px-60 2xl:px-60">
      <Header />
      <TopSection />
      <CareerSection />
      <SkillsSection />
    </div>
  );
};

export default Home;
