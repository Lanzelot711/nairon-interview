import { NextResponse } from 'next/server';

const authors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Writer",
    description: "Passionate about making complex technology accessible to everyone through clear, engaging writing.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    description: "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    description: "Creating intuitive and beautiful user experiences that solve real-world problems.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    description: "Bridging the gap between user needs and technical solutions to build meaningful products.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Data Scientist",
    description: "Turning data into actionable insights using machine learning and statistical analysis.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "James Thompson",
    role: "DevOps Engineer",
    description: "Streamlining development workflows and building scalable infrastructure solutions.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "Frontend Developer",
    description: "Crafting responsive and performant web applications with modern JavaScript frameworks.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Alex Parker",
    role: "Backend Developer",
    description: "Building robust APIs and database systems that power seamless user experiences.",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=face"
  }
];

export async function GET() {
  return NextResponse.json(authors);
}