import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Decor from './Decor';
import { products } from '@/db/products';
import '@/styles/products.scss';

export default function Products() {
  return (
    <section className="product">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Наші товари</h3>
          <p className="text">
            Ми використовуємо тільки найкращі якісні матеріали: соєвий віск,
            віскові барвники, високоякісні ароматичні олії та бавовняні
            фітільці. Відтінки свічок дуже гармонійно поєднуються з ароматом,
            створюючи незабутню атмосферу у вашому домі.
          </p>
        </div>
        <div>
          <ul className="product__list ">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                desc={product.detail}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </ul>
          <Decor padding={true} />
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  image: StaticImageData;
  price: number;
  name: string;
  desc: string;
}

function ProductCard({ image, price, name, desc }: ProductCardProps) {
  return (
    <li className="product__item">
      <div className="product__content">
        <div className="product__image">
          <div className="product__wrapper">
            <Image
              src={image}
              alt={`image for product ${name}`}
              fill
              sizes="50vw, (min-width: 768px) 30vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <p className="sub-title product__price">{price}$</p>
        <h4 className="sub-title product__name">&quot;{name}&quot;</h4>
        <p className="sub-text product__detail">{desc}</p>
      </div>
      <button className="btn product__btn">Купити</button>
    </li>
  );
}
