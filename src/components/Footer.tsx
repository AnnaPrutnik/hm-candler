import NavList from './NavList';
import Logo from './Logo';
import SocialItem from './SocialItem';
import '@/styles/footer.scss';
import facebook from '../../public/svg/facebook.svg';
import instagram from '../../public/svg/instagram.svg';
import linkedin from '../../public/svg/linkedin.svg';
import youtube from '../../public/svg/youtube.svg';

const socialItems = [
  { name: 'facebook', image: facebook, link: '#' },
  { name: 'instagram', image: instagram, link: '#' },
  { name: 'linkedin', image: linkedin, link: '#' },
  { name: 'youtube', image: youtube, link: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <nav className="nav">
          <NavList />
        </nav>
        <div className="footer__contacts">
          <a href="tel:+45 65 78 98 76" className="phone">
            +45 65 78 98 76
          </a>
          <a href="mailto:candelsCandels@gmail.com" className="email">
            candelsCandels@gmail.com
          </a>
          <ul className="footer__social">
            {socialItems.map((social) => (
              <SocialItem
                key={social.name}
                image={social.image}
                link={social.link}
                name={social.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
