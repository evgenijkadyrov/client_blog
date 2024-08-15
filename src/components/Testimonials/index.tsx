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
        // <section className={styles.wrapperTestimonials}>
        //     <div className={styles.inner}>
        //
        //         <div className={styles.testimonials}>
        //             <h6 className={styles.testimonialsSubTitle}>
        //                 {t("Testimonials.subTitle")}
        //             </h6>
        //             <h2 className={styles.testimonialsTitle}>
        //                 {t("Testimonials.title")}
        //             </h2>
        //
        //             <p className={styles.testimonialsDescription}>
        //                 {t("Testimonials.description")}
        //             </p>
        //         </div>
        //         <div className={styles.carousel}>
        //
        //             <div className={styles.review}>
        //                 {TESTIMONIALS_CARDS.map((review, index) => (
        //                     <div
        //                         key={review.id}
        //                         className={classNames(
        //                             styles.reviewItem,
        //                             currentIndex === index && styles.reviewItemActive
        //                         )}>
        //                         <h3 className={styles.reviewText}>{review.text}</h3>
        //                         <div className={styles.authorItem}>
        //                             <Image
        //                                 src={review.img}
        //                                 alt={review.author}
        //                                 className={styles.authorItemAvatar}
        //                             />
        //                             <div className={styles.authorItemInfo}>
        //                                 <h3 className={styles.authorItemInfoName}>
        //                                     {review.author}
        //                                 </h3>
        //                                 <p className={styles.authorItemInfoCity}>
        //                                     {review.from}
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //
        //                 <div className={styles.controls}>
        //                     <button
        //                         className={classNames(
        //                             styles.controlsButton,
        //                             styles.controlsButtonPrev
        //                         )}
        //                         onClick={handlePrevClick}
        //                         aria-label="Previous">
        //                         <span className={styles.arrow}/>
        //                     </button>
        //                     <button
        //                         className={classNames(
        //                             styles.controlsButton,
        //                             styles.controlsButtonNext
        //                         )}
        //                         onClick={handleNextClick}
        //                         aria-label="Next">
        //                         <span className={styles.arrow}/>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h5 className={styles.contentSupTitle}>
                        {t("Testimonials.subTitle")}
                    </h5>
                    <h2 className={styles.contentTitle}>
                        {t("Testimonials.title")}
                    </h2>
                    <p>{t("Testimonials.description")}</p>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.carouselItems}>
                        {TESTIMONIALS_CARDS.map(
                            ({ img, author, from, id, text }, index) => (
                                <div
                                    key={id}
                                    className={classNames(
                                        styles.carouselItem,
                                        currentIndex === index &&
                                            styles.carouselItemActive
                                    )}>
                                    <h4>{text}</h4>
                                    <div className={styles.carouselItemInfo}>
                                        <Image
                                            src={img}
                                            alt={author}
                                            className={styles.authorImage}
                                        />
                                        <div className={styles.author}>
                                            <h4 className={styles.author}>
                                                {author}
                                            </h4>
                                            <p className={styles.authorFrom}>
                                                {from}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className={styles.carouselControls}>
                        <button
                            className={classNames(
                                styles.carouselButton,
                                styles.carouselButtonPrev
                            )}
                            onClick={handlePrevClick}
                            aria-label="Previous">
                            <span className={styles.arrow} />
                        </button>
                        <button
                            className={classNames(
                                styles.carouselButton,
                                styles.carouselButtonNext
                            )}
                            onClick={handleNextClick}
                            aria-label="Next">
                            <span className={styles.arrow} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
