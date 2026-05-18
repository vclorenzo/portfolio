declare module '*.pdf' {
	const content: string | { src: string };
	export default content;
}

declare module '*.mp4' {
	const content: string | { src: string };
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}
