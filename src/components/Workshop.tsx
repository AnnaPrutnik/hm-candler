import Image, { StaticImageData } from 'next/image';
import Decor from './Decor';
import { steps } from '@/db/workshop';
import '@/styles/workshop.scss';

export default function Workshop() {
  return (
    <section className="workshop">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Етапи створення свічок</h3>
          <p className="text">
            Створення свічки із соєвого воску може складатися з наступних
            етапів:
          </p>
        </div>
        <div>
          <ul className="workshop__list ">
            {steps.map((item) => (
              <WorkshopItem
                key={item.step}
                step={item.step}
                details={item.details}
                image={item.image}
              />
            ))}
          </ul>
          <Decor padding={true} />
        </div>
      </div>
    </section>
  );
}

interface WorkshopItemProps {
  step: string;
  details: string;
  image: StaticImageData;
}

function WorkshopItem({ step, details, image }: WorkshopItemProps) {
  return (
    <li className="workshop__item">
      <div className="workshop__info">
        <p className="sub-text">{details}</p>
        <p className="workshop__step">{step}</p>
      </div>
      <div className="workshop__image">
        <Image
          src={image}
          alt={`image for step ${step}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="50vw (min-width: 480px) 25vw"
        />
      </div>
    </li>
  );
}
