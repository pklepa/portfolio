import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="flex grow items-center justify-center p-6">
			<h1>Hello World</h1>
		</main>
	);
}
