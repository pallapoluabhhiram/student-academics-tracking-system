import React from 'react';
import { GraduationCap } from 'lucide-react';
import { StudentForm } from './components/StudentForm';
import { StudentList } from './components/StudentList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Student Academic Recorder
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <StudentForm />
        <StudentList />
      </main>
    </div>
  );
}

export default App;