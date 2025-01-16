import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';
import { QuizData } from '@/types/quiz-type';
import { quizData } from '@/data/quiz-table-data';


const columns: ColumnDef<QuizData>[] = [
	{ accessorKey: 'week', header: 'Week' },
	{ accessorKey: 'quizId', header: 'Quiz ID' },
	{ accessorKey: 'quizTopic', header: 'Quiz Topic' },
	{ accessorKey: 'score', header: 'Score' },
	{
		accessorKey: 'details',
		header: 'Details',
		cell: ({ row }) => (
			<a
				href={`/quiz/${row.original.quizId}`}
				className="text-blue-500 hover:underline"
			>
				View Quiz
			</a>
		),
	},
];

export default function QuizTable() {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="">Quiz Scores</CardTitle>
				<CardDescription>
					Review all the quizzes you took
				</CardDescription>
			</CardHeader>
			<CardContent>
				<DataTable pageSize={3} data={quizData} columns={columns} />
			</CardContent>
		</Card>
	);
}
