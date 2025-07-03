import React, { useState } from 'react';
import { 
  Plus, 
  ExternalLink, 
  Github, 
  Star, 
  Eye, 
  Code, 
  Calendar,
  Tag,
  Search,
  Filter,
  Play,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const ProjectShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingProject, setIsAddingProject] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      category: 'Full Stack',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      image: '/api/placeholder/400/250',
      status: 'completed',
      startDate: '2024-01-01',
      endDate: '2024-01-30',
      achievements: ['Payment Integration', 'Real-time Features', 'Admin Dashboard'],
      whatItProves: 'Full-stack development skills, payment processing, real-time communication',
      stars: 24,
      views: 156,
      isTeamProject: false
    },
    {
      id: 2,
      title: 'AI-Powered Task Manager',
      description: 'Smart task management app with AI-powered priority suggestions and natural language processing for task creation.',
      category: 'AI/ML',
      techStack: ['Python', 'FastAPI', 'React', 'OpenAI API', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/ai-task-manager',
      liveUrl: 'https://ai-tasks.herokuapp.com',
      image: '/api/placeholder/400/250',
      status: 'completed',
      startDate: '2023-12-01',
      endDate: '2023-12-20',
      achievements: ['AI Integration', 'NLP Processing', 'Smart Recommendations'],
      whatItProves: 'AI/ML integration, API development, modern frontend',
      stars: 18,
      views: 89,
      isTeamProject: false
    },
    {
      id: 3,
      title: 'Microservices Architecture Demo',
      description: 'Demonstration of microservices architecture with Docker, Kubernetes, and service mesh implementation.',
      category: 'DevOps',
      techStack: ['Docker', 'Kubernetes', 'Go', 'gRPC', 'Istio', 'Prometheus'],
      githubUrl: 'https://github.com/username/microservices-demo',
      liveUrl: null,
      image: '/api/placeholder/400/250',
      status: 'in-progress',
      startDate: '2024-01-15',
      endDate: null,
      achievements: ['Container Orchestration', 'Service Mesh', 'Monitoring'],
      whatItProves: 'DevOps skills, microservices architecture, cloud-native development',
      stars: 12,
      views: 67,
      isTeamProject: true
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with rooms, file sharing, and video calling capabilities.',
      category: 'Backend',
      techStack: ['Node.js', 'Socket.io', 'Redis', 'WebRTC', 'AWS S3'],
      githubUrl: 'https://github.com/username/realtime-chat',
      liveUrl: 'https://chat-app-demo.netlify.app',
      image: '/api/placeholder/400/250',
      status: 'completed',
      startDate: '2023-11-01',
      endDate: '2023-11-25',
      achievements: ['Real-time Communication', 'File Upload', 'Video Calling'],
      whatItProves: 'Real-time systems, WebRTC, scalable backend architecture',
      stars: 31,
      views: 203,
      isTeamProject: false
    }
  ];

  const categories = ['all', 'Full Stack', 'Frontend', 'Backend', 'AI/ML', 'DevOps', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Project Showcase 🚀
          </h1>
          <p className="text-slate-400">
            Showcase your projects and demonstrate your technical skills
          </p>
        </div>
        <Dialog open={isAddingProject} onOpenChange={setIsAddingProject}>
          <DialogTrigger asChild>
            <Button className="mt-4 lg:mt-0 bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription className="text-slate-400">
                Showcase your latest project with details and achievements.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              <div>
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" placeholder="My Awesome Project" className="bg-slate-700 border-slate-600" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of your project..." className="bg-slate-700 border-slate-600" rows={3} />
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
              <div>
                <Label htmlFor="techStack">Tech Stack (comma separated)</Label>
                <Input id="techStack" placeholder="React, Node.js, MongoDB" className="bg-slate-700 border-slate-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="githubUrl">GitHub URL</Label>
                  <Input id="githubUrl" placeholder="https://github.com/..." className="bg-slate-700 border-slate-600" />
                </div>
                <div>
                  <Label htmlFor="liveUrl">Live Demo URL</Label>
                  <Input id="liveUrl" placeholder="https://..." className="bg-slate-700 border-slate-600" />
                </div>
              </div>
              <div>
                <Label htmlFor="whatItProves">What This Project Proves</Label>
                <Textarea id="whatItProves" placeholder="Skills and concepts demonstrated..." className="bg-slate-700 border-slate-600" rows={2} />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddingProject(false)}>Cancel</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Add Project</Button>
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
                <p className="text-slate-400 text-sm">Total Projects</p>
                <p className="text-2xl font-bold text-white">{totalProjects}</p>
              </div>
              <Code className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Completed</p>
                <p className="text-2xl font-bold text-white">{completedProjects}</p>
              </div>
              <Award className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Stars</p>
                <p className="text-2xl font-bold text-white">{totalStars}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
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
                  placeholder="Search projects, technologies..."
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors overflow-hidden">
            <div className="aspect-video bg-slate-700 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-slate-400" />
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant={project.status === 'completed' ? 'default' : 'secondary'} className={project.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'}>
                  {project.status}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                {project.isTeamProject && (
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    <Users className="w-3 h-3 mr-1" />
                    Team
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.views}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-slate-400 text-xs mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 text-xs mb-2">Key Achievements:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.achievements.slice(0, 3).map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-green-400 border-green-400 text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 text-xs mb-1">What it proves:</p>
                  <p className="text-slate-300 text-xs">{project.whatItProves}</p>
                </div>

                <div className="flex items-center text-slate-400 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.startDate} - {project.endDate || 'In Progress'}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Play className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <Code className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-500 mb-4">Start building your portfolio by adding your first project.</p>
            <Button onClick={() => setIsAddingProject(true)} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProjectShowcase;

