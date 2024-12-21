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
import { Mark } from '../../types/student';

interface PerformanceChartProps {
  marks: Mark[];
}

export function PerformanceChart({ marks }: PerformanceChartProps) {
  const data = marks.map((mark) => ({
    date: new Date(mark.date).toLocaleDateString(),
    percentage: (mark.obtainedMarks / mark.totalMarks) * 100,
    subject: mark.subject,
    examType: mark.examType,
  }));

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Academic Performance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-4 rounded-lg shadow-lg border">
                    <p className="font-semibold">{data.subject}</p>
                    <p>Type: {data.examType}</p>
                    <p>Score: {data.percentage.toFixed(2)}%</p>
                    <p>Date: {data.date}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}