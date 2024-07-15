import React, { useState } from "react";
import "./FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqimg from "../media/faq.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "01. How much does a typical project cost?",
      answer:
        "Each project is uniquely tailored, so I prioritize finding the right " +
        "fit between my services and your needs. Let’s book a call to discuss " +
        "if we’re a good match, and then I can provide a customized quote " +
        "based on your specific goals.",
    },
    {
      question: "02. Do you have a team, or are you a solo agency?",
      answer:
        "I love collaborating with other professionals in my network, such as " +
        "professional logo designers, illustrators, and developers, to extend " +
        "my technical capabilities. I've made some great friends along my " +
        "entrepreneurial journey, and being able to bring them into my projects " +
        "brings me great joy and adds a lot of value to the end product. However, " +
        "my ability to integrate this talent into my projects depends on the budget.",
    },
    {
      question: "03. How fast will I have my new brand/website up and running?",
      answer:
        "On average, most projects are completed within 6-10 weeks. However, " +
        "more complex projects can take longer.",
    },
    {
      question: "04. What is the meaning of life?",
      answer:
        "In any given circumstance we all choose our own attitude. We are the " +
        "masters of our own destiny and in that way, the meaning of life is to " +
        "give life meaning. As we see, a human being is not one in pursuit of " +
        "happiness but rather in search of a reason to be happy. Everybody is " +
        "different so there is no right way of finding meaning. I for instance " +
        "achieve meaning through out-of-place FAQ questions.",
    },
  ];

  return (
    <div className="faq-container">
      <img src={faqimg} alt="" />
      <h2>Frequently Asked Questions</h2>
      <div className="questions-container">
        {questions.map((item, index) => (
          <div className="questioninnerbox" key={index}>
            <div
              className="question"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              {item.question}
              <FontAwesomeIcon icon={faAngleDown} />
            </div>

            <div className={`answer ${activeIndex === index ? "active" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
