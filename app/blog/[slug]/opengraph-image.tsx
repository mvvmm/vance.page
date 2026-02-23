import { ImageResponse } from "next/og";
import { generateOpengraphImage } from "@/components/opengraph-image";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Vance Morrison - Blog Post";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	try {
		const { element, options } = await generateOpengraphImage({
			pageName: post.title,
			nameOnly: false,
			smallTitle: true,
		});
		return new ImageResponse(element, options);
	} catch (e: unknown) {
		console.log(`${e}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
