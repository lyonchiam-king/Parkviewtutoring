export interface SubjectCard {
  id: 'maths' | 'physics' | 'exam';
  name: string;
  tags: string[];
  image: string;
  summary: string;
  description: string;
  topics: string[];
  outcome: string;
}

export interface ReviewQuote {
  id: string;
  quote: string;
  author: string;
  relation: string;
}

export type SubjectSelection = 'Maths' | 'Physics' | 'Both';
export type YearGroupSelection = '10' | '11';

export interface EnquiryState {
  subject: SubjectSelection;
  yearGroup: YearGroupSelection;
  parentName: string;
  studentName: string;
  contactNumber: string;
  email: string;
  preferredDays: string;
  additionalNotes: string;
}

export interface SavedEnquiry extends EnquiryState {
  id: string;
  timestamp: string;
}
