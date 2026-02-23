// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractText(node: any): string {
	if (typeof node === "string") return node;
	if (typeof node === "number") return String(node);
	if (!node) return "";
	if (Array.isArray(node)) return node.map(extractText).join("");
	if (typeof node === "object" && node.props) {
		return extractText(node.props.children);
	}
	return "";
}
