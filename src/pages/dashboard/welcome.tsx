import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
export default function Welcome() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="">
					How was service today, Temitope?
				</CardTitle>
				<CardDescription>
					We hope you had an amazing time in the presence of God.
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
