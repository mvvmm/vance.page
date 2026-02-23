"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems, routes } from "@/lib/routes";

export default function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) =>
		pathname === path || (path !== routes.home && pathname.startsWith(path));

	const linkClass = (path: string) =>
		cn(
			"font-bold transition-colors duration-300 text-sm",
			isActive(path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
		);

	return (
		<nav aria-label="Main navigation">
			<ul className="flex gap-4 list-none">
				{navItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={linkClass(item.href)}
							aria-current={isActive(item.href) ? "page" : undefined}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
