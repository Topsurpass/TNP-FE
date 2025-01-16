import HeroPic from '@/assets/me-hero.jpg';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<section className="flex w-full min-h-screen text-indigo-800 flex-col md:flex-row items-center justify-center gap-3 px-10 bg-gradient-to-br from-indigo-500 via-blue-300 to-teal-100">
			<div className="flex-1 flex flex-col justify-center items-start text-left space-y-4 mt-4 w-full">
				<h1 className="text-3xl md:text-6xl font-bold md:font-extrabold leading-tight drop-shadow-lg">
					<p>Temitope Olowosuyi</p>
				</h1>
				<p className="text-xl md:text-2xl font-medium">
					Frontend Developer & Web Designer
				</p>
				<Button
					size={'lg'}
					label="Hire me"
					className="hover:bg-blue-500
				"
				/>
			</div>

			<div className="flex-1 flex md:justify-center md:items-center  w-full h-screen">
				<img
					src={HeroPic}
					alt="Hero"
					className="md:w-1/2 h-fit object-cover rounded-md border-2 border-white shadow-2xl"
				/>
			</div>
		</section>
	);
}
