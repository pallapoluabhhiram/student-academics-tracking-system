import React from 'react';
import { UserCircle, GraduationCap } from 'lucide-react';
import { Student } from '../types/student';
import { MarkEntry } from './marks/MarkEntry';
import { AttendanceEntry } from './attendance/AttendanceEntry';
import { PerformanceChart } from './charts/PerformanceChart';
import { AttendanceChart } from './attendance/AttendanceChart';

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const calculateAttendancePercentage = () => {
    if (student.attendance.length === 0) return 100;
    const present = student.attendance.filter(a => a.status === 'present').length;
    return Math.round((present / student.attendance.length) * 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <UserCircle size={48} className="text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap size={20} />
              <span>Class: {student.class}</span>
              <span className="mx-2">•</span>
              <span>Roll: {student.rollNumber}</span>
              <span className="mx-2">•</span>
              <span>Attendance: {calculateAttendancePercentage()}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <AttendanceEntry studentId={student.id} />
          <MarkEntry studentId={student.id} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart marks={student.marks} />
            <AttendanceChart attendance={student.attendance} />
          </div>
        </div>
      </div>
    </div>
  );
}