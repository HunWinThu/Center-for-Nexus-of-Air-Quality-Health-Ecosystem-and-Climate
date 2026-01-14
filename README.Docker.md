# Docker Setup Guide

## Prerequisites
- Docker Desktop installed on Windows
- Git (to clone the repository)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/HunWinThu/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate.git
cd Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate
```

### 2. Running Development Server

Start the development server with hot-reload:
```bash
docker-compose up dev
```

The application will be available at: `http://localhost:5173`

### 3. Running Production Build

Build and serve the production version:
```bash
docker-compose up prod
```

The application will be available at: `http://localhost:8080`

## Common Commands

### Build images
```bash
docker-compose build
```

### Run in detached mode (background)
```bash
docker-compose up -d dev
```

### Stop containers
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f dev
```

### Rebuild from scratch
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up dev
```

## Troubleshooting

### Port already in use
If port 5173 or 8080 is already in use, modify the ports in `docker-compose.yml`:
```yaml
ports:
  - "3000:5173"  # Change 3000 to any available port
```

### File changes not reflecting (Windows)
The `CHOKIDAR_USEPOLLING=true` environment variable is already set for Windows compatibility.

### Permission issues on Windows
Make sure Docker Desktop has access to your drive in Docker Settings > Resources > File Sharing

### Clear everything and start fresh
```bash
docker-compose down -v
docker system prune -a
docker-compose up --build dev
```

## Environment Variables

Create a `.env` file in the root directory if you need to configure environment variables:
```env
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Notes

- The development server uses volumes to mount your local code, so changes will be reflected immediately
- Node modules are stored in a Docker volume to improve performance on Windows
- The production build uses nginx to serve static files for better performance
