import React from 'react';
import { Network, Upload, Eye, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const SystemDesignRoom = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          System Design Room 🏗️
        </h1>
        <p className="text-slate-400">
          Upload and visualize your system architecture diagrams
        </p>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-12 text-center">
          <Network className="w-16 h-16 text-slate-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-300 mb-2">System Design Room</h3>
          <p className="text-slate-500 mb-4">Upload your architecture diagrams and explain your design decisions.</p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Diagram
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemDesignRoom;

