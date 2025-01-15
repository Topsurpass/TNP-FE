import LiveTeaching from '@/pages/dashboard/live-teaching';
import WeeklyScores from '@/pages/dashboard/scores-table';
import Welcome from '@/pages/dashboard/welcome';

export default function Dashboard() {
	return (
		<section className=" mt-2 flex  w-full flex-col justify-center gap-5 px-5 md:flex-row">
			<div className="mt-5 flex w-full flex-col gap-5">
				<Welcome />
				<LiveTeaching />
			</div>
			<div className="mt-5 w-full">
				<WeeklyScores />
			</div>
		</section>
	);
}
