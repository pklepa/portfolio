import useMousePosition from "#/hooks/useMousePosition";

function BackgroundBlob() {
	const { x, y } = useMousePosition();

	return (
		<div
			style={{
				left: x ?? "50%",
				top: y ?? "50%",
			}}
			aria-hidden="true"
			className="absolute opacity-40 -translate-y-1/2 -translate-x-1/2 -z-1 blur-3xl mix-blend-multiply w-3xl bg-radial from-60% from-primary-dark to-primary aspect-square rounded-full pointer-events-none"
		/>
	);
}

export default BackgroundBlob;
