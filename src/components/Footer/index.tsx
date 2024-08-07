import { locales } from "config";
import { CONTACT_INFO } from "constants/contactInfo";
import { BLOG_SOCIAL_LINKS } from "constants/socials";
import { Link } from "navigation";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { LocaleSwitcherSelect } from "components/LanguageSwittcher";
import { NavPanel } from "components/NavPanel";
import { SubscribeForm } from "components/SubscribeForm";

import styles from "./footer.module.scss";

export const Footer = async () => {
    const t = await getTranslations("Footer");
    const locale = await getLocale();
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <NavPanel full />
                <div className={styles.footerContent}>
                    <h2 className={styles.title}>{t("title")}</h2>
                    <SubscribeForm />
                    <div className={styles.background} />
                </div>
                <div className={styles.row}>
                    <p className={styles.text}>
                        {CONTACT_INFO.address} <br />
                        {CONTACT_INFO.email} {CONTACT_INFO.phone}
                    </p>
                    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
                        {locales.map((cur) => (
                            <option key={cur} value={cur}>
                                {t("locale", { locale: cur })}
                            </option>
                        ))}
                    </LocaleSwitcherSelect>
                    <div className={styles.socials}>
                        {BLOG_SOCIAL_LINKS.map(({ id, href, icon }) => (
                            <Link key={id} href={href}>
                                <Image src={icon.lightIcon} alt={icon.alt} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
