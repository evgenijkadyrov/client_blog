// A list of all locales that are supported
import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en";
export const locales = ["en", "be"] as const;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/pathnames": {
        en: "/pathnames",
        be: "/pathnames",
    },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;
