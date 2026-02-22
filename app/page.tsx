import type { Metadata } from "next";
import Love from "@/components/love";
import Photo from "@/components/photo";
import Link from "next/link";
import { companyLinks } from "@/lib/links";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
	title: "Vance Morrison",
	description:
		"Vance Morrison is a software engineer with a knack for the front-end, currently based in DFW, Texas.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${routes.home}`,
	},
};

export default function Home() {
	return (
		<section>
			<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">About</div>
			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<div className="flex justify-center sm:flex-none sm:float-right sm:ml-6 mb-4">
					<Photo />
				</div>
				<p>
					Hi, I&#39;m Vance — I <Love /> building software.
				</p>
				<p>
					I&apos;m a Sr Systems Engineer at{" "}
					<Link
						href={companyLinks.cloudflare}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Cloudflare
					</Link>
					, working on the Content Engineering team, helping improve Cloudflare&apos;s static
					content like the{" "}
					<Link
						href={companyLinks.cloudflareDocs}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						developer docs
					</Link>{" "}
					and{" "}
					<Link
						href={companyLinks.cloudflareBlog}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						blog
					</Link>
					.
				</p>
				<p>
					Before that, I was a founding engineer and front-end lead at{" "}
					<Link
						href={companyLinks.proservice}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						ProService Hawaii
					</Link>
					, the largest Professional Employer Organization in Hawaii, where I established the
					foundational architecture, development processes, and best practices for the engineering
					organization. I led the effort to build a performant, accessible design system and
					designed many of the application&apos;s core features, helping build the best PEO software
					in Hawaii.
				</p>
				<p>
					I got my start building software at{" "}
					<Link
						href={companyLinks.forge}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						The Forge
					</Link>
					, the maker space on campus at{" "}
					<Link
						href={companyLinks.rpi}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						RPI
					</Link>
					, where I built a{" "}
					<Link
						href={companyLinks.forgeStatus}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						real-time status viewer
					</Link>{" "}
					for all the machinery in the forge, where students can remotely see which machines are in
					use and when they&apos;ll be available. Students still use it today.
				</p>
				<p>
					After that, I worked at the Lighting Research Center at RPI as the lead engineer. We got
					bought out by Mount Sinai, and I continued building software that helped some of the
					largest lighting companies in the world better produce healthy lighting. I built the{" "}
					<Link
						href={companyLinks.csCalculator}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						CS Calculator (2.0)
					</Link>
					, an online lighting calculator, along with its{" "}
					<Link
						href={companyLinks.csCalculatorDocs}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						documentation site
					</Link>
					, amongst other internal tools. It was a unique intersection of code and science that
					allowed me to put my physics major and software engineering major together in practice
				</p>
				<p>
					From there, I moved to{" "}
					<Link
						href={companyLinks.statusphere}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Statusphere
					</Link>
					, where I worked on scaling a platform connecting hundreds of brands with tens of
					thousands of creators. I led an engineering effort to rebrand the application, creating
					something modern, beautiful, accessible, and clean. I got to learn what a small passionate
					team could accomplish in an efficient startup environment.
				</p>
				<p>
					At{" "}
					<Link
						href={companyLinks.cision}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Cision
					</Link>
					, I served as Frontend Lead on Connectively/HARO, a web application connecting journalists
					with subject matter experts. We built it from the ground up in one quarter, and it quickly
					gained 25,000+ users in the following months. The product was later acquired by{" "}
					<Link
						href={companyLinks.featured}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Featured.com
					</Link>
					. I got to lead front-end teams across multiple efforts and also led the
					organization&apos;s &quot;Frontend Engineering Club,&quot; mentoring rising engineers. My
					experience at Cision taught me how to navigate the complexities of large organizations and
					cut through bureaucracy to make real impact.
				</p>
				<p>
					These days, I&#39;m focused on building things that feel good to use and stand the test of
					time. I care about craft, clarity, and the small details that make software feel
					effortless.
				</p>
			</div>
		</section>
	);
}
