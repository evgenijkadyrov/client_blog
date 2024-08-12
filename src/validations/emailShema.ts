import * as yup from "yup";

export const emailValidation = yup
    .string()
    .email("Please enter a valid email format!")
    .test("valid-domain", "Email domain must be a short name", (value) => {
        if (!value) return true;
        const parts = value.split("@");
        if (parts.length !== 2) return false;
        const domainParts = parts[1].split(".");
        return domainParts.length === 2;
    })
    .required("Email is required!");

export const subscribeFormSchema = yup.object().shape({
    email: emailValidation,
});
