import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { getBlogRoute } from "@/lib/routes";
import { mdxComponents } from "@/components/mdx-components";
import cursorDark from "@/lib/themes/cursor-dark.json";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	return params.then(({ slug }) => {
		const post = getPostBySlug(slug);
		return {
			title: post.title,
			description: post.description,
			alternates: {
				canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${getBlogRoute(slug)}`,
			},
		};
	});
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	return (
		<article>
			<header className="mb-8">
				<h1 className="text-2xl font-bold mb-2">{post.title}</h1>
				<time className="text-sm text-muted-foreground">
					{new Date(post.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</time>
			</header>
			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<MDXRemote
					source={post.content}
					components={mdxComponents}
					options={{
						mdxOptions: {
							rehypePlugins: [
								rehypeSlug,
								[
									rehypeAutolinkHeadings,
									{
										behavior: "wrap",
										properties: {
											className: ["heading-link"],
										},
									},
								],
								[
									rehypePrettyCode,
									{
										theme: {
											dark: cursorDark,
											light: "min-light",
										},
									},
								],
							],
						},
					}}
				/>
			</div>
		</article>
	);
}
