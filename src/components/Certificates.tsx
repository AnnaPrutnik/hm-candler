'use client';
import { useState } from 'react';
import { certificates } from '@/db/certificatetes';
import Decor from './Decor';

import '@/styles/certificates.scss';
import Image, { StaticImageData } from 'next/image';

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onClickSlider = (index: number) => {
    setActiveIndex(index);
  };

  const classNameForSlider =
    activeIndex === 0 ? 'first' : activeIndex === 1 ? 'second' : 'third';

  return (
    <section className="certificates">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Сертифікати якості</h3>
          <p className="certificates__title">
            Сертифікати забезпечують додаткову довіру та впевненість для наших
            клієнтів.
          </p>
        </div>

        <div className="certificates__slider section--decor section--decor-padding">
          <div className="certificates__inner">
            <ul className={`certificates__list ${classNameForSlider}`}>
              {certificates.map((certificate, index) => (
                <li
                  key={index}
                  className={`certificates__item ${
                    index !== activeIndex ? 'hidden' : 'shown'
                  }`}
                >
                  <CertificateCard image={certificate.picture} />
                </li>
              ))}
            </ul>
          </div>

          <div className="slider__thumb">
            {certificates.map((_, index) => (
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

interface CertificateCardProps {
  image: StaticImageData;
}

function CertificateCard({ image }: CertificateCardProps) {
  return (
    <div className="certificates__card">
      <div className="certificates__image">
        <Image
          src={image}
          alt={`picture for product`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="30vw"
        />
      </div>
    </div>
  );
}
