import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { routes, getBlogRoute } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Blog",
	description: "Writing about web development, infrastructure, and things I've learned.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog}`,
	},
};

export default function Page() {
	const posts = getAllPosts();

	return (
		<section>
			<div className="flex flex-col gap-4">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={getBlogRoute(post.slug)}
						className="group flex items-baseline justify-between gap-4"
					>
						<h2 className="text-foreground group-hover:underline">{post.title}</h2>
						<span className="text-sm text-muted-foreground shrink-0">
							{new Date(post.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "short",
								day: "numeric",
							})}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
}
