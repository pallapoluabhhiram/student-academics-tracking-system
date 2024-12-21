import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { AttendanceRecord } from '../../types/student';

interface AttendanceChartProps {
  attendance: AttendanceRecord[];
}

const COLORS = {
  present: '#22c55e',
  absent: '#ef4444',
  late: '#eab308',
};

export function AttendanceChart({ attendance }: AttendanceChartProps) {
  const data = Object.entries(
    attendance.reduce((acc, record) => {
      acc[record.status] = (acc[record.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([name, value]) => ({ name, value }));

  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Attendance Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, percent }) => 
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={COLORS[entry.name as keyof typeof COLORS]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}