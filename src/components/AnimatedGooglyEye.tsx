import { motion, useSpring, useTransform } from "motion/react";
import { SPRING_BOUNCY } from "#/constants/animations";
import useMeasure from "#/hooks/useMeasure";
import usePointerPosition from "#/hooks/usePointerPosition";

function AnimatedGooglyEye() {
	const [eyeRef, eyeRect] = useMeasure<HTMLDivElement>();
	const [pupilRef, pupilRect] = useMeasure<HTMLDivElement>();

	const mousePosition = usePointerPosition();

	const calculateAngle = () => {
		const cx = eyeRect.x + eyeRect.width / 2;
		const cy = eyeRect.y + eyeRect.height / 2;
		const dx = mousePosition.x.get() - cx;
		const dy = mousePosition.y.get() - cy;
		return Math.atan2(dy, dx);
	};

	const targetX = useTransform(() => {
		const angle = calculateAngle();
		const dMax = (eyeRect.width - pupilRect.width) / 2;

		return Math.cos(angle) * dMax;
	});
	const targetY = useTransform(() => {
		const angle = calculateAngle();
		const dMax = (eyeRect.height - pupilRect.height) / 2;

		return Math.sin(angle) * dMax;
	});

	const x = useSpring(targetX, SPRING_BOUNCY);
	const y = useSpring(targetY, SPRING_BOUNCY);

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
