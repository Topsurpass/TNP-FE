import HeroPic from '@/assets/me-hero.jpg';

export default function Home() {
	return (
		<section className="flex w-full min-h-screen text-indigo-800 flex-col md:flex-row items-center justify-center px-10 bg-gradient-to-br from-teal-100 via-blue-300 to-indigo-500">
			<div className="flex-1 flex flex-col justify-center items-start text-left md:space-y-4 mt-4 w-full">
				<h1 className="text-3xl md:text-6xl font-bold md:font-extrabold leading-tight drop-shadow-lg typing-effect-name">
					<p>Temitope Olowosuyi</p>
				</h1>
				<p className="text-xl md:text-2xl font-medium typing-effect-name">
					Frontend Developer & Web Designer
				</p>
				<button className="mt-6 px-8 py-3 bg-indigo-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
					Hire Me
				</button>
			</div>

			<div className="flex-1 flex justify-center items-center">
				<img
					src={HeroPic}
					alt="Hero"
					className="my-3 md:w-1/2 h- object-cover rounded-md border-2 border-white shadow-2xl"
				/>
			</div>
		</section>
	);
}
