import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useStudentStore } from '../../store/useStudentStore';

const examTypes = ['quiz', 'test', 'assignment', 'exam'] as const;

interface MarkEntryProps {
  studentId: string;
}

export function MarkEntry({ studentId }: MarkEntryProps) {
  const [formData, setFormData] = useState({
    subject: '',
    totalMarks: 100,
    obtainedMarks: '',
    examType: 'test' as const,
    date: new Date().toISOString().split('T')[0],
  });

  const addMark = useStudentStore((state) => state.addMark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject.trim() || !formData.obtainedMarks) return;

    addMark(studentId, {
      ...formData,
      obtainedMarks: Number(formData.obtainedMarks),
      date: new Date(formData.date).toISOString(),
    });

    setFormData(prev => ({
      ...prev,
      subject: '',
      obtainedMarks: '',
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow">
      <input
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
        placeholder="Subject"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={formData.obtainedMarks}
        onChange={(e) => setFormData(prev => ({ ...prev, obtainedMarks: e.target.value }))}
        placeholder="Obtained Marks"
        max={formData.totalMarks}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={formData.examType}
        onChange={(e) => setFormData(prev => ({ ...prev, examType: e.target.value as typeof examTypes[number] }))}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {examTypes.map(type => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
      >
        <PlusCircle size={20} />
        Add Mark
      </button>
    </form>
  );
}