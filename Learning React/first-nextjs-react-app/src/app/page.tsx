import Card from "./components/Card";

export default function Home() {
	return (
		<div className="flex flex-col h-screen w-screen justify-center items-center bg-slate-500">
			<h1 className="bg-red-600 text-black px-8 py-5 rounded-3xl">
				Test Tailwind
			</h1>

			<Card />
		</div>
	);
}
