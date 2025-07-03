# Mission50LPA.dev - Frontend

A beautiful, student-focused personal learning platform for CS/IT engineering students tracking their journey to ₹50 LPA+ software engineer roles.

## 🚀 Features

### Core Features
- **Dashboard**: Overview of your learning progress with key metrics and recent activities
- **Learning Tracker**: Log study sessions with timestamps, resources, and takeaways
- **Project Showcase**: Display your projects with tech stacks and achievements
- **Tech Genome**: Visualize your skills and proficiency levels
- **Achievements Vault**: Store certifications, awards, and recognitions
- **Roadmap Timeline**: Structured learning path from fundamentals to interviews
- **System Design Room**: Upload and explain architecture diagrams
- **Social Leaderboard**: Compete with friends on study hours and streaks
- **Friend Connections**: Connect with fellow developers

### Design Features
- **Dark Theme**: Professional dark theme optimized for developers
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Student-Focused**: Designed specifically for CS/IT engineering students

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.0 with Vite
- **Styling**: Tailwind CSS 4.1.7
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Theme**: next-themes for dark/light mode
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion

## 📁 Project Structure

```
mission50lpa-frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── Layout.jsx       # Main layout component
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── LearningTracker.jsx
│   │   ├── ProjectShowcase.jsx
│   │   ├── TechGenome.jsx
│   │   ├── AchievementsVault.jsx
│   │   ├── RoadmapTimeline.jsx
│   │   ├── SystemDesignRoom.jsx
│   │   ├── SocialLeaderboard.jsx
│   │   └── FriendConnections.jsx
│   ├── App.jsx              # Main app component
│   ├── App.css              # Custom styles
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files
   cd mission50lpa-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Colors and Branding
The app uses a purple-pink gradient theme. To customize:

1. **Update the gradient in App.jsx**:
   ```jsx
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
   ```

2. **Modify button colors throughout components**:
   ```jsx
   <Button className="bg-purple-600 hover:bg-purple-700">
   ```

3. **Update the logo and branding in Layout.jsx**:
   ```jsx
   <h1 className="text-lg font-bold text-white">Mission50LPA</h1>
   ```

### Adding New Features
1. Create new page components in `src/pages/`
2. Add routes in `src/App.jsx`
3. Update navigation in `src/components/Layout.jsx`

## 📱 Responsive Design

The application is fully responsive with:
- **Desktop**: Full sidebar navigation and multi-column layouts
- **Tablet**: Collapsible sidebar with optimized grid layouts
- **Mobile**: Hidden sidebar with hamburger menu and single-column layouts

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Dashboard
- Study hours tracking
- Current streak display
- Skill progress overview
- Recent activity feed
- Quick action buttons

### Learning Tracker
- Timestamp-based logging
- Resource linking
- Tag-based organization
- Progress tracking
- Search and filtering

### Project Showcase
- Grid layout with project cards
- Tech stack visualization
- GitHub and demo links
- Achievement badges
- Category filtering

### Tech Genome
- Skill proficiency visualization
- Progress bars and levels
- Learning source tracking
- Related projects linking
- Certification display

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🎓 For Students

This platform is specifically designed for CS/IT engineering students. Key benefits:

- **Track Learning Progress**: Log every study session with detailed takeaways
- **Showcase Skills**: Build a comprehensive portfolio of projects and skills
- **Stay Motivated**: Use streaks, achievements, and social features
- **Prepare for Interviews**: Structured roadmap and system design practice
- **Connect with Peers**: Learn together with friend connections and leaderboards

## 🔮 Future Enhancements

- **Backend Integration**: Connect with Supabase or Firebase
- **Real-time Features**: Live updates and notifications
- **Chrome Extension**: Tab usage monitoring and productivity tracking
- **AI Features**: Smart recommendations and progress insights
- **Mobile App**: React Native version for mobile devices

---

**Happy Learning! 🚀**

*Built with ❤️ for engineering students pursuing their ₹50 LPA+ dreams*

