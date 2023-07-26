import Image from 'next/image';

interface SocialItemProp {
  name: string;
  image: string;
  link: string;
}

export default function SocialItem({ name, image, link }: SocialItemProp) {
  return (
    <li className="footer__social-item">
      <a href={link} className="footer_social-link">
        <Image alt={`${name} icon`} src={image} width={22} height={22} />
      </a>
    </li>
  );
}
