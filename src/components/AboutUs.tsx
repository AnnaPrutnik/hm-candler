import Image, { StaticImageData } from 'next/image';
import { items } from '@/db/aboutUs';
import Decor from './Decor';
import '@/styles/about.scss';

export default function AboutUs() {
  return (
    <section className="about section--dark">
      <div className="container about__inner">
        <div className="about__content">
          <h3 className="title about__title">Про нас</h3>
          <p className="text  about__desc">
            Богдан творець бренду який завжди зацікавлений у виготовленні
            різноманітних речей вдома. Він регулярно експериментував з різними
            матеріалами та інструментами, спробувавши свої сили у багатьох
            галузях, включаючи виготовлення свічок.
          </p>
          <p className="text ">
            Ссоєвий віск виготовляють із соєвих бобів, що зрощуються в Данії, і
            цей вид воску є екологічно чистим та безпечним для здоров&apos;я.
          </p>
        </div>
        <div className="decor__wrapper">
          <ul className="about__list">
            {items.map((item, index) => (
              <CandleItem
                image={item.image}
                small={item.small}
                text={item.text}
                hidden={item.hidden}
                key={index}
              />
            ))}
          </ul>
          <Decor padding={false} />
        </div>
      </div>
    </section>
  );
}

interface CandleItemProps {
  text: string;
  image: StaticImageData;
  small: boolean;
  hidden: boolean;
}

function CandleItem({ text, image, small, hidden }: CandleItemProps) {
  const itemClassName = `${hidden ? 'about__item--hidden' : ''} ${
    small ? 'about__image--small' : 'about__i--big'
  }`;
  return (
    <li className={`about__item ${itemClassName}`}>
      <div className="about__image">
        <Image
          src={image}
          alt="candle"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw, (min-width: 480px) 33vw"
        />
      </div>
      <p className="about__text">{text}</p>
    </li>
  );
}
