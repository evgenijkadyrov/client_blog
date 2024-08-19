"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "components/ui/Button";

import "styles/colors.scss";
import styles from "./modalVideo.module.scss";

const URL_VIDEO =
    "https://www.youtube.com/embed/1rRD9uMF92o?si=HEq8w_N9KUgPsglo";
export const ModalVideo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations("ModalVideo");

    const handleClick = () => {
        setIsModalOpen((prev) => !prev);
    };
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);
    return (
        <>
            <div className={styles.button}>
                <Button
                    onClick={handleClick}
                    label={t("Button")}
                    bgcolor="white"
                    size="large"
                />
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
                            width="100%"
                            height="100%"
                            aria-label="Embedded YouTube Video"
                            src={URL_VIDEO}
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
