import '@/styles/hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h3 className="hero__title">
            Створіть атмосферу затишку та гармонії!
          </h3>
          <p className="hero__text">
            Створіть особливу атмосферу у своєму домі з нашою екологічно чистою
            та якісною продукцією зі 100% натуральної соєвого воску.
          </p>
          <button className="btn hero__btn">Купити</button>
        </div>
        <div className="hero__background"></div>
      </div>
    </section>
  );
}
