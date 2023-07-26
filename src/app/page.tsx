import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Workshop from '@/components/Workshop';
import Courses from '@/components/Courses';
import Teachers from '@/components/Teachers';
import Reviews from '@/components/Reviews';
import Certificates from '@/components/Certificates';
import Questions from '@/components/Questions';
import Banner from '@/components/Banner';
import Subscription from '@/components/Subscription';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Products />
      <Workshop />
      <Courses />
      <Teachers />
      <Reviews />
      <Certificates />
      <Questions />
      <Banner />
      <Subscription />
    </main>
  );
}
