import React from "react";
import styled from "styled-components";
import { StyledSection } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet.
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(StyledSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
