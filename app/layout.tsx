import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AsciiArt } from "@/components/ascii-art";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
	title: {
		template: "%s | Vance Morrison",
		default: "Vance Morrison",
	},
	description:
		"Sr Staff Software Engineer | Next.js, React, TypeScript | UI/UX, Performance, Modern Web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<AsciiArt />
				<ThemeProvider attribute="class" disableTransitionOnChange>
					<div className="flex flex-col min-h-screen px-6 sm:px-8 py-8 sm:pt-12 md:pt-24  max-w-2xl mx-auto">
						<header className="mb-16">
							<div className="flex justify-between items-center mb-16">
								<h1 className="text-5xl font-medium tracking-tight">Vance Morrison</h1>
								<ThemeToggle />
							</div>
							<Navbar />
						</header>

						<div className="flex-1">{children}</div>

						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
