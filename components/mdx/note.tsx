import { type ReactNode } from "react";
import { Info } from "lucide-react";

export function Note({ children }: { children: ReactNode }) {
	return (
		<div className="not-prose flex gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm my-5">
			<Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
			<div>{children}</div>
		</div>
	);
}
