import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email format!").required("Email is required!"),
    // query: yup.string().required("Query is required"),
    message: yup.string().required("Message is required"),
});
