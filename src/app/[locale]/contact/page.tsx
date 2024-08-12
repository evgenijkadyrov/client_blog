import { CONTACT_INFO } from "constants/contactInfo";
import { getTranslations } from "next-intl/server";

import { ContactForm } from "components/ContactForm";
import Container from "components/Container";
import { MapComponent } from "components/Map";

import "styles/globals.scss";
import styles from "./contact.module.scss";

const Contact = async () => {
    const t = await getTranslations("ContactPage");
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
                        <div>
                            <h5>{t("header.block_1.days")}</h5>
                            <h5>{t("header.block_1.time")}</h5>
                            <p className={styles.blockText}>
                                {t("header.block_1.description")}
                            </p>
                        </div>
                    </div>
                    <div className={styles.formHeaderBlock}>
                        <div className={styles.blockHeader}>
                            <p>{t("header.block_2.title")}</p>
                        </div>
                        <div>
                            <h5>{CONTACT_INFO.phone}</h5>
                            <p className={styles.blockText}>
                                {CONTACT_INFO.email}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
            <MapComponent />
        </Container>
    );
};

export default Contact;
