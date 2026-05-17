import { useEffect, useRef, useState } from "react";

function useMeasure<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const update = () => {
			const r = element.getBoundingClientRect();
			setRect({ x: r.x, y: r.y, width: r.width, height: r.height });
		};

		update();

		const observer = new ResizeObserver(update);
		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return [ref, rect] as const;
}

export default useMeasure;
