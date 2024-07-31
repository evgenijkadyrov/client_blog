import Icon from "assets/icons/Profile picture.svg";

interface Testimonial {
    id: number;
    text: string;
    author: string;
    from: string;
    img: string;
}

export const TESTIMONIALS_CARDS: Testimonial[] = [
    {
        id: 1,
        text: "I stumbled upon this blog and it has become my go-to place for insightful articles and inspiration. The content is top-notch!",
        author: "Sophie Bennett",
        from: "San Francisco, CA",
        img: Icon as string,
    },
    {
        id: 2,
        text: "As a regular reader of this blog, I can confidently say that it never fails to deliver engaging and thought-provoking content. Truly a gem in the blogosphere!",
        author: "Michael Rodriguez",
        from: "New York, NY",
        img: Icon as string,
    },
    {
        id: 3,
        text: "This blog has been a game-changer for me. The articles are not only informative but also beautifully written. Highly recommended!",
        author: "Emily Chen",
        from: "Los Angeles, CA",
        img: Icon as string,
    },
];
