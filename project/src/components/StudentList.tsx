import React from 'react';
import { GraduationCap, UserCircle } from 'lucide-react';
import { useStudentStore } from '../store/useStudentStore';
import { StudentCard } from './StudentCard';

export function StudentList() {
  const students = useStudentStore((state) => state.students);

  if (students.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <GraduationCap size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No students added yet. Add a student to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}