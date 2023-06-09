import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import RegisterSchema from "./../../Schemas/RegisterSchema";
import { register } from "../../services/AuthService";
import FormControl from "../../components/FormControl/FormControl";
import "./Register.css";


const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      register(values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            let message = err.response.data.message;
            if (message.includes("email")) {
              setFieldError("email", message);
            }
          } else {
            setFieldError("email", err.message);
          }
          setSubmitting(false);
        });
    },
  });

  console.log(errors);

  return (
    <div className="form-register">
      <div className="inside-form">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <FormControl
            text="First Name"
            error={touched.firstName && errors.firstName}
            htmlFor="firstName"
          >
            <Input
              label="FirstName"
              placeholder="FirstName"
              name="firstName"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
          </FormControl>
          <FormControl
            text="Last Name"
            error={touched.lastName && errors.lastName}
            htmlFor="lastName"
          >
            <Input
              label="LastName"
              placeholder="LastName"
              name="lastName"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </FormControl>
          <FormControl
            text="Username"
            error={touched.username && errors.username}
            htmlFor="username"
          >
            <Input
              label="Username"
              placeholder="Username"
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
            />
          </FormControl>
          <FormControl
            text="Email"
            error={touched.email && errors.email}
            htmlFor="email"
          >
            <Input
              label="Email"
              placeholder="Ex: antonia@gmail.com"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
          </FormControl>
          <FormControl
            text="Password"
            error={touched.password && errors.password}
            htmlFor="password"
          >
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
          </FormControl>
          <button
            type="submit"
            className="button-register"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading" : "Register"}
          </button>
          <button className="btn-login" to="/" onClick={() => navigate(-1)}> Back</button>
           
        </form>
      </div>
    </div>
  );
}
