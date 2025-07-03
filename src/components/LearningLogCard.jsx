import React from 'react';
import { format } from 'date-fns';
import { ExternalLink, Clock, BookOpen, Tag } from 'lucide-react';

const LearningLogCard = ({
  topic,
  domain,
  resource,
  timestamp,
  status,
  tags = []
}) => {
  // Format timestamp using date-fns
  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return format(date, "MMMM d, yyyy – h:mm a");
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Get status badge styling
  const getStatusBadgeStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
    }
  };

  // Extract resource name and URL
  const getResourceInfo = (resource) => {
    if (typeof resource === 'string') {
      return { name: resource, url: null };
    }
    if (typeof resource === 'object' && resource !== null) {
      return {
        name: resource.name || resource.title || 'Resource',
        url: resource.url || resource.link || null
      };
    }
    return { name: 'Resource', url: null };
  };

  const resourceInfo = getResourceInfo(resource);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {topic}
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800">
              {domain}
            </span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeStyle(status)}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
        <Clock className="w-4 h-4 mr-2" />
        <span>{formatTimestamp(timestamp)}</span>
      </div>

      {/* Resource */}
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <BookOpen className="w-4 h-4 mr-2" />
        {resourceInfo.url ? (
          <a
            href={resourceInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center transition-colors"
          >
            {resourceInfo.name}
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        ) : (
          <span>{resourceInfo.name}</span>
        )}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex items-start space-x-1">
          <Tag className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningLogCard;
