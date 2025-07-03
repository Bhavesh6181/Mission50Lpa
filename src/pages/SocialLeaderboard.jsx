import React from 'react';
import { Trophy, Target, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

const SocialLeaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', hours: 156, streak: 28, projects: 12, avatar: 'AC' },
    { rank: 2, name: 'You', hours: 142, streak: 15, projects: 8, avatar: 'YN', isCurrentUser: true },
    { rank: 3, name: 'Sarah Kim', hours: 138, streak: 22, projects: 10, avatar: 'SK' },
    { rank: 4, name: 'Mike Johnson', hours: 125, streak: 18, projects: 9, avatar: 'MJ' },
    { rank: 5, name: 'Emma Davis', hours: 118, streak: 12, projects: 7, avatar: 'ED' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Social Leaderboard 🏆
        </h1>
        <p className="text-slate-400">
          Compete with friends and track your progress together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Your Rank</p>
            <p className="text-2xl font-bold text-white">#2</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Study Hours</p>
            <p className="text-2xl font-bold text-white">142h</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Current Streak</p>
            <p className="text-2xl font-bold text-white">15 days</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Monthly Leaderboard</CardTitle>
          <CardDescription className="text-slate-400">
            Rankings based on study hours, consistency, and project completion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((user) => (
              <div key={user.rank} className={`flex items-center justify-between p-4 rounded-lg ${user.isCurrentUser ? 'bg-purple-600/20 border border-purple-600/30' : 'bg-slate-700/30'}`}>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-white w-8">
                    #{user.rank}
                  </div>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white flex items-center">
                      {user.name}
                      {user.isCurrentUser && (
                        <Badge variant="outline" className="ml-2 text-purple-400 border-purple-400 text-xs">
                          You
                        </Badge>
                      )}
                    </p>
                    <p className="text-slate-400 text-sm">Rank #{user.rank}</p>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="text-center">
                    <p className="text-slate-400">Hours</p>
                    <p className="text-white font-medium">{user.hours}h</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400">Streak</p>
                    <p className="text-white font-medium">{user.streak}d</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400">Projects</p>
                    <p className="text-white font-medium">{user.projects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialLeaderboard;

