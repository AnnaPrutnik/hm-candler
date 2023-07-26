import Image, { StaticImageData } from 'next/image';
import Decor from './Decor';
import { course } from '@/db/courses';
import '@/styles/course.scss';

export default function Courses() {
  return (
    <section className="course">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Наші курси</h3>
          <p className="text">
            Наші курси дозволяють зробити перший крок в новій кар'єрі або
            поглибити знання в своїй галузі, розвиватися як професіонал, а також
            покращити якість свого життя.
          </p>
        </div>
        <div>
          <ul className="course__list ">
            {course.map((item) => (
              <CourseItem
                key={item.title}
                title={item.title}
                details={item.desc}
                discount={item.discount}
                duration={item.duration}
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

interface CourseItemProp {
  title: string;
  duration: number;
  discount: number;
  details: string;
  image: StaticImageData;
}

function CourseItem({
  details,
  discount,
  duration,
  title,
  image,
}: CourseItemProp) {
  return (
    <li className="course__item">
      <div className="course__image">
        <Image
          src={image}
          alt={`Картинка для курсу ${title}`}
          fill
          sizes="100vw, (min-width:480px) 50vw, (min-width:768px) 30vw"
          style={{ objectFit: 'cover' }}
        />
        <p className="course__budge course__budge-name">{title}</p>
        <p className="course__budge course__budge-duration">
          <span>Навчання</span>
          <span className="course__study">{` - ${duration} год`}</span>
        </p>
        <p className="course__budge course__budge-discount">{`Ціна -${discount}$`}</p>
      </div>
      <div className="course__info">
        <h4 className="sub-title course__title">{title}</h4>
        <p className="sub-text course__details">{details}</p>
        <button className="btn">Купити курс</button>
      </div>
    </li>
  );
}
