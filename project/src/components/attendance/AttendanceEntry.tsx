import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { useStudentStore } from '../../store/useStudentStore';

interface AttendanceEntryProps {
  studentId: string;
}

export function AttendanceEntry({ studentId }: AttendanceEntryProps) {
  const addAttendance = useStudentStore((state) => state.addAttendance);

  const markAttendance = (status: 'present' | 'absent' | 'late') => {
    addAttendance(studentId, {
      date: new Date().toISOString(),
      status,
    });
  };

  return (
    <div className="flex gap-2 p-4 bg-white rounded-lg shadow">
      <button
        onClick={() => markAttendance('present')}
        className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
      >
        <CheckCircle size={20} />
        Present
      </button>
      <button
        onClick={() => markAttendance('absent')}
        className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
      >
        <XCircle size={20} />
        Absent
      </button>
      <button
        onClick={() => markAttendance('late')}
        className="flex items-center gap-2 px-4 py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
      >
        <Clock size={20} />
        Late
      </button>
    </div>
  );
}