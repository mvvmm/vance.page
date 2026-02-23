import { BlogHeader } from "@/components/blog-header";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<BlogHeader />
			{children}
		</div>
	);
}
