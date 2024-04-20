import React, { useEffect, useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleBtn = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className="faq-container">
      <div className="question">
        <button className={isShow ? "arrow" : ""} onClick={handleBtn}>
          {" "}
          🔼{" "}
        </button>
        <h3> {faq.question} </h3>
      </div>
      {isShow && <div className="answer"> {faq.answer} </div>}
    </div>
  );
};

export default FaqItem;
