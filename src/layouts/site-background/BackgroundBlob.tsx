function BackgroundBlob() {
	return (
		<div
			aria-hidden="true"
			className="absolute opacity-40 -z-1 blur-3xl mix-blend-multiply w-3xl bg-radial from-60% from-primary-dark to-primary aspect-square rounded-full pointer-events-none"
		/>
	);
}

export default BackgroundBlob;
