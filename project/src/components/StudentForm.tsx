import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useStudentStore } from '../store/useStudentStore';

export function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    rollNumber: '',
  });

  const addStudent = useStudentStore((state) => state.addStudent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.class.trim() || !formData.rollNumber.trim()) return;

    addStudent({
      id: crypto.randomUUID(),
      name: formData.name,
      class: formData.class,
      rollNumber: formData.rollNumber,
      marks: [],
      attendance: [],
    });

    setFormData({
      name: '',
      class: '',
      rollNumber: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        placeholder="Student Name"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={formData.class}
        onChange={(e) => setFormData(prev => ({ ...prev, class: e.target.value }))}
        placeholder="Class"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={formData.rollNumber}
        onChange={(e) => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
        placeholder="Roll Number"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        <UserPlus size={20} />
        Add Student
      </button>
    </form>
  );
}