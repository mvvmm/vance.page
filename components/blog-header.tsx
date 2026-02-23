"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { routes } from "@/lib/routes";

export function BlogHeader() {
	const pathname = usePathname();
	const isRootPage = pathname === routes.blog;

	const content = (
		<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6 flex items-center gap-2">
			{!isRootPage && <ArrowLeft className="w-4 h-4" />}
			<span>Blog</span>
		</div>
	);

	if (isRootPage) {
		return content;
	}

	return (
		<Link href={routes.blog} className="hover:opacity-80 transition-opacity">
			{content}
		</Link>
	);
}
