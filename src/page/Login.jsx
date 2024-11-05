import React from "react";

const Login = () => {
  return (
    <div>
      <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
        <h1>Login</h1>
        <div style={styles.divStyle}>
          <label>Enter Your Email</label>
          <br />
          <input
            placeholder="Enter your Email"
            name="email"
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
            style={styles.inputStyle}
          />
        </div>

        <button style={styles.buttonStyle}>Submit</button>
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
    width: "230px",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "lightgreen",
    borderColor: "lightgreen",
    marginTop: "12px",
  },
};

export default Login;
