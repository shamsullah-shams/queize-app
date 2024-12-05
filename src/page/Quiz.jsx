import React, { useEffect, useState } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(0);
  const [green, setGreen] = useState(false);
  const [selectedQuestion, setSelectedQuestions] = useState([]);

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

  // select handler
  const selectHandler = (number) => {
    setSelected(number);
  };

  const increase = () => {
    setCurrent(current + 1);
    setSelected(0);
  };

  const handleQuestion = (index) => {
    const correctAnswer = questions[selectedQuestion[current]].answer;
    const q = questions[selectedQuestion[current]].options[index];

    if (q === correctAnswer) {
      setSelected(index + 1);
    } else {
      setGreen(true);
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          width: "500px",
          margin: "auto",
          padding: "12px",
          background: "white",
          marginTop: "80px",
          boxShadow: "0 4px 8px rgb(0, 0, 0, 0.7)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            marginLeft: "10%",
            marginRight: "10%",
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
            <span style={{ fontWeight: "bold", color: "red" }}>4</span>/10
          </div>
        </div>
        <p style={{ marginLeft: "10%", fontSize: "24px", fontWeight: "bold" }}>
          {selectedQuestion.length > 0 && (
            <>{questions[selectedQuestion[current]].question}</>
          )}
        </p>
        {selectedQuestion.length > 0 &&
          questions[selectedQuestion[current]].options.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleQuestion(index)}
                style={{
                  ...styles.choice,
                  backgroundColor:
                    green && selected === index + 1
                      ? "red"
                      : selected === index + 1 && "green",
                  color: selected === index + 1 && "white",
                }}
              >
                {item}
              </div>
            );
          })}
        {/* <div
          onClick={() => selectHandler(1)}
          style={{
            ...styles.choice,
            backgroundColor: selected === 1 && "#3c5cfa",
            color: selected === 1 && "white",
          }}
        >
          Kabul University
        </div>
        <div
          onClick={() => selectHandler(2)}
          style={{
            ...styles.choice,
            backgroundColor: selected === 2 && "#3c5cfa",
            color: selected === 2 && "white",
          }}
        >
          Helmand University
        </div>
        <div
          onClick={() => selectHandler(3)}
          style={{
            ...styles.choice,
            backgroundColor: selected === 3 && "#3c5cfa",
            color: selected === 3 && "white",
          }}
        >
          Kandahar University
        </div>
        <div
          onClick={() => selectHandler(4)}
          style={{
            ...styles.choice,
            backgroundColor: selected === 4 && "#3c5cfa",
            color: selected === 4 && "white",
          }}
        >
          Herat University
        </div> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "12px",
            marginRight: "7%",
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
