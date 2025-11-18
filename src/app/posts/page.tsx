import type { Metadata } from "next";
import { getPosts } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
  await getPosts();

  return {
    title: "Posts",
    description: "Posts",
  };
}

export default async function Home() {
  const data = await getPosts();

  return (
    <div>
      {data.map((post: any, index: number) => (
        <div key={post.id}>
          {index + 1}. {post.title}
        </div>
      ))}
    </div>
  );
}
