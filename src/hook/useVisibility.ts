import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useVisibility = (): [MutableRefObject<HTMLDivElement>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return [elementRef, isVisible];
};
