import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { GitHub } from "@/components/logos/github";
import { projectLinks } from "@/lib/links";
import { projectSlugs, getProjectRoute } from "@/lib/routes";

const title = "IMAX Near Me";
const slug = projectSlugs.imaxNearMe;
const githubUrl = projectLinks.imaxNearMe.github;
const webUrl = projectLinks.imaxNearMe.web;

export const metadata: Metadata = {
	title,
	description: `${title}`,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${getProjectRoute(slug)}`,
	},
};

export default function ProjectPage() {
	return (
		<section>
			<article className="prose prose-neutral dark:prose-invert max-w-none">
				<h1 className="text-4xl font-medium tracking-tight mb-8">{title}</h1>

				{/* Icon Buttons */}
				<div className="flex gap-4 mb-8">
					<Link
						href={webUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="Visit IMAX Near Me"
					>
						<Globe className="w-5 h-5" />
					</Link>
					<Link
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="View IMAX Near Me on GitHub"
					>
						<GitHub className="w-5 h-5" />
					</Link>
				</div>

				{/* Cover Image */}
				<div className="mb-12">
					<Image
						src="/projects/imax-near-me/cover.png"
						alt="IMAX Near Me - interactive map of IMAX theatres"
						width={1200}
						height={630}
						className="w-full h-auto rounded-lg"
						preload
					/>
				</div>

				{/* Content */}
				<div className="mb-12">
					<p className="mb-4">
						I built{" "}
						<Link
							href={webUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							IMAX Near Me
						</Link>{" "}
						because I wanted to make sure I was watching movies in the best format possible.
						The problem is that figuring out which IMAX theatres actually have premium
						projectors is notoriously difficult — the information is scattered across fan wikis,
						forum posts, and word of mouth, and IMAX&apos;s own marketing doesn&apos;t distinguish
						between their screen tiers.
					</p>

					<div className="my-12">
						<Image
							src="/projects/imax-near-me/preview.png"
							alt="IMAX Near Me - map with venue markers"
							width={1200}
							height={630}
							className="w-full h-auto rounded-lg"
							preload
						/>
					</div>

					<p className="mb-4">
						Not all IMAX screens are created equal. Base-level IMAX theatres use a single 2K
						xenon or laser projector that offers little advantage over a standard cinema
						screen. The real experiences — 15/70mm film, GT Laser, dual laser, and dome — are
						a completely different tier but can be hard to track down. I wanted a simple way to
						see what&apos;s actually near me, so I scraped the data and put it on a map.
					</p>

					<p className="mb-4">
						Venue data is sourced from the{" "}
						<Link
							href="https://imax.fandom.com/wiki/List_of_IMAX_venues"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							IMAX Fandom Wiki
						</Link>{" "}
						and enriched with location data from the Google Places API. Each venue is
						color-coded by projector type so you can identify what&apos;s nearby at a glance.
					</p>

					<p className="mb-4">
						Built with React, Leaflet, and Vite, and deployed on Cloudflare Workers. Check it
						out at{" "}
						<Link
							href={webUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							imaxnearme.com
						</Link>{" "}
						or view the source on{" "}
						<Link
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							GitHub
						</Link>
						.
					</p>
				</div>
			</article>
		</section>
	);
}
