import Logo_1 from "assets/icons/logos/Logo 1.svg";
import Logo_2 from "assets/icons/logos/Logo 2.svg";
import Logo_3 from "assets/icons/logos/Logo 3.svg";
import Logo_4 from "assets/icons/logos/Logo 4.svg";
import Logo_5 from "assets/icons/logos/Logo 5.svg";

interface LogosProps {
    id: number;
    img: string;
    alt: string;
}
export const LOGOS: LogosProps[] = [
    {
        id: 1,
        img: Logo_1 as string,
        alt: "logo_1",
    },
    {
        id: 2,
        img: Logo_2 as string,
        alt: "logo_2",
    },
    {
        id: 3,
        img: Logo_3 as string,
        alt: "logo_3",
    },
    {
        id: 4,
        img: Logo_4 as string,
        alt: "logo_4",
    },
    {
        id: 5,
        img: Logo_5 as string,
        alt: "logo_5",
    },
];
