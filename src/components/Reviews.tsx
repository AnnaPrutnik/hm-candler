'use client';

import { useState } from 'react';
import { reviews } from '@/db/reviews';
import '@/styles/reviews.scss';
import Image, { StaticImageData } from 'next/image';
import Decor from './Decor';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onClickSlider = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="reviews section--decor-overflow">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Відгуки від клієнтів</h3>
          <p className="text">
            Наші покупці мають різний вік, статус, заняття і інтереси, але у них
            є одна спільна риса - вони прагнуть до гармонії і знаходять радість
            у маленьких радощах життя, які створюють атмосферу затишку та
            гармонії у їхньому домі.
          </p>
        </div>

        <div>
          <ul className="reviews__list">
            {reviews.map((review, index) => (
              <li
                key={index}
                className={`reviews__item ${
                  index === activeIndex ? 'shown' : 'hidden'
                }`}
              >
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>

          <div className="slider__thumb">
            {reviews.map((_, index) => (
              <button
                className={`slider__indicator ${
                  index === activeIndex ? 'active' : ''
                }`}
                key={index}
                onClick={() => onClickSlider(index)}
              ></button>
            ))}
          </div>
          <Decor padding={true} />
        </div>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  review: {
    media: string;
    product: StaticImageData;
    userName: string;
    message: string;
  };
}

function ReviewCard({ review }: ReviewCardProps) {
  const { media, message, product, userName } = review;

  const mediaClassName =
    media === 'instagram'
      ? 'instagram'
      : media === 'facebook'
      ? 'facebook'
      : '';

  return (
    <div className="reviews__card">
      <div className="reviews__image">
        <Image
          src={product}
          alt={`picture for product`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="30vw"
        />
      </div>
      <div className="reviews__content">
        <div className={`reviews__media ${mediaClassName}`}></div>
        <p className="sub-title">{userName}</p>
        <p className="reviews__message">{message}</p>
        <button className="btn">Купити цей товар</button>
      </div>
    </div>
  );
}
