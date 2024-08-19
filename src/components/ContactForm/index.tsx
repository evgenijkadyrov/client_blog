"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { ENV_VARS } from "constants/envVariables";
import { FORM_QUERY } from "constants/formQuery";
import { useTranslations } from "next-intl";
import { contactFormSchema } from "validations/contactFormSchema";

import { Button } from "components/ui/Button";
import { CustomInput } from "components/ui/Input";
import { CustomSelect } from "components/ui/Select";
import { CustomTextArea } from "components/ui/TextArea";

import styles from "./contactForm.module.scss";

type FormData = {
    name: string;
    email: string;
    query: string;
    message: string;
};
export const ContactForm = () => {
    const t = useTranslations("ContactPage");
    const [showNotification, setShowNotification] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({ resolver: yupResolver(contactFormSchema), mode: "onBlur" });
    const onSubmit: SubmitHandler<FormData> = (data) => {
        const { name, message, query, email } = data;

        const service = ENV_VARS.EMAILJS_SERVICE || "";
        const template = ENV_VARS.EMAILJS_CONTACT_TEMPLATE || "";
        const key = ENV_VARS.EMAILJS_PUBLIC_KEY || "";
        setIsLoading(true);
        try {
            emailjs
                .send(
                    service,
                    template,
                    {
                        name,
                        email,
                        query,
                        message,
                    },
                    key
                )

                .then((result) => {
                    reset();
                    if (result.text === "OK") {
                        setShowNotification("Message sent");
                        setIsLoading(false);
                    }
                })
                .catch((reason) => {
                    setShowNotification(`Message not sent,${reason}`);
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowNotification("");
        }, 3000);

        return () => clearTimeout(timeout);
    }, [showNotification]);
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contacts}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <CustomInput
                        key="name"
                        placeholder={t("form.name")}
                        {...register("name")}
                        className={styles.input}
                        errorMessage={errors.name?.message}
                    />
                    <CustomInput
                        key="email"
                        placeholder={t("form.email")}
                        {...register("email")}
                        className={styles.input}
                        errorMessage={errors.email?.message}
                    />
                    <CustomSelect
                        key="query"
                        label={t("form.queryPlaceholder")}
                        options={FORM_QUERY.map((query) => ({
                            value: query,
                            label: t(`form.queries.${query}`),
                        }))}
                        {...register("query")}
                        errorMessage={errors.query?.message}
                    />

                    <CustomTextArea
                        key="message"
                        placeholder={t("form.message")}
                        {...register("message")}
                        errorMessage={errors.message?.message}
                    />
                    <Button
                        type="submit"
                        bgcolor="yellow"
                        size="full"
                        disabled={!isValid}>
                        {isLoading ? <p>Loading</p> : t("form.button")}
                    </Button>
                </form>
                {showNotification && <h5>{showNotification}</h5>}
            </div>
        </div>
    );
};
