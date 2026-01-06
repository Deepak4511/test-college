
import React from 'react';
import { BookOpen, Monitor, Award, Globe, Users, FlaskConical, Library, Trophy, Music } from 'lucide-react';
import { Course, Facility, FAQItem } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Computer Science & AI',
    category: 'Engineering',
    duration: '4 Years',
    description: 'Explore the frontiers of computing, from algorithms to neural networks.',
    image: 'https://picsum.photos/seed/cs/800/600'
  },
  {
    id: '2',
    title: 'Modern Architecture',
    category: 'Arts',
    duration: '5 Years',
    description: 'Design sustainable and breathtaking structures for the future cities.',
    image: 'https://picsum.photos/seed/arch/800/600'
  },
  {
    id: '3',
    title: 'Global Economics',
    category: 'Business',
    duration: '3 Years',
    description: 'Understand markets, trade, and the financial backbone of society.',
    image: 'https://picsum.photos/seed/econ/800/600'
  },
  {
    id: '4',
    title: 'Biotechnology',
    category: 'Science',
    duration: '4 Years',
    description: 'Pioneering research in genetics and molecular biology.',
    image: 'https://picsum.photos/seed/bio/800/600'
  },
  {
    id: '5',
    title: 'Fine Arts & Design',
    category: 'Arts',
    duration: '3 Years',
    description: 'Express creativity through classical and digital mediums.',
    image: 'https://picsum.photos/seed/art/800/600'
  },
  {
    id: '6',
    title: 'Quantum Physics',
    category: 'Science',
    duration: '4 Years',
    description: 'Deep dive into the fundamental laws of the universe.',
    image: 'https://picsum.photos/seed/physics/800/600'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    name: 'Research Hub',
    description: 'Equipped with the latest computing clusters and wet labs.',
    icon: 'FlaskConical',
    image: 'https://picsum.photos/seed/lab/1200/800'
  },
  {
    id: 'f2',
    name: 'Digital Library',
    description: 'Access millions of resources 24/7 in our award-winning library.',
    icon: 'Library',
    image: 'https://picsum.photos/seed/library/1200/800'
  },
  {
    id: 'f3',
    name: 'Sports Complex',
    description: 'Olympic-sized swimming pool and professional track.',
    icon: 'Trophy',
    image: 'https://picsum.photos/seed/stadium/1200/800'
  },
  {
    id: 'f4',
    name: 'Auditorium',
    description: 'A 2000-seat magnificent venue for international events.',
    icon: 'Music',
    image: 'https://picsum.photos/seed/stage/1200/800'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I apply for the 2025 academic session?",
    answer: "You can apply directly through our online portal. Select your desired course, upload documents, and pay the application fee."
  },
  {
    question: "What scholarships are available?",
    answer: "We offer Merit-based, Need-based, and Sports scholarships covering up to 100% of tuition fees."
  },
  {
    question: "Do you provide on-campus accommodation?",
    answer: "Yes, our modern dormitories provide comfortable living with 24/7 security and high-speed internet."
  },
  {
    question: "Are there international exchange programs?",
    answer: "We have partnerships with 50+ universities worldwide for semester-long exchange programs."
  }
];

export const FEATURES = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Recognition",
    desc: "Ranked among top 1% universities worldwide for academic excellence."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Faculty",
    desc: "Learn from industry pioneers and world-renowned researchers."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Career Growth",
    desc: "98% placement rate with top-tier global companies."
  }
];
