import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  // name handler
  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault(event);
  };

  const handleSubmit = () => {
    setUser({ name: name, email: email });
    navigate("/");
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
            <label>Enter Your name</label>
            <br />
            <input
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={onChangeHandler}
              style={styles.inputStyle}
              type="name"
            />
          </div>

          <button
            type="submit"
            style={styles.buttonStyle}
            onClick={handleSubmit}
          >
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
