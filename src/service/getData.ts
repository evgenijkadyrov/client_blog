const baseURL = "http://localhost:3002";
export const getPosts = async (): Promise<unknown> => {
    const res = await fetch(`${baseURL}/posts`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export const getPost = async (id: string): Promise<unknown> => {
    const res = await fetch(`${baseURL}/posts/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
