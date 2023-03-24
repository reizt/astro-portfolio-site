import type { FC } from 'react';
import { ProductCard } from './ProductCard';

type Props = {};

export const ProductsSection: FC<Props> = () => {
  return (
    <section id="products" className="mx-auto flex min-h-full-screen-y w-full max-w-1000 flex-col py-60 xl:py-120 xl:pt-160">
      <h2 className="mb-20 text-32 font-bold leading-tight tracking-widest xl:text-48">{'Products'}</h2>
      <div className="mb-12 grid h-max grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-1">
        <ProductCard
          href="https://tech-accel.vercel.app"
          name="Tech Accel"
          description={
            <>
              A web music app I developed in <span className="text-blue">Cyber Agent</span> program{' '}
              <span className="text-blue">Tech Accel</span>.
            </>
          }
          iconUrl="/products/tech-accel.svg"
          iconSizeAdjust={0.7}
        />
        <ProductCard
          href="https://marketplace.visualstudio.com/items?itemName=reizt.vscode-px-to-rem"
          name="VSCode px to rem"
          description={
            <>
              A <span className="text-blue">VSCode extension</span> that converts <code className="font-bold">px</code> in CSS/SCSS files
              to <code className="font-bold">rem</code>
            </>
          }
          iconUrl="/products/vscode-px-to-rem.svg"
          iconSizeAdjust={0.7}
        />
        <ProductCard
          href="https://github.com/reizt/todo-cli"
          name="TODO CLI"
          description={
            <>
              A simple CLI TODO tool written by <span className="text-blue">Go</span>.
            </>
          }
          iconUrl="/products/todo-cli.svg"
          iconSizeAdjust={0.8}
        />
      </div>
    </section>
  );
};
