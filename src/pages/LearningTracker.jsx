import React, { useState } from 'react';
import {
  Plus,
  Clock,
  BookOpen,
  Tag,
  Calendar,
  Search,
  Filter,
  CheckCircle,
  Circle,
  Hourglass
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import LearningLogCard from '../components/LearningLogCard'; // Import the new component

const LearningTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  // State for the new form fields
  const [newEntry, setNewEntry] = useState({
    topic: '',
    domain: '',
    resourceName: '',
    resourceUrl: '',
    takeaways: '',
    status: 'Completed',
    tags: '',
    duration: 0
  });

  // Dummy data for learning entries
  const learningEntries = [
    {
      topic: 'React Hooks Deep Dive',
      domain: 'Frontend Development',
      resource: {
        name: 'React Official Documentation',
        url: 'https://react.dev/reference/react'
      },
      timestamp: '2025-06-30T20:42:00Z',
      status: 'Completed',
      tags: ['React', 'Hooks', 'Performance']
    },
    {
      topic: 'System Design Fundamentals',
      domain: 'System Design',
      resource: {
        name: 'Grokking the System Design Interview',
        url: 'https://www.educative.io/courses/grokking-the-system-design-interview'
      },
      timestamp: '2025-06-29T18:15:00Z',
      status: 'In Progress',
      tags: ['System Design', 'Scalability', 'Architecture']
    },
    {
      topic: 'Advanced SQL Techniques',
      domain: 'Backend Development',
      resource: {
        name: 'SQL for Data Science',
        url: 'https://www.coursera.org/learn/sql-for-data-science'
      },
      timestamp: '2025-06-28T14:00:00Z',
      status: 'Completed',
      tags: ['SQL', 'Databases', 'Performance']
    },
    {
      topic: 'CI/CD with GitHub Actions',
      domain: 'DevOps',
      resource: {
        name: 'GitHub Actions Documentation',
        url: 'https://docs.github.com/en/actions'
      },
      timestamp: '2025-06-27T11:30:00Z',
      status: 'Completed',
      tags: ['CI/CD', 'GitHub Actions', 'Automation']
    },
    {
      topic: 'Data Structures in Python',
      domain: 'Data Structures & Algorithms',
      resource: {
        name: 'LeetCode',
        url: 'https://leetcode.com/'
      },
      timestamp: '2025-06-26T09:00:00Z',
      status: 'In Progress',
      tags: ['DSA', 'Python', 'Problem Solving']
    },
    {
      topic: 'Kubernetes for Beginners',
      domain: 'Cloud Computing',
      resource: {
        name: 'Kubernetes Documentation',
        url: 'https://kubernetes.io/docs/home/'
      },
      timestamp: '2025-06-25T16:45:00Z',
      status: 'Planned',
      tags: ['Kubernetes', 'Cloud', 'Containers']
    }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEntry(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id, value) => {
    setNewEntry(prev => ({ ...prev, [id]: value }));
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend (Supabase)
    console.log('New Entry:', newEntry);
    setIsAddingEntry(false);
    // Reset form
    setNewEntry({
      topic: '',
      domain: '',
      resourceName: '',
      resourceUrl: '',
      takeaways: '',
      status: 'Completed',
      tags: '',
      duration: 0
    });
  };

  // Filter learning entries based on search term and domain
  const filteredEntries = learningEntries.filter(entry => {
    const searchTermMatch = entry.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const domainMatch = selectedDomain === 'all' || entry.domain === selectedDomain;
    return searchTermMatch && domainMatch;
  });

  const domains = [...new Set(learningEntries.map(entry => entry.domain))];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Learning Tracker</h2>
          <p className="text-slate-400 mt-1">Log and review your study sessions to track your progress.</p>
        </div>
        <Dialog open={isAddingEntry} onOpenChange={setIsAddingEntry}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Learning Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700 text-slate-200 p-6 max-w-2xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-purple-400">Add New Learning Entry</DialogTitle>
              <DialogDescription className="text-slate-400">Log what you studied, when, and what you learned.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddEntry} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-sm font-medium text-slate-300 mb-1 block">Topic</Label>
                  <Input id="topic" placeholder="e.g., React Hooks Deep Dive" value={newEntry.topic} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="domain" className="text-sm font-medium text-slate-300 mb-1 block">Domain</Label>
                  <Select onValueChange={(value) => handleSelectChange('domain', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select a domain" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                      {domains.map(domain => <SelectItem key={domain} value={domain}>{domain}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resourceName" className="text-sm font-medium text-slate-300 mb-1 block">Resource Name</Label>
                  <Input id="resourceName" placeholder="e.g., React Official Docs" value={newEntry.resourceName} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resourceUrl" className="text-sm font-medium text-slate-300 mb-1 block">Resource URL</Label>
                  <Input id="resourceUrl" placeholder="https://react.dev" value={newEntry.resourceUrl} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-sm font-medium text-slate-300 mb-1 block">Status</Label>
                  <Select onValueChange={(value) => handleSelectChange('status', value)} defaultValue="Completed">
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Planned">Planned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-sm font-medium text-slate-300 mb-1 block">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="e.g., 60" value={newEntry.duration} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="takeaways" className="text-sm font-medium text-slate-300 mb-1 block">Takeaways</Label>
                <Textarea id="takeaways" placeholder="What did you learn?" value={newEntry.takeaways} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-medium text-slate-300 mb-1 block">Tags (comma-separated)</Label>
                <Input id="tags" placeholder="e.g., React, Hooks, Performance" value={newEntry.tags} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsAddingEntry(false)} className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600">Cancel</Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Add Entry</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800 border-slate-700 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by topic, domain, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <Select onValueChange={setSelectedDomain} defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px] bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500">
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                <SelectItem value="all">All Domains</SelectItem>
                {domains.map(domain => <SelectItem key={domain} value={domain}>{domain}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Learning Entries Grid */}
      {filteredEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry, index) => (
            <LearningLogCard key={index} {...entry} />
          ))}
        </div>
      ) : (
        <Card className="bg-slate-800 border-slate-700 p-6 text-center">
          <CardContent>
            <h3 className="text-lg font-medium text-slate-300 mb-2">No learning entries found</h3>
            <p className="text-slate-500 mb-4">Start tracking your learning journey by adding your first entry.</p>
            <Button onClick={() => setIsAddingEntry(true)} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Entry
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LearningTracker;


