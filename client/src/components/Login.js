import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      alert("registered!");
      // setAlert(`Welcome`, 'success');
      dispatch(login(name, email));
    } else {
      // setAlert('Invalid Credentials', 'danger');
      alert("error");
    }
  };

  return (
    <div className="login-container">
      <h1>
        <i className="fa-solid fa-check"></i> Login
      </h1>
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
