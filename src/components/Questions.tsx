'use client';
import { useState } from 'react';

import { questions } from '@/db/questions';
import '@/styles/questions.scss';

export default function Questions() {
  return (
    <section className="questions">
      <div className="container section--grid">
        <div className="section__desc">
          <h3 className="title">Часті запитання</h3>
        </div>
        <ul className="questions__list">
          {questions.map((item, index) => (
            <li key={item.title} className="questions__item accordion">
              <Details
                question={item.title}
                answer={item.answer}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface DetailsProps {
  question: string;
  answer: string;
  index: number;
}

function Details({ answer, question, index }: DetailsProps) {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  const extraClassName = checked ? 'open' : 'close';
  return (
    <>
      <label
        htmlFor={`ques-${index}`}
        className={`sub-title accordion__head ${extraClassName}`}
      >
        {question}
      </label>
      <input
        type="checkbox"
        id={`ques-${index}`}
        hidden
        checked={checked}
        onChange={onChange}
      />
      <div className={`accordion__content ${extraClassName}`}>
        <div className="accordion__inner">
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
}
