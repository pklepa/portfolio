import { createFileRoute } from "@tanstack/react-router";
import AnimatedGooglyEye from "#/components/AnimatedGooglyEye";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="flex grow items-center justify-center p-6">
			<div className="mb-96 pl-96">
				<div className="flex gap-4">
					<AnimatedGooglyEye />
					<AnimatedGooglyEye />
				</div>
			</div>
		</main>
	);
}
