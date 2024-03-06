import "./styles.css";
import React, { useState } from "react";
export const Rating = () => {
  const [clicked, setClicked] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleClicked = (buttons: number) => {
    setClicked(buttons);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className="ty-panel">
      <div>
        <img className="img" src="/src/images/illustration-thank-you.svg"></img>
        <p className="par-2">You have selected {clicked} out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you've taken the time to give a rating. if you ever need
          more support don't hesitate to get in touch!
        </p>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="panel">
      <img className="star" src="/src/images/icon-star.svg"></img>
      <h1 className="title">How did we do?</h1>
      <p className="par">
        Please let us know how we did with your support request. All feedbaack
        is appreciated to help us improve out offering!
      </p>

      <div className="group">
        {[1, 2, 3, 4, 5].map((buttons) => (
          <button
            type="button"
            onClick={() => handleClicked(buttons)}
            className="buttons"
          >
            {buttons}
          </button>
        ))}
      </div>
      <button
        onSubmit={(e) => {
          isSubmitted;
        }}
        className="sub"
      >
        SUBMIT
      </button>
    </form>
  );
};
