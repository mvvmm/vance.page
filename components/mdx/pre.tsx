import { type ComponentPropsWithoutRef } from "react";
import CopyButton from "@/components/copy-button";
import { extractText } from "@/components/mdx/utils";

export function Pre(props: ComponentPropsWithoutRef<"pre">) {
	const text = extractText(props.children);

	return (
		<div className="group/code relative code-block-wrapper">
			<div className="copy-button-inner absolute right-2 top-2 z-10 opacity-0 group-hover/code:opacity-100">
				<CopyButton copyText={text} />
			</div>
			<pre {...props} />
		</div>
	);
}
