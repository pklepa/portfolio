import { motion, useTransform } from "motion/react";
import useMeasure from "#/hooks/useMeasure";
import usePointerPosition from "#/hooks/usePointerPosition";
import useWindowSize from "#/hooks/useWindowSize";

function AnimatedGooglyEye() {
	const [eyeRef, { width: eyeWidth, height: eyeHeight }] =
		useMeasure<HTMLDivElement>();
	const [pupilRef, { width: pupilWidth, height: pupilHeight }] =
		useMeasure<HTMLDivElement>();

	const { width: screenWidth, height: screenHeight } = useWindowSize();
	const { x: mouseX, y: mouseY } = usePointerPosition();

	const x = useTransform(
		mouseX,
		[0, screenWidth],
		[-(eyeWidth - pupilWidth) / 2, (eyeWidth - pupilWidth) / 2],
	);
	const y = useTransform(
		mouseY,
		[0, screenHeight],
		[-(eyeHeight - pupilHeight) / 2, (eyeHeight - pupilHeight) / 2],
	);

	return (
		<motion.div
			ref={eyeRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			className="relative bg-gray-50 w-16 h-16 rounded-full border-4 border-neutral-900"
		>
			<motion.div
				ref={pupilRef}
				style={{ x, y }}
				className="absolute w-7 h-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900"
			/>
		</motion.div>
	);
}

export default AnimatedGooglyEye;
