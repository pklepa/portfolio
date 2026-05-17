import { frame, useMotionValue } from "motion/react";
import { useEffect } from "react";

function usePointerPosition() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Quick test with motion.dev example
	useEffect(() => {
		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			frame.read(() => {
				x.set(clientX);
				y.set(clientY);
			});
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, []);

	return { x, y };
}

export default usePointerPosition;
