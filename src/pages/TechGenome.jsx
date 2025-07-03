import React, { useState } from 'react';
import { 
  Plus, 
  Brain, 
  TrendingUp, 
  Star, 
  BookOpen, 
  Code, 
  Search,
  Filter,
  Edit,
  Trash2,
  Award,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';

const TechGenome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const skills = [
    {
      id: 1,
      name: 'React.js',
      category: 'Frontend',
      proficiency: 85,
      level: 'Advanced',
      yearsOfExperience: 2.5,
      lastUsed: '2024-01-15',
      howLearned: 'Official documentation, personal projects, online courses',
      relatedProjects: ['E-Commerce Platform', 'Task Manager'],
      certifications: [],
      trending: true,
      inDemand: true
    },
    {
      id: 2,
      name: 'Node.js',
      category: 'Backend',
      proficiency: 78,
      level: 'Advanced',
      yearsOfExperience: 2,
      lastUsed: '2024-01-14',
      howLearned: 'Bootcamp, personal projects, work experience',
      relatedProjects: ['E-Commerce Platform', 'Chat Application'],
      certifications: [],
      trending: true,
      inDemand: true
    },
    {
      id: 3,
      name: 'Python',
      category: 'Programming Language',
      proficiency: 82,
      level: 'Advanced',
      yearsOfExperience: 3,
      lastUsed: '2024-01-12',
      howLearned: 'University courses, competitive programming, AI/ML projects',
      relatedProjects: ['AI Task Manager', 'Data Analysis Tool'],
      certifications: ['Python Institute PCAP'],
      trending: false,
      inDemand: true
    },
    {
      id: 4,
      name: 'Docker',
      category: 'DevOps',
      proficiency: 65,
      level: 'Intermediate',
      yearsOfExperience: 1,
      lastUsed: '2024-01-10',
      howLearned: 'Online tutorials, personal projects, internship',
      relatedProjects: ['Microservices Demo'],
      certifications: [],
      trending: true,
      inDemand: true
    },
    {
      id: 5,
      name: 'AWS',
      category: 'Cloud',
      proficiency: 58,
      level: 'Intermediate',
      yearsOfExperience: 1.5,
      lastUsed: '2024-01-08',
      howLearned: 'AWS documentation, hands-on labs, certification prep',
      relatedProjects: ['Chat Application', 'E-Commerce Platform'],
      certifications: ['AWS Solutions Architect Associate'],
      trending: true,
      inDemand: true
    },
    {
      id: 6,
      name: 'MongoDB',
      category: 'Database',
      proficiency: 72,
      level: 'Intermediate',
      yearsOfExperience: 2,
      lastUsed: '2024-01-05',
      howLearned: 'Official documentation, personal projects',
      relatedProjects: ['E-Commerce Platform', 'Task Manager'],
      certifications: [],
      trending: false,
      inDemand: true
    },
    {
      id: 7,
      name: 'TypeScript',
      category: 'Programming Language',
      proficiency: 75,
      level: 'Intermediate',
      yearsOfExperience: 1.5,
      lastUsed: '2024-01-15',
      howLearned: 'Official handbook, refactoring existing projects',
      relatedProjects: ['Task Manager', 'Portfolio Website'],
      certifications: [],
      trending: true,
      inDemand: true
    },
    {
      id: 8,
      name: 'System Design',
      category: 'Architecture',
      proficiency: 45,
      level: 'Beginner',
      yearsOfExperience: 0.5,
      lastUsed: '2024-01-13',
      howLearned: 'Books, online courses, mock interviews',
      relatedProjects: ['Microservices Demo'],
      certifications: [],
      trending: true,
      inDemand: true
    }
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Programming Language', 'Database', 'DevOps', 'Cloud', 'Architecture'];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const skillLevels = {
    'Beginner': { count: skills.filter(s => s.level === 'Beginner').length, color: 'text-red-400' },
    'Intermediate': { count: skills.filter(s => s.level === 'Intermediate').length, color: 'text-yellow-400' },
    'Advanced': { count: skills.filter(s => s.level === 'Advanced').length, color: 'text-green-400' },
    'Expert': { count: skills.filter(s => s.level === 'Expert').length, color: 'text-purple-400' }
  };

  const averageProficiency = Math.round(skills.reduce((sum, skill) => sum + skill.proficiency, 0) / skills.length);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 80) return 'bg-green-500';
    if (proficiency >= 60) return 'bg-yellow-500';
    if (proficiency >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-purple-600';
      case 'Advanced': return 'bg-green-600';
      case 'Intermediate': return 'bg-yellow-600';
      case 'Beginner': return 'bg-red-600';
      default: return 'bg-slate-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Tech Genome 🧬
          </h1>
          <p className="text-slate-400">
            Your complete technology skill map and proficiency tracker
          </p>
        </div>
        <Dialog open={isAddingSkill} onOpenChange={setIsAddingSkill}>
          <DialogTrigger asChild>
            <Button className="mt-4 lg:mt-0 bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Skill
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
              <DialogDescription className="text-slate-400">
                Add a new technology or skill to your genome.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="skillName">Skill Name</Label>
                  <Input id="skillName" placeholder="React.js" className="bg-slate-700 border-slate-600" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="proficiency">Proficiency Level (0-100)</Label>
                <div className="mt-2">
                  <Slider defaultValue={[50]} max={100} step={5} className="w-full" />
                </div>
              </div>
              <div>
                <Label htmlFor="howLearned">How You Learned It</Label>
                <Textarea id="howLearned" placeholder="Courses, projects, documentation..." className="bg-slate-700 border-slate-600" rows={2} />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddingSkill(false)}>Cancel</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Add Skill</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Skills</p>
                <p className="text-2xl font-bold text-white">{skills.length}</p>
              </div>
              <Brain className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Avg Proficiency</p>
                <p className="text-2xl font-bold text-white">{averageProficiency}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Advanced Skills</p>
                <p className="text-2xl font-bold text-white">{skillLevels.Advanced.count}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Certifications</p>
                <p className="text-2xl font-bold text-white">{skills.filter(s => s.certifications.length > 0).length}</p>
              </div>
              <Award className="w-8 h-8 text-purple-500" />
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
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-slate-700 border-slate-600">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <Card key={skill.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      {skill.name}
                      {skill.trending && (
                        <Badge variant="outline" className="ml-2 text-green-400 border-green-400 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-purple-400 border-purple-400 text-xs">
                        {skill.category}
                      </Badge>
                      <Badge className={`${getLevelBadgeColor(skill.level)} text-white text-xs`}>
                        {skill.level}
                      </Badge>
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
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Proficiency</span>
                    <span className="text-sm font-medium text-white">{skill.proficiency}%</span>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    className="h-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Experience</p>
                    <p className="text-white">{skill.yearsOfExperience} years</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Last Used</p>
                    <p className="text-white">{skill.lastUsed}</p>
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-2">How You Learned:</p>
                  <p className="text-slate-300 text-sm">{skill.howLearned}</p>
                </div>

                {skill.relatedProjects.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Related Projects:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.relatedProjects.map((project, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          <Code className="w-3 h-3 mr-1" />
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {skill.certifications.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-yellow-400 border-yellow-400 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {skill.inDemand && (
                  <div className="flex items-center text-green-400 text-sm">
                    <Star className="w-4 h-4 mr-2" />
                    High demand in job market
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <Brain className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No skills found</h3>
            <p className="text-slate-500 mb-4">Start building your tech genome by adding your first skill.</p>
            <Button onClick={() => setIsAddingSkill(true)} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Skill
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Skill Level Distribution */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Skill Level Distribution</CardTitle>
          <CardDescription className="text-slate-400">
            Overview of your proficiency across different skill levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skillLevels).map(([level, data]) => (
              <div key={level} className="text-center">
                <div className={`text-2xl font-bold ${data.color} mb-1`}>
                  {data.count}
                </div>
                <div className="text-slate-400 text-sm">{level}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechGenome;

