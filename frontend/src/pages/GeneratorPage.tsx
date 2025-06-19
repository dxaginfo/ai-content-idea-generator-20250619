import React, { useState } from 'react';

interface IdeaType {
  id: string;
  title: string;
  description: string;
  type: string;
  keywords: string[];
}

const GeneratorPage: React.FC = () => {
  const [contentType, setContentType] = useState<string>('blog');
  const [niche, setNiche] = useState<string>('');
  const [tone, setTone] = useState<string>('informative');
  const [loading, setLoading] = useState<boolean>(false);
  const [ideas, setIdeas] = useState<IdeaType[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // This would normally be an API call
    // For demo purposes, we'll simulate a response
    setTimeout(() => {
      const mockIdeas: IdeaType[] = [
        {
          id: '1',
          title: '10 Ways AI is Transforming Content Creation in 2025',
          description: 'Explore the latest AI tools and techniques that are revolutionizing how content creators work.',
          type: 'blog',
          keywords: ['AI', 'content creation', 'machine learning', 'productivity'],
        },
        {
          id: '2',
          title: 'The Ultimate Guide to SEO-Optimized Content',
          description: 'Learn how to create content that ranks well in search engines while engaging your audience.',
          type: 'blog',
          keywords: ['SEO', 'content marketing', 'search ranking', 'optimization'],
        },
        {
          id: '3',
          title: 'How to Build a Loyal Audience Through Consistent Content',
          description: 'Strategies for developing a content calendar and style that keeps your audience coming back.',
          type: 'blog',
          keywords: ['audience building', 'consistency', 'content strategy', 'engagement'],
        },
      ];
      
      setIdeas(mockIdeas);
      setLoading(false);
    }, 1500);
  };

  const handleSaveIdea = (idea: IdeaType) => {
    // This would save to your backend in a real app
    alert(`Idea "${idea.title}" saved!`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Generate Content Ideas</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Content Type</label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${contentType === 'blog' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setContentType('blog')}
              >
                Blog Post
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${contentType === 'video' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setContentType('video')}
              >
                Video
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${contentType === 'social' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setContentType('social')}
              >
                Social Media
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="niche" className="block text-gray-700 font-semibold mb-2">Your Niche or Topic</label>
            <input
              type="text"
              id="niche"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Digital Marketing, Fitness, Technology"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="tone" className="block text-gray-700 font-semibold mb-2">Content Tone</label>
            <select
              id="tone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="informative">Informative</option>
              <option value="conversational">Conversational</option>
              <option value="professional">Professional</option>
              <option value="entertaining">Entertaining</option>
              <option value="inspirational">Inspirational</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Ideas...
              </>
            ) : 'Generate Ideas'}
          </button>
        </form>
      </div>
      
      {ideas.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Generated Ideas</h2>
          
          <div className="space-y-4">
            {ideas.map((idea) => (
              <div key={idea.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                <p className="text-gray-600 mb-4">{idea.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.keywords.map((keyword, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={() => handleSaveIdea(idea)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Save Idea
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
