/* eslint-disable @next/next/no-img-element */
import { readFileSync } from "fs";
import { join } from "path";
import type { ImageResponseOptions } from "next/server";

export interface GeistFont {
	name: string;
	data: Buffer;
	style: "normal";
	weight: 400 | 500 | 600;
}

export interface OpengraphImageProps {
	pageName?: string;
	name?: string;
	photoBase64?: string;
	fontFamily: string;
	nameOnly?: boolean;
	smallTitle?: boolean;
}

export interface OpengraphImageData {
	element: React.ReactElement;
	options: ImageResponseOptions;
}

/**
 * Loads Geist fonts (Regular 400 and Medium 500) with error handling
 */
export async function loadGeistFonts(): Promise<GeistFont[]> {
	const geistFonts: GeistFont[] = [];
	try {
		const fontDir = join(process.cwd(), "node_modules", "geist", "dist", "fonts", "geist-sans");

		const fontsToLoad = [
			{ weight: 400 as const, file: "Geist-Regular.ttf" },
			{ weight: 500 as const, file: "Geist-Medium.ttf" },
			{ weight: 600 as const, file: "Geist-SemiBold.ttf" },
		];

		for (const font of fontsToLoad) {
			try {
				const fontData = readFileSync(join(fontDir, font.file));
				geistFonts.push({
					name: "Geist",
					data: fontData,
					style: "normal" as const,
					weight: font.weight,
				});
			} catch (fontError) {
				console.warn(`Failed to load font ${font.file}:`, fontError);
			}
		}
	} catch (fontDirError) {
		console.warn("Font directory not found, using system fonts:", fontDirError);
	}
	return geistFonts;
}

/**
 * Loads the photo image as a base64 data URL with error handling
 */
export async function loadPhotoBase64(): Promise<string | undefined> {
	try {
		const photoPath = join(process.cwd(), "public", "vance-morrison.png");
		const photoData = readFileSync(photoPath);
		return `data:image/png;base64,${photoData.toString("base64")}`;
	} catch (photoError) {
		console.warn("Failed to load photo, image will render without it:", photoError);
		return undefined;
	}
}

/**
 * Returns the font family string based on loaded fonts
 */
export function getFontFamily(geistFonts: GeistFont[]): string {
	return geistFonts.length > 0 ? "Geist" : "system-ui, -apple-system, sans-serif";
}

/**
 * Returns the ImageResponse options with fonts
 */
export function getImageResponseOptions(geistFonts: GeistFont[]): ImageResponseOptions {
	return {
		width: 1200,
		height: 630,
		...(geistFonts.length > 0 && { fonts: geistFonts }),
	};
}

/**
 * OpengraphImage component for generating Open Graph images
 */
function OpengraphImage({
	pageName,
	photoBase64,
	fontFamily,
	nameOnly = false,
	smallTitle = false,
}: OpengraphImageProps) {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "row",
				alignItems: "flex-end",
				justifyContent: "space-between",
				backgroundColor: "#000000",
				padding: "80px",
				position: "relative",
				fontFamily,
			}}
		>
			{/* Circular icon in top-left (inverted colors) */}
			<div
				style={{
					position: "absolute",
					top: "80px",
					left: "80px",
					width: "40px",
					height: "40px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#ffffff",
					borderRadius: "50%",
					fontFamily,
				}}
			>
				<div
					style={{
						fontSize: "24px",
						fontWeight: "600",
						color: "#000000",
					}}
				>
					V
				</div>
			</div>

			{/* Main content */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					flex: "1",
					marginRight: "60px",
				}}
			>
				{nameOnly ? (
					/* Name only in large font */
					<div
						style={{
							fontSize: "120px",
							fontWeight: "500",
							color: "#ffffff",
							lineHeight: "1",
							letterSpacing: "-0.02em",
						}}
					>
						Vance Morrison
					</div>
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							width: "100%",
						}}
					>
						{/* Page name */}
						<div
							style={{
								fontSize: smallTitle ? "56px" : "120px",
								fontWeight: "500",
								color: "#ffffff",
								lineHeight: smallTitle ? "1.15" : "1",
								marginBottom: "24px",
								letterSpacing: "-0.02em",
							}}
						>
							{pageName}
						</div>

						{/* Divider line */}
						<div
							style={{
								width: "100%",
								height: "1px",
								backgroundColor: "#404040",
								marginBottom: "24px",
							}}
						/>

						{/* Name in smaller font */}
						<div
							style={{
								fontSize: "32px",
								fontWeight: "400",
								color: "#ffffff",
								opacity: 0.8,
							}}
						>
							Vance Morrison
						</div>
					</div>
				)}
			</div>

			{/* Photo on the right */}
			{photoBase64 && (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						alignSelf: "center",
					}}
				>
					<img
						src={photoBase64}
						alt="Vance Morrison"
						width={350}
						height={350}
						style={{
							borderRadius: "50%",
							filter: "grayscale(100%) contrast(125%)",
						}}
					/>
				</div>
			)}
		</div>
	);
}

/**
 * Generates an opengraph image with all required data loaded
 * This is the main function to use in opengraph-image.tsx files
 */
export async function generateOpengraphImage({
	pageName,
	nameOnly = false,
	smallTitle = false,
}: {
	pageName: string;
	nameOnly?: boolean;
	smallTitle?: boolean;
}): Promise<OpengraphImageData> {
	const geistFonts = await loadGeistFonts();
	const photoBase64 = await loadPhotoBase64();
	const fontFamily = getFontFamily(geistFonts);

	return {
		element: (
			<OpengraphImage
				pageName={pageName}
				photoBase64={photoBase64}
				fontFamily={fontFamily}
				nameOnly={nameOnly}
				smallTitle={smallTitle}
			/>
		),
		options: getImageResponseOptions(geistFonts),
	};
}
