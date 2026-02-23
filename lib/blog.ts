import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	description: string;
	content: string;
}

export function getAllPosts(): BlogPost[] {
	const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

	return files
		.map((filename) => {
			const slug = filename.replace(/\.mdx$/, "");
			const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
			const { data, content } = matter(raw);

			return {
				slug,
				title: data.title,
				date: data.date,
				description: data.description,
				content,
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost {
	const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
	const { data, content } = matter(raw);

	return {
		slug,
		title: data.title,
		date: data.date,
		description: data.description,
		content,
	};
}

export function getAllSlugs(): string[] {
	return fs
		.readdirSync(BLOG_DIR)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(/\.mdx$/, ""));
}
