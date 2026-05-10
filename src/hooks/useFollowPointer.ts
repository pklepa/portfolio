import { frame, useSpring } from "motion/react";
import { type RefObject, useEffect } from "react";

const spring = { damping: 10, stiffness: 50, restDelta: 0.011 };

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
	const x = useSpring(100, spring);
	const y = useSpring(100, spring);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Quick test with motion.dev example
	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			const element = ref.current!;

			frame.read(() => {
				x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
				y.set(clientY - element.offsetTop - element.offsetHeight / 2);
			});
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, []);

	return { x, y };
}

export default useFollowPointer;
