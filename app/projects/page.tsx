import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { routes, getProjectRoute, projectSlugs } from "@/lib/routes";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Selected projects including Masahiro Lamarsh, Omnibin, and Generative Art Playground.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${routes.projects}`,
	},
};

const projects = [
	{ slug: projectSlugs.omnibin, title: "omnib.in", coverImage: "/projects/omnibin/cover.png" },
	{
		slug: projectSlugs.generativeArtPlayground,
		title: "Generative Art Playground",
		coverImage: "/projects/playground/cover.png",
	},
	{
		slug: projectSlugs.masahiroLamarsh,
		title: "Masahiro Lamarsh",
		coverImage: "/projects/masa/cover.png",
	},
];

export default function Page() {
	return (
		<section>
			<div className="flex flex-col gap-12">
				{projects.map((project) => {
					return (
						<Link key={project.slug} href={getProjectRoute(project.slug)} className="group block">
							<div className="mb-4">
								<Image
									src={project.coverImage}
									alt={project.title}
									width={1000}
									height={600}
									className="w-full h-auto rounded-lg transition-opacity group-hover:opacity-80"
								/>
							</div>
							<h2 className="text-xl font-medium text-foreground group-hover:underline">
								{project.title}
							</h2>
						</Link>
					);
				})}
			</div>
			<p className="mt-12 text-sm text-muted-foreground">
				* These are projects I&apos;ve worked on in my free time. For my professional work, see the{" "}
				<Link href={routes.experience} className="text-foreground underline hover:no-underline">
					experience
				</Link>{" "}
				and{" "}
				<Link href={routes.about} className="text-foreground underline hover:no-underline">
					about
				</Link>{" "}
				pages.
			</p>
		</section>
	);
}
