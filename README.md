# AI Content Idea Generator

A web application that generates blog post, video, and social media content ideas using AI technology. This platform helps content creators, marketers, and social media managers quickly generate creative ideas based on trends, keywords, and audience interests.

## 🚀 Features

- **Idea Generation**: Create content ideas for blogs, videos, and social media
- **Trend Analysis**: Discover trending topics in your niche
- **Keyword Optimization**: Get keyword suggestions to improve content visibility
- **Content Calendar**: Plan and schedule your content efficiently
- **User Profiles**: Save preferences and favorite ideas
- **Analytics Dashboard**: Track content performance and engagement

## 💻 Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS with daisyUI components
- Redux Toolkit for state management
- Axios for API communication

### Backend
- Node.js with Express
- MongoDB for database
- JWT authentication
- OpenAI API integration

### DevOps
- GitHub Actions for CI/CD
- Vercel for frontend deployment
- Render/Railway for backend hosting
- MongoDB Atlas for cloud database

## 🌟 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas connection)
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/ai-content-idea-generator-20250619.git
cd ai-content-idea-generator-20250619
```

2. Install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
```bash
# In backend directory, create a .env file
cp .env.example .env
# Edit .env with your values
```

4. Start development servers
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm start
```

## 📋 Project Structure

```
ai-content-idea-generator/
├── frontend/                  # React frontend application
│   ├── public/                # Static files
│   ├── src/                   # Source files
│   │   ├── components/        # UI components
│   │   ├── pages/             # Page components
│   │   ├── redux/             # Redux state management
│   │   ├── services/          # API services
│   │   ├── utils/             # Utility functions
│   │   ├── App.tsx            # Main App component
│   │   └── index.tsx          # Entry point
│   └── package.json           # Frontend dependencies
│
├── backend/                   # Node.js backend application
│   ├── src/                   # Source files
│   │   ├── controllers/       # API controllers
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic services
│   │   ├── utils/             # Utility functions
│   │   └── index.js           # Entry point
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dxaginfo/ai-content-idea-generator-20250619/issues) for open issues or create a new one.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [OpenAI](https://openai.com/) for providing the AI technology
- [React](https://reactjs.org/) for the frontend framework
- [Express](https://expressjs.com/) for the backend framework
- [MongoDB](https://www.mongodb.com/) for the database
- [Tailwind CSS](https://tailwindcss.com/) for styling