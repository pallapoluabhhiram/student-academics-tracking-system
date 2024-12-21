import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Grade } from '../types/student';

interface GradeChartProps {
  grades: Grade[];
}

export function GradeChart({ grades }: GradeChartProps) {
  const data = grades.map((grade) => ({
    date: new Date(grade.date).toLocaleDateString(),
    score: grade.score,
    subject: grade.subject,
  }));

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Grade Progress</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}