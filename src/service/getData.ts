export const getPosts = async (): Promise<unknown> => {
    const res = await fetch("http://localhost:3002/posts", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export const getPost = async (id: string): Promise<unknown> => {
    const res = await fetch(`http://localhost:3002/posts/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
