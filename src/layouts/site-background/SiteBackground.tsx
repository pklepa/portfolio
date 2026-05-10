import BackgroundBlob from "./BackgroundBlob";
import NoiseBackground from "./NoiseBackground";

function SiteBackground() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 -z-1 pointer-events-none overflow-hidden bg-primary"
		>
			<NoiseBackground />
			<BackgroundBlob />
		</div>
	);
}

export default SiteBackground;
