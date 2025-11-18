import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Link
        href="/posts"
        prefetch={false}
        className="text-md font-bold px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Posts
      </Link>
    </main>
  );
}
