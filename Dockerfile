# Multi-stage build for React/TypeScript/Vite portfolio
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for TypeScript)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with simple HTTP server
FROM node:18-alpine AS production

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/dist .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["serve", "-s", ".", "-l", "3000"]
