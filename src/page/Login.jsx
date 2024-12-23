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
    <div style={{ width: "400px", textAlign: "center" }}>
      <div style={styles.divStyle}>
        <label style={{ color: "white", marginTop: "20px" }}>
          Enter Your Email
        </label>
        <br />
        <input
          placeholder="Enter your Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={styles.inputStyle}
        />
      </div>
      <div style={styles.divStyle}>
        <label style={{ color: "white", marginTop: "20px" }}>
          Enter Your name
        </label>
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
      <button type="submit" style={styles.buttonStyle} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  inputStyle: {
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#333",
    color: "white",
    width: "94%",
  },

  divStyle: {
    textAlign: "left",
    marginTop: "25px",
  },
  buttonStyle: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#333",
    marginTop: "25px",
    color: "white",
  },
};

export default Login;
