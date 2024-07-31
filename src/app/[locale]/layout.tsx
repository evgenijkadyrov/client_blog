import { ReactNode } from "react";
import { Sen } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "components/Footer";
import Header from "components/Header";

const sen = Sen({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
});
const LocaleLayout = async ({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: { locale: string };
}) => {
    const messages = await getMessages();
    return (
        <html lang={locale} className={sen.className}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main> {children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;
