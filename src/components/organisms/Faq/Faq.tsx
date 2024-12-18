import React, { useState } from "react";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import Wrapper from "@/components/atoms/Wrapper";
import FaqBlock from "@/components/molecules/FaqBlock";
import styles from "./Faq.module.scss";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Faq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleFaqClick = (id: number) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      <Wrapper>
        <div className={styles.faq__inner}>
          <div className={styles.faq__header}>
            <SectionSpan>FAQs</SectionSpan>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </div>
          <div className={styles.faq__content}>
            {faqData.map((faq) => (
              <FaqBlock
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                open={openFaqId === faq.id}
                onClick={() => handleFaqClick(faq.id)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faq;
