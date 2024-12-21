import { create } from 'zustand';
import { Student, Mark, AttendanceRecord } from '../types/student';

interface StudentStore {
  students: Student[];
  addStudent: (student: Student) => void;
  addMark: (studentId: string, mark: Mark) => void;
  addAttendance: (studentId: string, attendance: AttendanceRecord) => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
  addMark: (studentId, mark) =>
    set((state) => ({
      students: state.students.map((student) =>
        student.id === studentId
          ? { ...student, marks: [...student.marks, mark] }
          : student
      ),
    })),
  addAttendance: (studentId, attendance) =>
    set((state) => ({
      students: state.students.map((student) =>
        student.id === studentId
          ? { ...student, attendance: [...student.attendance, attendance] }
          : student
      ),
    })),
}));