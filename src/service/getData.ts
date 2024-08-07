export default async function getData(): Promise<unknown> {
    const res = await fetch("http://localhost:3002/posts", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
