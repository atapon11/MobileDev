import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthService from "../services/auth.service";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 caracters or less")
        .min(3, "Must be 3 caracters or less")
        .required("Required"),
      password: Yup.string()
        .max(8, "Must be 15 caracters or less")
        .min(3, "Must be 3 caracters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      handleLogin(values.username, values.password);
    },
  });
  const handleLogin = async (username, password) => {
    setLoading(true);
    AuthService.login(username, password).then(
      () => {
        //     setInterval(()=>{
        // navigate("/profile");
        //     }, 3000)
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setLoading(false);
      }
    );
  };
  return (
    <div className="container">
      <h1>Authentication</h1>
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile"
          className="profile-img-card"
        />
        <Form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            {formik.touched.username && formik.errors.username ? (
                <div className="alert alert-danger" role={"alert"}>
                    {formik.errors.username}
                    </div>
            ) : null}
          </div>
          <label>Username</label>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <div className="form-group">
            {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger" role={"alert"}>
                    </div>
            ):null}
          <Input
            type="password"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
             </div>
          <div className="form-group">
            <Button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spin-border-sm"></span>
              )}
              <span>Login</span>
            </Button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Login;
