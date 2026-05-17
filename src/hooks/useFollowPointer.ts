import { useSpring, useTransform } from "motion/react";
import type { RefObject } from "react";
import usePointerPosition from "./usePointerPosition";

const spring = { damping: 10, stiffness: 50, restDelta: 0.011 };

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
	const { x: mouseX, y: mouseY } = usePointerPosition();

	const normalizedX = useTransform(
		() =>
			mouseX.get() -
			(ref.current?.offsetLeft ?? 0) -
			(ref.current?.offsetWidth ?? 0) / 2,
	);
	const normalizedY = useTransform(
		() =>
			mouseY.get() -
			(ref.current?.offsetTop ?? 0) -
			(ref.current?.offsetHeight ?? 0) / 2,
	);

	const x = useSpring(normalizedX, spring);
	const y = useSpring(normalizedY, spring);

	return { x, y };
}

export default useFollowPointer;
