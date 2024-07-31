"use client";

import { useState } from "react";
import classNames from "classnames";
import { TESTIMONIALS_CARDS } from "constants/testimonials";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./testimonials.module.scss";

export const Testimonials = () => {
    const t = useTranslations("HomeHero");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrevClick = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? TESTIMONIALS_CARDS.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === TESTIMONIALS_CARDS.length ? 0 : prevIndex + 1
        );
    };
    return (
        <div className={styles.wrapperTestimonials}>
            <div className={styles.testimonials}>
                <h6 className={styles.testimonialsSubTitle}>{t("Testimonials.subTitle")}</h6>
                <h2 className={styles.testimonialsTitle}>{t("Testimonials.title")}</h2>

                <p className={styles.testimonialsDescription}>{t("Testimonials.description")}</p>
            </div>
            <div className={styles.review}>
                {TESTIMONIALS_CARDS.map((review, index) => (
                    <div
                        key={review.id}
                        className={classNames(
                            styles.reviewItem,
                            currentIndex === index && styles.reviewItemActive
                        )}>
                        <h3 className={styles.reviewText}>{review.text}</h3>
                        <div className={styles.authorItem}>
                            <Image
                                src={review.img}
                                alt={review.author}
                                className={styles.authorItemAvatar}
                            />
                            <div className={styles.authorItemInfo}>
                                <h3 className={styles.authorItemInfoName}>{review.author}</h3>
                                <p className={styles.authorItemInfoCity}>{review.from}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.controls}>
                    <button
                        className={classNames(styles.controlsButton, styles.controlsButtonPrev)}
                        onClick={handlePrevClick}
                        aria-label="Previous">
                        <span className={styles.arrow} />
                    </button>
                    <button
                        className={classNames(styles.controlsButton, styles.controlsButtonNext)}
                        onClick={handleNextClick}
                        aria-label="Next">
                        <span className={styles.arrow} />
                    </button>
                </div>
            </div>
        </div>
    );
};
