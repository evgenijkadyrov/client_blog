import { emailValidation } from "validations/emailShema";
import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name must contain at least 3 character")
        .max(128, "Name must contain maximum 128 characters")
        .required("Name is required"),
    email: emailValidation,
    query: yup.string().required("Query is required"),
    message: yup.string().required("Message is required"),
});
