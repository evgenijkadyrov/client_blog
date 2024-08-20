import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "be"],

    defaultLocale: "en",
});

export const config = {
    matcher: ["/", "/(be|en)/:path*"],
};
