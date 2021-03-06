import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { setAlert } from "../actions/alert";

const Register = () => {
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
      setAlert("registered!");
      // setAlert(`Welcome`, 'success');
      dispatch(register(name, email));
    } else {
      // setAlert('Invalid Credentials', 'danger');
      setAlert("error");
    }
  };

  return (
    <div className="register-container">
      <h1>{/* <i className="fa-solid fa-user-plus"></i> Register */}</h1>
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder=" Name"
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
              placeholder=" Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
