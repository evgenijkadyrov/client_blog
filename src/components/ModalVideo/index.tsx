"use client";

import { KeyboardEvent, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "components/Button";

import "styles/colors.scss";
import styles from "./modalVideo.module.scss";

export const ModalVideo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations("ModalVideo");

    const handleClick = () => {
        setIsModalOpen((prev) => !prev);
    };
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            handleClick();
        }
    };
    return (
        <>
            <div className={styles.button}>
                <Button onClick={handleClick} label={t("Button")} bgcolor="white" size="large" />
            </div>
            {isModalOpen && (
                <div
                    onClick={handleClick}
                    onKeyDown={handleKeyPress}
                    tabIndex={0}
                    role="button"
                    className={styles.modalWrapper}>
                    <div className={styles.modalContent}>
                        <iframe
                            width="850"
                            height="500"
                            aria-label="Embedded YouTube Video"
                            src="https://www.youtube.com/embed/1rRD9uMF92o?si=HEq8w_N9KUgPsglo"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};
