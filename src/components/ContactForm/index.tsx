"use client";

import { SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ENV_VARS } from "constants/envVariables";
import { FORM_QUERY } from "constants/formQuery";
import { useTranslations } from "next-intl";
import { contactFormSchema } from "validate/contactFormSchema";
import { ValidationError } from "yup";

import { Button } from "components/Button";
import { CustomInput } from "components/Input";
import { CustomSelect } from "components/Select";
import { CustomTextArea } from "components/TextArea";

import styles from "./contactForm.module.scss";

export interface FormState {
    name: string;
    email: string;
    query: string;
    message: string;
}

export const initialState: FormState = {
    name: "",
    email: "",
    query: "",
    message: "",
};

export interface FormErrorsState {
    name: boolean;
    email: boolean;
    query: boolean;
    message: boolean;
}

export const initialErrors: FormErrorsState = {
    name: false,
    email: false,
    query: false,
    message: false,
};
export const ContactForm = () => {
    const t = useTranslations("ContactPage");
    const [formData, setFormData] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<FormErrorsState>(initialErrors);

    const validate = (field: string, value: string) => {
        const data = { ...formData, [field]: value };
        contactFormSchema
            .validate(data, { abortEarly: false })
            .then(() => {
                setErrors({ ...initialErrors });
            })
            .catch((err) => {
                const error = err as ValidationError;
                const errors = error.inner.filter((e) => e.path === field);

                if (errors.length > 0) {
                    setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
                }
            });
    };
    const onChangeHandler = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;
        validate(name, value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const sendEmail = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();
        const isDataValid = await contactFormSchema.isValid(formData, {
            abortEarly: false,
        });
        if (isDataValid) {
            const service = ENV_VARS.EMAILJS_SERVICE;
            const template = ENV_VARS.EMAILJS_CONTACT_TEMPLATE;
            const key = ENV_VARS.EMAILJS_PUBLIC_KEY;

            if (service && template && key) {
                emailjs
                    .send(
                        service,
                        template,
                        {
                            name: formData.name,
                            email: formData.email,
                            query: formData.query,
                            message: formData.message,
                        },
                        key
                    )
                    .then((result) => {
                        console.log(result.text);
                    })
                    .catch((reason) => {
                        console.log(reason);
                    });
            }
            setErrors({ ...initialErrors });
            setFormData({ ...initialState });
        } else {
            contactFormSchema.validate(formData, { abortEarly: false }).catch((err) => {
                const error = err as ValidationError;
                const errors = error.inner.reduce(
                    (acc, error) => ({
                        ...acc,
                        [error.path!]: true,
                    }),
                    {}
                );

                setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
            });
        }
    };

    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contacts}>
                <form className={styles.form}>
                    <CustomInput
                        name="name"
                        placeholder={t("form.name")}
                        value={formData.name}
                        onChange={onChangeHandler}
                        className={styles.input}
                    />
                    <CustomInput
                        name="email"
                        placeholder={t("form.email")}
                        value={formData.email}
                        onChange={onChangeHandler}
                        className={styles.input}
                    />
                    <CustomSelect
                        name="query"
                        label={t("form.queryPlaceholder")}
                        options={FORM_QUERY.map((query) => ({
                            value: query,
                            label: t(`form.queries.${query}`),
                        }))}
                        onChange={onChangeHandler}
                    />
                    <CustomTextArea
                        name="message"
                        placeholder={t("form.message")}
                        value={formData.message}
                        onChange={onChangeHandler}
                    />
                    <Button onClick={sendEmail} bgcolor="yellow" size="full">
                        {t("form.button")}
                    </Button>
                    <div>{errors.message}</div>
                </form>
            </div>
        </div>
    );
};
