import { motion } from "motion/react";
import { useRef } from "react";
import useFollowPointer from "#/hooks/useFollowPointer";

function BackgroundBlob() {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y } = useFollowPointer(ref);

	return (
		<motion.div
			ref={ref}
			style={{
				x: x,
				y: y,
			}}
			aria-hidden="true"
			className="absolute opacity-30 -top-1/3 -left-1/3 -z-1 blur-3xl mix-blend-multiply w-3xl bg-radial from-60% from-primary-dark to-primary aspect-square rounded-full pointer-events-none"
		/>
	);
}

export default BackgroundBlob;
