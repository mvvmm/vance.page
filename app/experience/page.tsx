import type { Metadata } from "next";
import Image from "next/image";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
	title: "Experience",
	description:
		"Vance Morrison's professional experience including roles at ProService Hawaii, Cision, Statusphere, Mount Sinai, Lighting Research Center, and The Forge.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${routes.experience}`,
	},
};

const experiences = [
	{
		company: "Cloudflare",
		position: "Sr Systems Engineer",
		dateRange: "Feb 2026 - Present",
		logo: "/experience-logos/cloudflare.webp",
		logoAlt: "Cloudflare logo",
		invertLight: false,
		invertDark: true,
	},
	{
		company: "ProService",
		position: "Sr Staff Software Engineer",
		dateRange: "Mar 2024 - Jun 2025",
		logo: "/experience-logos/proservice.webp",
		logoAlt: "ProService logo",
		invertLight: false,
		invertDark: true,
	},
	{
		company: "Cision",
		position: "Staff Software Engineer",
		dateRange: "Aug 2022 - Feb 2024",
		logo: "/experience-logos/cision.webp",
		logoAlt: "Cision logo",
		invertLight: false,
		invertDark: true,
	},
	{
		company: "Statusphere",
		position: "Full Stack Software Engineer",
		dateRange: "Dec 2021 - Jul 2022",
		logo: "/experience-logos/statusphere.webp",
		logoAlt: "Statusphere logo",
		invertLight: false,
		invertDark: true,
	},
	{
		company: "Mount Sinai",
		position: "Software Engineer",
		dateRange: "Jan 2021 - Dec 2021",
		logo: "/experience-logos/mount-sinai.webp",
		logoAlt: "Mount Sinai logo",
		invertLight: false,
		invertDark: true,
	},
	{
		company: "Lighting Research Center",
		position: "Software Engineer",
		dateRange: "Jun 2019 - Aug 2020",
		logo: "/experience-logos/lrc.webp",
		logoAlt: "Lightbulb emoji",
		invertLight: false,
		invertDark: false,
	},
];

export default function Page() {
	return (
		<section>
			<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">Experience</div>
			<div className="flex flex-col gap-8">
				{experiences.map((experience) => (
					<div key={experience.company} className="flex gap-4 items-start">
						<Image
							className={`w-[48px] h-[48px] grayscale p-1.5 ${experience.invertLight && "invert"} ${experience.invertDark && "dark:invert"}`}
							src={experience.logo}
							alt={experience.logoAlt}
							width={500}
							height={500}
							preload
						/>
						<div className="w-full">
							<div className="flex justify-between">
								<h3 className="font-medium text-gray-900 dark:text-gray-100">
									{experience.company}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-500">{experience.dateRange}</p>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-400">{experience.position}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
