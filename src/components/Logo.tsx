import logo from '../../public/logo.png';
import Image from 'next/image';

export default function Logo() {
  return (
    <a href="#" className="logo">
      <Image alt="logo" src={logo} width={70} height={70} />
    </a>
  );
}
