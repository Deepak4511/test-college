
export interface Course {
  id: string;
  title: string;
  category: 'Engineering' | 'Arts' | 'Science' | 'Business';
  duration: string;
  description: string;
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
