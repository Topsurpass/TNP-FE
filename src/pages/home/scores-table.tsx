import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';
import { weeklyData } from '@/data/weekly-score-data';
import { WeeklyData } from '@/types/weekly-score-type';

const columns: ColumnDef<WeeklyData>[] = [
	{
		accessorKey: 'week',
		header: 'Week',
	},
	{
		accessorKey: 'value',
		header: 'Score',
	},
];

export default function WeeklyScores() {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="">Weekly scores</CardTitle>
				<CardDescription>
					Below are your weekly scores based on the weekly test you
					take.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<DataTable pageSize={3} data={weeklyData} columns={columns} />
			</CardContent>
		</Card>
	);
}
