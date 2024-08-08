import { ReactNode } from "react";
import { Sen } from "next/font/google";

const sen = Sen({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
});
const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang="en" className={sen.className}>
        <body>{children}</body>
    </html>
);

export default RootLayout;
