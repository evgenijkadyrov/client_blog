import { locales } from "config";
import { BLOG_SOCIAL_LINKS } from "constants/socials";
import { Link } from "navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { LocaleSwitcherSelect } from "components/LanguageSwittcher";
import { NavPanel } from "components/NavPanel";
import { SubscribeForm } from "components/SubscribeForm";

import styles from "./footer.module.scss";

export const Footer = () => {
    const t = useTranslations("Footer");
    const locale = useLocale();
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
                        Finstreet 118 2561 Fintown <br />
                        Hello@finsweet.com 020 7993 2905
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
