import NavList from './NavList';
import Logo from './Logo';
import SocialItem from './SocialItem';
import '@/styles/footer.scss';

const socialItems = [
  { name: 'facebook', image: '/svg/facebook.svg', link: '#' },
  { name: 'instagram', image: '/svg/instagram.svg', link: '#' },
  { name: 'linkedin', image: '/svg/linkedin.svg', link: '#' },
  { name: 'youtube', image: '/svg/youtube.svg', link: '#' },
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
