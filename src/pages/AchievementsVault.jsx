import React, { useState } from 'react';
import { 
  Plus, 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Calendar, 
  ExternalLink,
  Search,
  Filter,
  Edit,
  Trash2,
  Download,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const AchievementsVault = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [isAddingAchievement, setIsAddingAchievement] = useState(false);

  const achievements = [
    {
      id: 1,
      title: 'AWS Solutions Architect Associate',
      type: 'Certification',
      issuer: 'Amazon Web Services',
      date: '2024-01-10',
      expiryDate: '2027-01-10',
      credentialId: 'AWS-SAA-2024-001',
      proofUrl: 'https://aws.amazon.com/verification',
      description: 'Validates expertise in designing distributed systems on AWS platform',
      whatItDemonstrates: 'Cloud architecture, scalability, security, and cost optimization skills',
      skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security'],
      icon: 'certification',
      verified: true,
      score: '850/1000'
    },
    {
      id: 2,
      title: 'Hackathon Winner - TechFest 2024',
      type: 'Competition',
      issuer: 'TechFest Organization',
      date: '2024-01-05',
      expiryDate: null,
      credentialId: 'TF2024-WIN-001',
      proofUrl: 'https://techfest.com/winners/2024',
      description: 'First place in 48-hour hackathon with AI-powered sustainability solution',
      whatItDemonstrates: 'Rapid prototyping, teamwork, AI/ML implementation, and presentation skills',
      skills: ['React', 'Python', 'AI/ML', 'Team Leadership'],
      icon: 'trophy',
      verified: true,
      score: null
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      type: 'Certification',
      issuer: 'Google Cloud',
      date: '2023-12-15',
      expiryDate: '2025-12-15',
      credentialId: 'GCP-PD-2023-456',
      proofUrl: 'https://cloud.google.com/certification/verify',
      description: 'Demonstrates proficiency in developing applications on Google Cloud Platform',
      whatItDemonstrates: 'GCP services, containerization, CI/CD, and cloud-native development',
      skills: ['GCP', 'Docker', 'Kubernetes', 'CI/CD'],
      icon: 'certification',
      verified: true,
      score: '92%'
    },
    {
      id: 4,
      title: 'Dean\'s List - Fall 2023',
      type: 'Academic',
      issuer: 'University of Technology',
      date: '2023-12-01',
      expiryDate: null,
      credentialId: 'DL-F23-CS-789',
      proofUrl: null,
      description: 'Academic excellence recognition for maintaining GPA above 3.8',
      whatItDemonstrates: 'Consistent academic performance and dedication to learning',
      skills: ['Academic Excellence', 'Time Management', 'Consistency'],
      icon: 'academic',
      verified: true,
      score: 'GPA: 3.9/4.0'
    },
    {
      id: 5,
      title: 'Open Source Contributor - React',
      type: 'Recognition',
      issuer: 'React Team',
      date: '2023-11-20',
      expiryDate: null,
      credentialId: 'OSC-REACT-2023',
      proofUrl: 'https://github.com/facebook/react/contributors',
      description: 'Contributed to React core library with bug fixes and documentation improvements',
      whatItDemonstrates: 'Open source collaboration, code quality, and community engagement',
      skills: ['React', 'Open Source', 'JavaScript', 'Documentation'],
      icon: 'recognition',
      verified: true,
      score: '15 PRs merged'
    }
  ];

  const types = ['all', 'Certification', 'Competition', 'Academic', 'Recognition'];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || achievement.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'certification': return Award;
      case 'trophy': return Trophy;
      case 'academic': return Medal;
      case 'recognition': return Star;
      default: return Award;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'Certification': return 'text-blue-500';
      case 'Competition': return 'text-yellow-500';
      case 'Academic': return 'text-green-500';
      case 'Recognition': return 'text-purple-500';
      default: return 'text-slate-500';
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'Certification': return 'bg-blue-600';
      case 'Competition': return 'bg-yellow-600';
      case 'Academic': return 'bg-green-600';
      case 'Recognition': return 'bg-purple-600';
      default: return 'bg-slate-600';
    }
  };

  const totalAchievements = achievements.length;
  const certifications = achievements.filter(a => a.type === 'Certification').length;
  const competitions = achievements.filter(a => a.type === 'Competition').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Achievements Vault 🏆
          </h1>
          <p className="text-slate-400">
            Your collection of certifications, awards, and recognitions
          </p>
        </div>
        <Dialog open={isAddingAchievement} onOpenChange={setIsAddingAchievement}>
          <DialogTrigger asChild>
            <Button className="mt-4 lg:mt-0 bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Achievement
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Achievement</DialogTitle>
              <DialogDescription className="text-slate-400">
                Record your latest certification, award, or recognition.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Achievement Title</Label>
                <Input id="title" placeholder="AWS Solutions Architect" className="bg-slate-700 border-slate-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.slice(1).map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="issuer">Issuer/Organization</Label>
                  <Input id="issuer" placeholder="Amazon Web Services" className="bg-slate-700 border-slate-600" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="What this achievement represents..." className="bg-slate-700 border-slate-600" rows={2} />
              </div>
              <div>
                <Label htmlFor="demonstrates">What It Demonstrates</Label>
                <Textarea id="demonstrates" placeholder="Skills and knowledge this proves..." className="bg-slate-700 border-slate-600" rows={2} />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddingAchievement(false)}>Cancel</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Add Achievement</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Achievements</p>
                <p className="text-2xl font-bold text-white">{totalAchievements}</p>
              </div>
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Certifications</p>
                <p className="text-2xl font-bold text-white">{certifications}</p>
              </div>
              <Award className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Competition Wins</p>
                <p className="text-2xl font-bold text-white">{competitions}</p>
              </div>
              <Medal className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search achievements, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600"
                />
              </div>
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-48 bg-slate-700 border-slate-600">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAchievements.map((achievement) => {
          const IconComponent = getIcon(achievement.icon);
          return (
            <Card key={achievement.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-white`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        {achievement.title}
                        {achievement.verified && (
                          <Badge variant="outline" className="ml-2 text-green-400 border-green-400 text-xs">
                            Verified
                          </Badge>
                        )}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${getBadgeColor(achievement.type)} text-white text-xs`}>
                          {achievement.type}
                        </Badge>
                        <span className="text-slate-400 text-sm">{achievement.issuer}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Date Earned</p>
                      <p className="text-white flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {achievement.date}
                      </p>
                    </div>
                    {achievement.score && (
                      <div>
                        <p className="text-slate-400">Score</p>
                        <p className="text-white">{achievement.score}</p>
                      </div>
                    )}
                  </div>

                  {achievement.expiryDate && (
                    <div className="text-sm">
                      <p className="text-slate-400">Expires</p>
                      <p className="text-white">{achievement.expiryDate}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-slate-400 text-sm mb-2">Description:</p>
                    <p className="text-slate-300 text-sm">{achievement.description}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm mb-2">What it demonstrates:</p>
                    <p className="text-slate-300 text-sm">{achievement.whatItDemonstrates}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm mb-2">Related Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {achievement.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {achievement.credentialId && (
                    <div className="text-sm">
                      <p className="text-slate-400">Credential ID:</p>
                      <p className="text-slate-300 font-mono">{achievement.credentialId}</p>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    {achievement.proofUrl && (
                      <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Download className="w-4 h-4 mr-2" />
                      Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredAchievements.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <Trophy className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No achievements found</h3>
            <p className="text-slate-500 mb-4">Start building your achievements vault by adding your first accomplishment.</p>
            <Button onClick={() => setIsAddingAchievement(true)} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Achievement
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AchievementsVault;

