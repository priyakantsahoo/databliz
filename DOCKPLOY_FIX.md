# Dockploy Deployment Fix Guide 🔧

## Issue: Docker Compose Parse Error

The error indicates that Dockploy is trying to parse `docker-compose.yml` as a Dockerfile.

## Solution Options:

### Option 1: Use Dockerfile Only (Recommended for Dockploy)

In your Dockploy dashboard:

1. **Application Type**: Select **"Dockerfile"** (NOT Docker Compose)
2. **Dockerfile Path**: Leave empty or set to `Dockerfile`
3. **Build Context**: `.` (root directory)
4. **Port**: `80`

### Option 2: Use Docker Compose Mode

If Dockploy supports Docker Compose:

1. **Application Type**: Select **"Docker Compose"** 
2. **Compose File**: `docker-compose.yml`
3. **Service Name**: `datablize-web`

### Option 3: Rename Files (If Needed)

If Dockploy is confused by file names:

```bash
# Rename docker-compose.yml temporarily
mv docker-compose.yml docker-compose.yml.backup

# Or specify exact file in Dockploy settings
```

## Quick Fix Steps:

### 1. In Dockploy Dashboard:

**Delete current application and create new with these settings:**

```yaml
Application Name: datablize-web
Source: GitHub
Repository: https://github.com/priyakantsahoo/databliz.git
Branch: main
Build Type: Dockerfile
Dockerfile Path: ./Dockerfile
Port: 80
```

### 2. Environment Variables:

```bash
NODE_ENV=production
```

### 3. Advanced Settings:

- **Build Context**: `.`
- **Platform**: `linux/amd64`
- **No Cache**: Optional (check if build fails)

## Alternative: Simplify Dockerfile

If issues persist, use this simplified Dockerfile:

```dockerfile
# Simple single-stage build
FROM node:18-alpine

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

# Expose port
EXPOSE 80

# Start the application
CMD ["serve", "-s", "dist", "-l", "80"]
```

## Verification Commands:

```bash
# Test locally first
docker build -t datablize-test .
docker run -p 3000:80 datablize-test

# Check if accessible
curl http://localhost:3000
```

## Common Dockploy Settings:

### For Static React Apps:

- **Build Command**: `npm run build` (if not in Dockerfile)
- **Start Command**: Not needed (handled by Dockerfile)
- **Health Check Path**: `/`
- **Environment**: `NODE_ENV=production`

## Troubleshooting:

### If "Unknown instruction" error persists:

1. Check Dockploy is using the correct file
2. Ensure no syntax errors in Dockerfile
3. Verify file encoding (should be UTF-8)
4. Check for hidden characters

### To verify files:

```bash
# Check file type
file Dockerfile
file docker-compose.yml

# Check for hidden characters
cat -A Dockerfile | head -5
```

## Contact Dockploy Support:

If the issue persists, contact Dockploy support with:
- Error message screenshot
- Your deployment settings
- Confirmation that local Docker build works

---

**Quick Solution**: Use **Dockerfile mode** in Dockploy, not Docker Compose mode.