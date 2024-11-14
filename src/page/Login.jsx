import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // password handler
  const onChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault(event);
  };

  return (
    <div>
      <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <div style={styles.divStyle}>
            <label>Enter Your Email</label>
            <br />
            <input
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={styles.inputStyle}
            />
          </div>

          <br />
          <div style={styles.divStyle}>
            <label>Enter Your Password</label>
            <br />
            <input
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={onChangeHandler}
              style={styles.inputStyle}
              type="password"
            />
          </div>

          <button type="submit" style={styles.buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  inputStyle: {
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
  },

  divStyle: {
    textAlign: "left",
  },
  buttonStyle: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#3c5cfa",
    borderColor: "#3c5cfa",
    marginTop: "15px",
  },
};

export default Login;
