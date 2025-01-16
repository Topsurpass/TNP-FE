import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export default function LiveTeaching() {
	const navigate = useNavigate();

	return (
		<Card className="w-full">
			<CardHeader className="space-y-3">
				<CardTitle className="">Weekly Teaching</CardTitle>
				<CardDescription>
					Find below the message preached in church today
				</CardDescription>
				<div className="flex flex-col gap-1">
					<iframe
						className="w-full md:h-80 aspect-video"
						src="https://www.youtube.com/embed/0tIeG_5xRx4?autoplay=1&rel=0&modestbranding=1&playsinline=1"
						title="Weekly Teaching"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<div>
						<Button
							label="Take Test"
							size="sm"
							onClick={() => navigate('/quizzes')}
						/>
					</div>
				</div>
			</CardHeader>
		</Card>
	);
}
