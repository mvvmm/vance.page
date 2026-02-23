import type { MetadataRoute } from "next";
import { allRoutes, routes, getBlogRoute } from "@/lib/routes";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = allRoutes.map((route) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: route === routes.home ? 1 : 0.8,
	}));

	const blogRoutes = getAllPosts().map((post) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${getBlogRoute(post.slug)}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...blogRoutes];
}
