# AI/ML Engineer Portfolio

A modern, minimalist portfolio website showcasing AI/ML engineering skills with interactive 3D animations and a clean grayscale design.

## 🚀 Quick Start

### Option 1: Docker (Recommended)
```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

### Option 2: Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Option 3: Node.js Production Server
```bash
# Install dependencies (including Express)
npm install

# Build and start the production server
npm start

# Or build and serve separately
npm run build
npm run serve
```

Your portfolio will be available at: http://localhost:3000

## 🐳 Docker Deployment

### Using Docker Compose (Easiest)
```bash
docker-compose up --build
```
Your portfolio will be available at: http://localhost:3000

### Using Docker Only
```bash
# Build the image
docker build -t ai-ml-portfolio .

# Run the container
docker run -p 3000:80 ai-ml-portfolio
```

### Production Deployment
```bash
# Build for production
docker build -t ai-ml-portfolio .

# Run in production mode
docker run -d -p 80:80 --name portfolio-container ai-ml-portfolio
```

## 🎨 Features

- **Minimalist Design**: Clean grayscale aesthetic with floating sphere profile
- **Interactive Animations**: 3D hover effects using Framer Motion
- **Responsive Layout**: Perfect on all devices
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Vite
- **Professional Sections**: Hero, About, Projects, Skills, Achievements, Contact
- **Social Integration**: GitHub, LinkedIn, Instagram links

## 🛠 Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Docker + Nginx
- **Icons**: Lucide React

## 📱 Sections

1. **Hero**: Interactive floating sphere with contact information
2. **About**: Professional introduction and background
3. **Projects**: Showcase of 7 AI/ML projects with descriptions
4. **Skills**: Technical and soft skills with animated cards
5. **Achievements**: Awards, competitions, and participations
6. **Contact**: Contact form and social media links

## 🌐 Live Demo

- **Local**: http://localhost:3000
- **Docker**: http://localhost:3000

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Shankar M Darur**
- AI/ML Engineer & Innovator
- Email: shankardarur0@gmail.com
- Phone: +91 9321526724
