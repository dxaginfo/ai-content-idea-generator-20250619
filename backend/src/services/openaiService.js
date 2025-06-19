// This is a mock service for demonstration purposes
// In a real application, this would integrate with the OpenAI API

exports.generateIdeas = async (contentType, niche, tone, count = 3) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock ideas based on input parameters
  const ideas = [];
  
  for (let i = 0; i < count; i++) {
    let title, description, keywords;
    
    if (contentType === 'blog') {
      if (niche.toLowerCase().includes('tech') || niche.toLowerCase().includes('technology')) {
        title = `${i+1}. ${getTechBlogTitle()}`;
        description = getTechBlogDescription();
        keywords = getTechKeywords();
      } else if (niche.toLowerCase().includes('health') || niche.toLowerCase().includes('fitness')) {
        title = `${i+1}. ${getHealthBlogTitle()}`;
        description = getHealthBlogDescription();
        keywords = getHealthKeywords();
      } else {
        title = `${i+1}. ${getGenericBlogTitle(niche)}`;
        description = getGenericBlogDescription(niche);
        keywords = getGenericKeywords(niche);
      }
    } else if (contentType === 'video') {
      title = `${i+1}. ${getVideoTitle(niche)}`;
      description = getVideoDescription(niche);
      keywords = getGenericKeywords(niche);
    } else { // social
      title = `${i+1}. ${getSocialMediaTitle(niche)}`;
      description = getSocialMediaDescription(niche);
      keywords = getGenericKeywords(niche);
    }
    
    ideas.push({
      id: `mock-idea-${Date.now()}-${i}`,
      title,
      description,
      type: contentType,
      keywords
    });
  }
  
  return ideas;
};

// Helper functions to generate mock content
function getTechBlogTitle() {
  const titles = [
    'How AI is Revolutionizing Content Creation in 2025',
    'The Future of Web Development: Trends to Watch',
    '10 Must-Have Tools for Remote Tech Teams',
    'Blockchain Beyond Cryptocurrency: Real-World Applications',
    'Machine Learning for Beginners: A Practical Guide'
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

function getTechBlogDescription() {
  const descriptions = [
    'Explore how artificial intelligence is transforming the way content creators work and how you can leverage these tools.',
    'An in-depth look at emerging technologies and methodologies shaping the future of web development.',
    'A comprehensive review of the most essential tools and software for distributed technology teams.',
    'Discover practical applications of blockchain technology beyond cryptocurrencies in various industries.',
    'A beginner-friendly introduction to machine learning concepts with practical examples.'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function getHealthBlogTitle() {
  const titles = [
    '5 Science-Backed Ways to Improve Your Mental Health',
    'The Ultimate Guide to High-Intensity Interval Training',
    'Nutrition Myths Debunked: What the Science Actually Says',
    'How to Build a Sustainable Fitness Routine You'll Actually Stick To',
    'The Connection Between Sleep and Weight Management'
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

function getHealthBlogDescription() {
  const descriptions = [
    'Evidence-based strategies to enhance your mental wellbeing and reduce stress in your daily life.',
    'Everything you need to know about HIIT workouts, including benefits, sample routines, and common mistakes.',
    'Separating fact from fiction in the world of nutrition with evidence-based information.',
    'Practical tips for creating a fitness routine that aligns with your lifestyle and goals for long-term success.',
    'Exploring the scientific connection between quality sleep and weight management, with actionable advice.'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function getGenericBlogTitle(niche) {
  return `The Ultimate Guide to ${capitalize(niche)}: Everything You Need to Know in 2025`;
}

function getGenericBlogDescription(niche) {
  return `A comprehensive overview of ${niche}, including the latest trends, best practices, and expert insights to help you succeed.`;
}

function getVideoTitle(niche) {
  const formats = ['Tutorial', 'Review', 'Comparison', 'Behind-the-Scenes', 'Day in the Life'];
  const format = formats[Math.floor(Math.random() * formats.length)];
  return `${format}: ${capitalize(niche)} Explained in 10 Minutes`;
}

function getVideoDescription(niche) {
  return `A visually engaging video that breaks down the essentials of ${niche} in an easy-to-understand format.`;
}

function getSocialMediaTitle(niche) {
  const platforms = ['Instagram', 'TikTok', 'Twitter', 'LinkedIn', 'Facebook'];
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  return `${platform} Series: Weekly ${capitalize(niche)} Tips and Insights`;
}

function getSocialMediaDescription(niche) {
  return `A series of bite-sized content pieces sharing valuable insights about ${niche} designed specifically for social media engagement.`;
}

function getTechKeywords() {
  const allKeywords = ['technology', 'innovation', 'digital', 'software', 'AI', 'machine learning', 'data', 'programming', 'automation', 'trends'];
  return getRandomSubset(allKeywords, 4);
}

function getHealthKeywords() {
  const allKeywords = ['health', 'wellness', 'fitness', 'nutrition', 'exercise', 'mindfulness', 'wellbeing', 'lifestyle', 'diet', 'training'];
  return getRandomSubset(allKeywords, 4);
}

function getGenericKeywords(niche) {
  return [niche, 'guide', 'tips', 'best practices', 'trends', 'insights'];
}

function getRandomSubset(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
