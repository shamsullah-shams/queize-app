import React, { useState } from "react";

const Quiz = () => {
  const [selected, setSelected] = useState(0);

  // select handler
  const selectHandler = (number) => {
    setSelected(number);
  };

  return (
    <React.Fragment>
      <div
        style={{
          width: "500px",
          margin: "auto",
          padding: "12px",
          background: "#f5f2f2",
          marginTop: "80px",
          boxShadow: "0 4px 8px rgb(0, 0, 0, 0.7)",
          borderRadius: "20px",
        }}
      >
        <div style={{ marginLeft: "10%" }}>
          <span style={{ fontWeight: "bold", color: "red" }}>4</span>/10
        </div>
        <p style={{ marginLeft: "10%", fontSize: "24px", fontWeight: "bold" }}>
          What is your university name?
        </p>
        <div
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
        </div>

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
    background: "#f5f2f2",
    marginTop: "10px",
    boxShadow: "0 4px 8px rgb(0, 0, 0, 0.7)",
    cursor: "pointer",
  },
};

export default Quiz;
