import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useStudentStore } from '../store/useStudentStore';

interface GradeFormProps {
  studentId: string;
}

export function GradeForm({ studentId }: GradeFormProps) {
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');
  const addGrade = useStudentStore((state) => state.addGrade);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !score) return;

    addGrade(studentId, {
      subject,
      score: Number(score),
      date: new Date().toISOString(),
    });
    setSubject('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mt-4">
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        placeholder="Score"
        min="0"
        max="100"
        className="w-24 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
      >
        <PlusCircle size={20} />
        Add Grade
      </button>
    </form>
  );
}