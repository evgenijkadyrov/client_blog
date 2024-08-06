import { useTranslations } from "next-intl";

import { ContactForm } from "components/ContactForm";
import Container from "components/Container";
import { Map } from "components/Map";

import "styles/globals.scss";
import styles from "./contact.module.scss";

const Contact = () => {
    const t = useTranslations("ContactPage");
    return (
        <Container>
            <section className={styles.top}>
                <h5 className={styles.topSupTitle}>{t("top.subTitle")}</h5>
                <h1 className={styles.topTitle}>{t("top.title")}</h1>
                <p className={styles.topText}>{t("top.description")}</p>
            </section>
            <section className={styles.formHeader}>
                <div className={styles.formHeaderRow}>
                    <div className={styles.formHeaderBlock}>
                        <div className={styles.blockHeader}>
                            <p>{t("header.block_1.title")}</p>
                        </div>
                        <div className={styles.blockContent}>
                            <h5 className={styles.blockTitle}>{t("header.block_1.days")}</h5>
                            <h5 className={styles.blockTitle}>{t("header.block_1.time")}</h5>
                            <p className={styles.blockText}>{t("header.block_1.description")}</p>
                        </div>
                    </div>
                    <div className={styles.formHeaderBlock}>
                        <div className={styles.blockHeader}>
                            <p>{t("header.block_2.title")}</p>
                        </div>
                        <div className={styles.blockContent}>
                            <h5 className={styles.blockTitle}>020 7993 2905</h5>
                            <p className={styles.blockText}>hello@finsweet.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
            <Map />
        </Container>
    );
};

export default Contact;
