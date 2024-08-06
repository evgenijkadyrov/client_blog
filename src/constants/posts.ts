import Image_3 from "assets/images/posts/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.jpg";
import Image_1 from "assets/images/posts/photo-of-people-doing-handshakes-3183197.jpg";
import Image_2 from "assets/images/posts/photo-of-people-walking-on-hallway-3182811.jpg";
import Image_6 from "assets/images/posts/photo-of-woman-looking-at-man-3183173.jpg";
import Image_5 from "assets/images/posts/two-women-in-front-of-dry-erase-board-1181533.jpg";
import Image_4 from "assets/images/posts/white-concrete-building-1838640.jpg";
import { StaticImageData } from "next/image";

interface ContentProps {
    id: number;
    title: string;
    text: string;
}
export interface PostsProps {
    id: number;
    title: string;
    author: string;
    createdAt: string;
    description: string;
    category: string;
    img: StaticImageData;
    content: ContentProps[];
    tags: string[];
}
export const POSTS_LIST: PostsProps[] = [
    {
        id: 1,
        title: "The Art of Pairing Fonts: A Comprehensive Guide",
        author: "Natalie Chen",
        createdAt: "May 23, 2024",
        description:
            "Choosing the right font combinations is crucial for creating visually appealing designs. Understanding how different fonts work together can elevate your project and make it stand out. In this guide, we will explore the step-by-step process of selecting great font pairs that harmonize and enhance your content.",
        category: "startUp",
        img: Image_1,
        content: [
            {
                id: 1,
                title: "Understanding Font Pairing",
                text: "When it comes to design, fonts play a significant role in conveying the tone and message of your content. The right font pairing can evoke emotions, establish hierarchy, and improve readability. By understanding the principles of typography and how different fonts interact, you can create visually stunning designs that resonate with your audience.",
            },
            {
                id: 2,
                title: "Exploring Font Combinations",
                text: "Experimenting with various font combinations is key to finding the perfect match for your project. Consider factors such as contrast, similarity, and mood when pairing fonts. By testing different combinations and observing how they work together, you can discover unique pairings that enhance the overall aesthetic of your design.",
            },
        ],
        tags: ["Business", "Life"],
    },
    {
        id: 2,
        title: "The Art of Pairing Fonts: A Comprehensive Guide",
        author: "David Kim",
        createdAt: "Jun 23, 2024",
        description:
            "Choosing the right font combinations is crucial for creating visually appealing designs. Explore the process of selecting great font pairs.",
        category: "StartUp",
        img: Image_2,
        content: [
            {
                id: 1,
                title: "Understanding Font Pairing",
                text: "When it comes to design, fonts play a significant role in conveying the tone and message of your content. Create visually stunning designs that resonate with your audience.",
            },
            {
                id: 2,
                title: "Exploring Font Combinations",
                text: "Experiment with various font combinations to find the perfect match for your project. Discover unique pairings that enhance your design.",
            },
        ],
        tags: ["Business", "Marketing"],
    },
    {
        id: 3,
        title: "The Impact of Global Trends on Local Economies",
        author: "Mike Baker",
        createdAt: "Sep 23, 2023",
        description:
            "Global trends shape industries and influence consumer behavior, impacting local economies. Understand these trends for business adaptation and growth.",
        category: "Economy",
        img: Image_3,
        content: [
            {
                id: 1,
                title: "Adapting to Changing Economic Landscapes",
                text: "Local economies must be agile in responding to shifts in demand, technology, and regulations to succeed in competitive markets.",
            },
            {
                id: 2,
                title: "Embracing Innovation in Economic Development",
                text: "Innovation drives economic growth by creating new opportunities and markets. Foster a culture of innovation for sustainable development.",
            },
        ],
        tags: ["Economy", "Screen"],
    },
    {
        id: 4,
        title: "The Future of Artificial Intelligence in Business",
        author: "Alexandr Woods",
        createdAt: "May 20, 2024",
        description:
            "AI revolutionizes business operations by offering automation, data analysis, and personalized customer experiences. Stay competitive in the digital age with AI.",
        category: "Technology",
        img: Image_4,
        content: [
            {
                id: 1,
                title: "Harnessing AI for Business Success",
                text: "AI streamlines operations, enhances decision-making, and delivers innovative solutions. Gain a competitive edge with AI integration.",
            },
            {
                id: 2,
                title: "Ethical Considerations in AI Adoption",
                text: "Prioritize ethical AI practices for data privacy, bias, and transparency. Build trust with customers and regulators through ethical AI adoption.",
            },
        ],
        tags: ["Technology", "Experience"],
    },
    {
        id: 5,
        title: "Mastering Marketing Strategies for Startups",
        author: "Daniel Rivera",
        createdAt: "Mar 12, 2024",
        description:
            "Effective marketing strategies are essential for startups to gain visibility and attract customers. Learn how to create impactful marketing campaigns and reach your target audience.",
        category: "StartUp",
        img: Image_5,
        content: [
            {
                id: 1,
                title: "Building a Strong Brand Identity",
                text: "Establishing a strong brand identity is crucial for startups to differentiate themselves in the market. Define your brand values and messaging to resonate with your target customers.",
            },
            {
                id: 2,
                title: "Utilizing Digital Marketing Channels",
                text: "Digital marketing offers startups cost-effective ways to reach a wider audience. Explore strategies such as social media marketing, content marketing, and SEO to boost your online presence.",
            },
        ],
        tags: ["Technology", "Screen", "Marketing"],
    },
    {
        id: 6,
        title: "The Global Impact of Sustainable Business Practices",
        author: "Isabella Cruz",
        createdAt: "May 27, 2022",
        description:
            "Sustainable business practices are becoming increasingly important in a world facing environmental challenges. Explore how businesses can adopt sustainable strategies to drive positive change.",
        category: "Economy",
        img: Image_6,
        content: [
            {
                id: 1,
                title: "Implementing Green Initiatives",
                text: "Businesses can reduce their environmental footprint by implementing green initiatives such as energy efficiency, waste reduction, and sustainable sourcing practices.",
            },
            {
                id: 2,
                title: "Embracing Corporate Social Responsibility",
                text: "Corporate social responsibility involves businesses taking responsibility for their impact on society and the environment. Embrace CSR practices to build a positive brand image.",
            },
        ],
        tags: ["Economy", "Business"],
    },
    {
        id: 7,
        title: "Innovations in Artificial Intelligence Technology",
        author: "Ryan Mitchell",
        createdAt: "Feb 23, 2024",
        description:
            "Artificial intelligence technology continues to advance, transforming industries and revolutionizing processes. Explore the latest AI innovations and their impact on various sectors.",
        category: "Technology",
        img: Image_3,
        content: [
            {
                id: 1,
                title: "AI-Powered Automation",
                text: "AI-powered automation streamlines repetitive tasks and improves efficiency in various industries. Adopt AI automation to enhance productivity and reduce operational costs.",
            },
            {
                id: 2,
                title: "AI in Healthcare",
                text: "AI is revolutionizing healthcare with applications in diagnostics, personalized medicine, and patient care. Explore how AI technologies are transforming the healthcare industry.",
            },
        ],
        tags: ["Technology", "Life"],
    },
    {
        id: 8,
        title: "The Power of Data Analytics in Business Decision-Making",
        author: "Olivia Bennett",
        createdAt: "Jul 3, 2024",
        description:
            "Data analytics provides valuable insights for informed decision-making in business operations. Discover how leveraging data can drive strategic growth and competitive advantage.",
        category: "Technology",
        img: Image_4,
        content: [
            {
                id: 1,
                title: "Utilizing Big Data for Business Insights",
                text: "Big data analytics enables businesses to process and analyze large volumes of data to uncover trends, patterns, and valuable insights. Harness the power of big data for informed decision-making.",
            },
            {
                id: 2,
                title: "Implementing Data-Driven Strategies",
                text: "Data-driven strategies involve using data analysis to guide decision-making processes across various business functions. Implement data-driven approaches to optimize performance and achieve strategic goals.",
            },
        ],
        tags: ["Technology", "Marketing", "Screen"],
    },
    {
        id: 9,
        title: "Navigating Cybersecurity Challenges in the Digital Age",
        author: "Ryan Mitchell",
        createdAt: "May 23, 2024",
        description:
            "Cybersecurity threats pose significant risks to businesses in the digital era. Learn how to implement robust cybersecurity measures to protect sensitive data and safeguard against cyber attacks.",
        category: "Technology",
        img: Image_1,
        content: [
            {
                id: 1,
                title: "Understanding Cyber Threat Landscape",
                text: "The evolving cyber threat landscape presents diverse risks to businesses, including data breaches, ransomware attacks, and phishing scams. Stay informed about cybersecurity threats to proactively defend against potential risks.",
            },
            {
                id: 2,
                title: "Securing Networks and Systems",
                text: "Securing networks and systems is essential to prevent unauthorized access and protect sensitive information. Implement security protocols, encryption measures, and regular audits to maintain a robust cybersecurity posture.",
            },
        ],
        tags: ["StartUp", "Economy", "Experience"],
    },
    {
        id: 10,
        title: "The Role of Emotional Intelligence in Leadership",
        author: "Mike Baker",
        createdAt: "May 23, 2024",
        description:
            "Emotional intelligence is a key trait for effective leadership, enabling leaders to understand and manage emotions in themselves and others. Explore how emotional intelligence enhances leadership capabilities.",
        category: "Business",
        img: Image_2,
        content: [
            {
                id: 1,
                title: "Developing Emotional Intelligence Skills",
                text: "Developing emotional intelligence skills involves self-awareness, self-regulation, empathy, and social skills. Cultivate these traits to build strong relationships and lead effectively.",
            },
            {
                id: 2,
                title: "Embracing Empathy in Leadership",
                text: "Empathy is a fundamental aspect of emotional intelligence that fosters understanding and connection with team members. Embrace empathy to build a positive work culture and enhance team collaboration.",
            },
        ],
        tags: ["Business", "Life", "Screen"],
    },
];
