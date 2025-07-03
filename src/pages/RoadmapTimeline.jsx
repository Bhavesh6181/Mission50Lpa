import React from 'react';
import { Map, CheckCircle, Circle, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

const RoadmapTimeline = () => {
  const roadmapPhases = [
    {
      id: 1,
      title: 'Fundamentals',
      status: 'completed',
      progress: 100,
      duration: '3 months',
      topics: ['Data Structures', 'Algorithms', 'Programming Languages'],
      projects: ['Basic Calculator', 'Todo App'],
      completed: true
    },
    {
      id: 2,
      title: 'Web Development',
      status: 'completed',
      progress: 95,
      duration: '4 months',
      topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      projects: ['Portfolio Website', 'E-commerce Platform'],
      completed: true
    },
    {
      id: 3,
      title: 'System Design',
      status: 'in-progress',
      progress: 60,
      duration: '2 months',
      topics: ['Scalability', 'Databases', 'Caching', 'Load Balancing'],
      projects: ['URL Shortener', 'Chat Application'],
      completed: false
    },
    {
      id: 4,
      title: 'Advanced Topics',
      status: 'upcoming',
      progress: 0,
      duration: '3 months',
      topics: ['Microservices', 'DevOps', 'Cloud Computing'],
      projects: ['Distributed System', 'CI/CD Pipeline'],
      completed: false
    },
    {
      id: 5,
      title: 'Interview Preparation',
      status: 'upcoming',
      progress: 0,
      duration: '2 months',
      topics: ['Mock Interviews', 'Behavioral Questions', 'Salary Negotiation'],
      projects: ['Interview Tracker', 'Resume Optimizer'],
      completed: false
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Roadmap Timeline 🗺️
        </h1>
        <p className="text-slate-400">
          Your structured path from fundamentals to ₹50 LPA+ interviews
        </p>
      </div>

      <div className="space-y-6">
        {roadmapPhases.map((phase, index) => (
          <Card key={phase.id} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  {phase.completed ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : phase.status === 'in-progress' ? (
                    <Clock className="w-8 h-8 text-yellow-500" />
                  ) : (
                    <Circle className="w-8 h-8 text-slate-500" />
                  )}
                  {index < roadmapPhases.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-600 mt-4" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    <Badge variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}>
                      {phase.status}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm">Progress</span>
                      <span className="text-white text-sm">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 mb-2">Duration</p>
                      <p className="text-white">{phase.duration}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-2">Key Topics</p>
                      <div className="flex flex-wrap gap-1">
                        {phase.topics.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-2">Projects</p>
                      <div className="flex flex-wrap gap-1">
                        {phase.projects.map((project, i) => (
                          <Badge key={i} variant="outline" className="text-purple-400 border-purple-400 text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;

