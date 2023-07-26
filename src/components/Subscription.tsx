import Image from 'next/image';

import '@/styles/subscription.scss';

export default function Subscription() {
  return (
    <section className="subscription">
      <div className="container subscription__inner">
        <div className="form subscription__form">
          <h3 className="title">Підпишись на наші акції</h3>
          <form action="">
            <div className="form__elements">
              <label htmlFor="" className="form__label">
                <input type="text" className="form__input" placeholder="Імя" />
              </label>
              <label htmlFor="" className="form__label">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Е-mail"
                />
              </label>
            </div>

            <button className="btn" type="submit">
              Підписатись
            </button>
          </form>
        </div>

        <div className="subscription__image"></div>
      </div>
    </section>
  );
}
