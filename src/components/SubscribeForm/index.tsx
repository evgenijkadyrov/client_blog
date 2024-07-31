"use client";

import { SyntheticEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { subscribeFormSchema } from "validations/emailShema";

import { Button } from "components/Button";

import styles from "./subscribeForm.module.scss";

export const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string>("");
    const [focused, setFocused] = useState(false);
    const t = useTranslations("Footer");

    const validateEmail = () => {
        if (focused && !email.trim()) {
            setError("");
            return;
        }

        try {
            subscribeFormSchema.validateSync({ email });
            setError("");
        } catch (error) {
            setError((error as Error).message);
        }
    };

    const handleSendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        validateEmail();
        console.log(email);
    };

    const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setEmail(value);
        if (!value.trim()) {
            setError("");
        }
    };

    const onFocusHandler = () => {
        setFocused(true);
    };

    const onBlurHandler = () => {
        setFocused(false);
    };
    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSendEmail}>
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    placeholder={t("formEmail")}
                    value={email}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />

                <Button bgcolor="yellow" onClick={handleSendEmail} type="submit">
                    {t("buttonSubscribe")}
                </Button>
            </form>
            {!focused && error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
