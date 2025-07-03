import React from 'react';
import { 
  Clock, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Code, 
  Trophy, 
  Users, 
  Calendar,
  Zap,
  Brain,
  GitBranch,
  Award
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const stats = [
    {
      title: 'Study Hours This Week',
      value: '42.5',
      unit: 'hours',
      change: '+12%',
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Current Streak',
      value: '15',
      unit: 'days',
      change: '+3 days',
      icon: Target,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Projects Completed',
      value: '8',
      unit: 'projects',
      change: '+2 this month',
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Skills Mastered',
      value: '23',
      unit: 'technologies',
      change: '+5 this quarter',
      icon: Brain,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const recentActivities = [
    {
      type: 'learning',
      title: 'Completed React Hooks Deep Dive',
      time: '2 hours ago',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      type: 'project',
      title: 'Deployed E-commerce Backend API',
      time: '1 day ago',
      icon: GitBranch,
      color: 'text-green-500'
    },
    {
      type: 'achievement',
      title: 'Earned AWS Solutions Architect Certification',
      time: '3 days ago',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      type: 'social',
      title: 'Connected with 3 new developers',
      time: '5 days ago',
      icon: Users,
      color: 'text-purple-500'
    }
  ];

  const skillProgress = [
    { name: 'React/Next.js', level: 85, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 78, color: 'bg-green-500' },
    { name: 'Python/Django', level: 72, color: 'bg-yellow-500' },
    { name: 'System Design', level: 65, color: 'bg-purple-500' },
    { name: 'AWS/Cloud', level: 58, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-slate-400">
            Track your journey to becoming a ₹50 LPA+ Software Engineer
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Badge variant="outline" className="text-green-400 border-green-400">
            <Zap className="w-4 h-4 mr-1" />
            On Track for 2025 Goal
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {stat.value}
                <span className="text-sm font-normal text-slate-400 ml-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs text-green-400 mt-1">
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Skill Progress Overview
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your current proficiency in key technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                View Detailed Skills Map
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                Recent Activity
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your latest achievements and progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-slate-700/50`}>
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-300 truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700">
                View All Activities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-slate-400">
            Jump into your most important tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700">
              <BookOpen className="w-6 h-6 mb-2" />
              Log Learning Session
            </Button>
            <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
              <Code className="w-6 h-6 mb-2" />
              Add New Project
            </Button>
            <Button className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700">
              <Trophy className="w-6 h-6 mb-2" />
              Update Achievement
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

