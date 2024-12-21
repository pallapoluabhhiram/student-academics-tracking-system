export interface Mark {
  subject: string;
  totalMarks: number;
  obtainedMarks: number;
  examType: 'quiz' | 'test' | 'assignment' | 'exam';
  date: string;
}

export interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late';
  notes?: string;
}

export interface Student {
  id: string;
  name: string;
  marks: Mark[];
  attendance: AttendanceRecord[];
  class: string;
  rollNumber: string;
}