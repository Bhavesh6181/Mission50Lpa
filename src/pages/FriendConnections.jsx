import React from 'react';
import { Users, UserPlus, MessageCircle, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

const FriendConnections = () => {
  const friends = [
    { id: 1, name: 'Alex Chen', status: 'online', streak: 28, lastActive: 'Active now', avatar: 'AC' },
    { id: 2, name: 'Sarah Kim', status: 'offline', streak: 22, lastActive: '2 hours ago', avatar: 'SK' },
    { id: 3, name: 'Mike Johnson', status: 'online', streak: 18, lastActive: 'Active now', avatar: 'MJ' }
  ];

  const pendingRequests = [
    { id: 1, name: 'Emma Davis', mutualFriends: 2, avatar: 'ED' },
    { id: 2, name: 'John Smith', mutualFriends: 1, avatar: 'JS' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Friend Connections 👥
        </h1>
        <p className="text-slate-400">
          Connect with fellow developers and share your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Total Friends</p>
            <p className="text-2xl font-bold text-white">{friends.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <UserPlus className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Pending Requests</p>
            <p className="text-2xl font-bold text-white">{pendingRequests.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Profile Views</p>
            <p className="text-2xl font-bold text-white">24</p>
          </CardContent>
        </Card>
      </div>

      {pendingRequests.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Pending Friend Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {request.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{request.name}</p>
                      <p className="text-slate-400 text-sm">{request.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Accept</Button>
                    <Button size="sm" variant="outline" className="border-slate-600">Decline</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Your Friends</CardTitle>
          <CardDescription className="text-slate-400">
            Connect and share your learning progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {friend.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${friend.status === 'online' ? 'bg-green-500' : 'bg-slate-500'}`} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{friend.name}</p>
                    <p className="text-slate-400 text-sm">{friend.lastActive}</p>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400 text-xs mt-1">
                      {friend.streak} day streak
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="border-slate-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FriendConnections;

