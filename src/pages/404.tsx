import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Page404: NextPage = () => {
  return (
    <div className="min-h-full-screen-y bg-black-300 px-16 xl:px-60">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <section id="top" className="mx-auto flex min-h-full-screen-y w-full max-w-1000 flex-col items-center justify-center">
        <h1 className="mb-32 text-48 font-bold tracking-widest text-white">Page Not Found!</h1>
        <div className="flex justify-center">
          <Link href={`/`} className="flex h-48 w-200 items-center justify-center rounded-16 bg-black-500 tracking-widest duration-hover hover:bg-black-600">
            Go to top
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page404;
