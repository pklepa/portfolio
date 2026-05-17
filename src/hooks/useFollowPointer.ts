import { useSpring, useTransform } from "motion/react";
import type { RefObject } from "react";
import { SPRING_SMOOTH } from "#/constants/animations";
import usePointerPosition from "./usePointerPosition";

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

	const x = useSpring(normalizedX, SPRING_SMOOTH);
	const y = useSpring(normalizedY, SPRING_SMOOTH);

	return { x, y };
}

export default useFollowPointer;
