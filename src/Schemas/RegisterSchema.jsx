import * as Yup from "yup";
import ERRORS from "../constant/FormErrors";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(ERRORS.ERROR_REQUIRED),
  lastName: Yup.string()
    .required(ERRORS.ERROR_REQUIRED),
  email: Yup.string()
    .email(ERRORS.ERROR_VALID_EMAIL)
    .required(ERRORS.ERROR_REQUIRED),
  password: Yup.string()
    .min(8, ERRORS.ERROR_PASSWORD_LENGTH)
    .required(ERRORS.ERROR_REQUIRED),
});

export default RegisterSchema;