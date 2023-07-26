import Image, { StaticImageData } from 'next/image';
import Decor from './Decor';
import { teachers } from '@/db/teachers';
import '@/styles/teachers.scss';

export default function Teachers() {
  return (
    <section className="teachers section--dark">
      <div className="container  section--grid">
        <div className="section__desc">
          <h3 className="title section__title">Наші викладачі</h3>
          <p className="text">
            Ці люди працюють разом, щоб створювати курси для вас, які допоможуть
            вам почати власний бізнес або хоббі.
          </p>
        </div>

        <ul className="teachers__list">
          {teachers.map((teacher) => (
            <TeacherItem
              key={teacher.name}
              name={teacher.name}
              about={teacher.about}
              position={teacher.position}
              picture={teacher.picture}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface TeacherItemProp {
  name: string;
  position: string;
  about: string;
  picture: StaticImageData;
}

function TeacherItem({ about, name, picture, position }: TeacherItemProp) {
  return (
    <li className="teachers__item">
      <div className="teachers__image">
        <Image
          src={picture}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="60vw ,(min-width: 480px) 40vw, (min-width: 768px) 20vw"
        />
      </div>

      <div className="teachers__budge">
        <p className="teachers__title">{`${position} ${name}`}</p>
        <p className="teachers__about">{about}</p>
      </div>
    </li>
  );
}
