import React, { useEffect, useState } from "react";
import { questions } from "../data/questions";
import correctAudio from "../assets/audio/1.mp3";
import wrongAudio from "../assets/audio/3.mp3";

const Quiz = () => {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(0);
  const [selectedQuestion, setSelectedQuestions] = useState([]);
  const [color, setColor] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    const getSelectedQuestions = () => {
      const arr = [];

      for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
      }
      return arr;
    };

    setSelectedQuestions(getSelectedQuestions());
  }, []);

  const increase = () => {
    setColor("");
    setIsClicked(false);
    setClickedIndex(null);
    setCurrent(current + 1);
    setSelected(0);
  };

  const handleSelect = (index) => {
    const correctAnswer = questions[selectedQuestion[current]].answer;
    const selectedAnswer = questions[selectedQuestion[current]].options[index];
    if (correctAnswer === selectedAnswer) {
      setColor("green");
      setTimeout(() => {
        const audio = new Audio(correctAudio);
        audio.play();
      }, 1);
    } else {
      setColor("red");
      setTimeout(() => {
        const audio = new Audio(wrongAudio);
        audio.play();
      }, 1);
    }
    setIsClicked(true);
    setClickedIndex(index);
  };

  return (
    <React.Fragment>
      <div
        style={{
          margin: "auto",
          padding: "12px",
          borderRadius: "20px",
          color: "white",
          maxWidth: "500px",
          minWidth: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {current + 1}
            </span>
            /10
          </div>
          <div>
            {/* <span style={{ fontWeight: "bold", color: "red" }}>4</span>/10 */}
          </div>
        </div>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          {selectedQuestion.length > 0 && (
            <>{questions[selectedQuestion[current]].question}</>
          )}
        </p>

        <div className="button-container">
          {selectedQuestion.length > 0 &&
            questions[selectedQuestion[current]].options.map((item, index) => {
              return (
                <div
                  className="button"
                  key={index}
                  onClick={() => handleSelect(index)}
                  style={{
                    color:
                      isClicked && index === clickedIndex ? color : "white",

                    borderColor:
                      isClicked && index === clickedIndex ? color : "#333",
                  }}
                >
                  <span
                    style={{
                      color:
                        isClicked && index === clickedIndex ? color : "white",
                    }}
                  >
                    {index + 1}
                  </span>
                  {item}
                </div>
              );
            })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "12px",
          }}
        >
          <button
            style={{
              padding: "12px",
              borderRadius: "6px",
              width: "100px",
              marginTop: "16px",
              margin: "3px",
            }}
            onClick={increase}
          >
            Next
          </button>
          <button
            style={{
              padding: "12px",
              borderRadius: "6px",
              width: "100px",
              marginTop: "16px",
              margin: "3px",
            }}
          >
            Previous
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  choice: {
    width: "80%",
    margin: "auto",
    padding: "12px",
    background: "white",
    marginTop: "10px",
    boxShadow: "0 4px 8px rgb(0, 0, 0, 0.7)",
    cursor: "pointer",
  },
};

export default Quiz;
