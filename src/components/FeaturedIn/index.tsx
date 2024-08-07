import { LOGOS } from "constants/logos";
import Image from "next/image";

import styles from "./featuredIn.module.scss";

const FeaturedIn = () => (
    <div className={styles.logos}>
        <div className={styles.logosTitle}>
            <p>We are</p>
            <h4>Featured in</h4>
        </div>
        {LOGOS.map(({ id, img, alt }) => (
            <Image key={id} src={img} alt={alt} className={styles.logosItem} loading="lazy" />
        ))}
    </div>
);

export default FeaturedIn;
