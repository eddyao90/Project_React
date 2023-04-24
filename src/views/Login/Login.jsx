import { useFormik } from "formik";
import { useContext } from "react";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import AuthContext from "../../contexts/AuthContext";
import { login as loginService } from "../../services/AuthService";
import { setAccessToken } from "../../stores/AccessTokenStore";
import { loginSchema } from "../../Schemas/LoginSchema";
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
}

export default function Login () {
 const { login } = useContext(AuthContext);
 const navigate = useNavigate();

 const {
    values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit, setSubmitting, setFieldError
} = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (value) => {
        loginService({ email: values.email, password: values.password})
        .then(response => {
            login(response.accessToken);
        })
        .catch(err => {
            if (err?.response?.data?.message) {
                setFieldError('email', err?.response?.data?.message)
            } else {
                setFieldError('email', err.message)
            }
            setSubmitting(false)
        })
    }
});
return (
    <div className="Login-form">

        <h1 className="register-title">Login</h1>

        <form onSubmit={handleSubmit}>
            <FormControl text="Email" error={touched.email && errors.email} htmlFor="email">
                <Input
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
                placeholder="Enter your email..."
                />
            </FormControl>

            <FormControl text="Password" error={touched.password && errors.password} htmlFor="password">
                <Input
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="Enter your password..."
                type="password"
                />
            </FormControl>

            <button className="btn-login" type="submit" disabled={isSubmitting}>
                {isSubmitting
                ? 'Submitting...'
                : 'Login'
                }
            </button>

            <button className="btn-login" to="/" onClick={() => navigate(-1)}> Back</button>
            </form>
    </div>
)

}