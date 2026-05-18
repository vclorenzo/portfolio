import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], typingMs = 80, pauseMs = 2200) {
	const [index, setIndex] = useState(0);
	const [text, setText] = useState('');
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const word = words[index % words.length];
		let timeout: ReturnType<typeof setTimeout>;

		if (!deleting && text === word) {
			timeout = setTimeout(() => setDeleting(true), pauseMs);
		} else if (deleting && text === '') {
			setDeleting(false);
			setIndex((i) => (i + 1) % words.length);
		} else {
			const next = deleting
				? word.slice(0, text.length - 1)
				: word.slice(0, text.length + 1);
			timeout = setTimeout(() => setText(next), deleting ? typingMs / 2 : typingMs);
		}

		return () => clearTimeout(timeout);
	}, [text, deleting, index, words, typingMs, pauseMs]);

	return text;
}
