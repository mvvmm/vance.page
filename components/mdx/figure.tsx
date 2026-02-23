import { type ComponentPropsWithoutRef, type ReactNode, Children, isValidElement } from "react";
import CopyButton from "@/components/copy-button";
import { extractText } from "@/components/mdx/utils";

function findPre(children: ReactNode): ReactNode | null {
	for (const child of Children.toArray(children)) {
		if (isValidElement(child) && child.type === "pre") return child;
		if (isValidElement(child) && child.props && (child.props as { children?: ReactNode }).children) {
			const found = findPre((child.props as { children?: ReactNode }).children);
			if (found) return found;
		}
	}
	return null;
}

export function Figure(props: ComponentPropsWithoutRef<"figure">) {
	const { children, ...rest } = props;
	const hasTitle = Children.toArray(children).some(
		(child) => isValidElement(child) && child.type === "figcaption"
	);

	if (!hasTitle) {
		return <figure {...rest}>{children}</figure>;
	}

	const pre = findPre(children);
	const text = pre ? extractText(pre) : "";

	return (
		<figure {...rest} className="group/code relative" data-has-title="">
			<div className="absolute right-2 top-2 z-10 opacity-0 group-hover/code:opacity-100">
				<CopyButton copyText={text} />
			</div>
			{children}
		</figure>
	);
}
