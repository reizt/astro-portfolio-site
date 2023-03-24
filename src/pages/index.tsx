import { CareerSection } from '#/components/CareerSection';
import { Header } from '#/components/Header';
import { ProductsSection } from '#/components/ProductsSection';
import { SkillsSection } from '#/components/SkillsSection';
import { TopSection } from '#/components/TopSection';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="px-16 xl:px-60">
      <Head>
        <title>Reiju Takahashi</title>
      </Head>
      <Header />
      <TopSection />
      <CareerSection />
      <SkillsSection />
      <ProductsSection />
    </div>
  );
};

export default Home;
