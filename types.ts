import React from 'react';

export interface Exam {
  id: number;
  title: string;
  subject: string;
  totalMarks: number;
  time: string;
  type: 'free' | 'premium';
  participants: number;
  tags?: string[];
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  institution: string;
}

export interface WeeklyStat {
  day: string;
  xp: number;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  discount?: string;
}