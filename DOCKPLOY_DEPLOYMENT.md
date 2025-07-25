# Datablize Dockploy Deployment Guide 🚀

This guide provides detailed instructions for deploying the Datablize React application on Dockploy.

## 📋 Prerequisites

- **Dockploy Account**: Access to a Dockploy instance
- **GitHub Repository**: Your code should be pushed to GitHub (https://github.com/priyakantsahoo/databliz.git)
- **Domain**: A domain name for your application (optional but recommended)

## 🛠️ Deployment Files Overview

The following files have been created for deployment:

- `Dockerfile` - Multi-stage Docker build for production
- `docker-compose.yml` - Container orchestration configuration  
- `nginx.conf` - Nginx web server configuration
- `.dockerignore` - Files to exclude from Docker build

## 📚 Step-by-Step Deployment Instructions

### Step 1: Access Dockploy Dashboard

1. Login to your Dockploy instance
2. Navigate to the main dashboard
3. Click on **"Create Application"** or **"New Project"**

### Step 2: Create New Application

1. **Application Name**: `datablize-web`
2. **Application Type**: Select **"Docker Compose"**
3. **Repository URL**: `https://github.com/priyakantsahoo/databliz.git`
4. **Branch**: `main`
5. **Build Path**: Leave empty (root directory)

### Step 3: Configure Build Settings

#### **Docker Configuration**
- **Dockerfile Path**: `Dockerfile` (in root directory)
- **Docker Compose File**: `docker-compose.yml`
- **Build Context**: `.` (current directory)

#### **Port Configuration**
- **Container Port**: `80`
- **External Port**: `80` (or your preferred port)
- **Protocol**: `HTTP`

### Step 4: Environment Variables (Optional)

Since this is a static React app, no environment variables are strictly required. However, you can add:

```bash
NODE_ENV=production
VITE_APP_NAME=Datablize
```

### Step 5: Domain Configuration

#### **If you have a custom domain:**
1. **Domain**: `your-domain.com` (e.g., `datablize.com`)
2. **SSL Certificate**: Enable automatic SSL (Let's Encrypt)
3. **Force HTTPS**: Enable for security

#### **If using Dockploy subdomain:**
1. Use the provided subdomain: `your-app.dockploy-instance.com`

### Step 6: Advanced Settings

#### **Resource Limits**
- **Memory Limit**: `128MB` (adequate for static site)
- **CPU Limit**: `0.5` cores
- **Restart Policy**: `unless-stopped`

#### **Health Check**
The docker-compose.yml includes a health check that pings the application every 30 seconds.

### Step 7: Deploy Application

1. Click **"Create Application"**
2. Dockploy will automatically:
   - Clone your repository
   - Build the Docker image
   - Start the container
   - Configure networking

3. Monitor the build logs for any errors

### Step 8: Verify Deployment

1. **Check Application Status**: Should show "Running" in green
2. **Access Application**: Click on the provided URL or your custom domain
3. **Test Functionality**: 
   - Navigate through different pages (Features, Security, Pricing, Use Cases)
   - Test contact forms (should open email client with sales@datablize.com)
   - Verify mobile responsiveness

## 🔧 Troubleshooting

### Common Issues and Solutions

#### **Build Failures**

**Issue**: Docker build fails
```bash
Solution:
1. Check Dockerfile syntax
2. Ensure all dependencies are in package.json
3. Verify build command works locally: npm run build
```

**Issue**: Out of memory during build
```bash
Solution:
1. Increase memory limit in Dockploy settings
2. Use multi-stage build (already configured)
3. Clear npm cache: RUN npm cache clean --force
```

#### **Runtime Issues**

**Issue**: Application not accessible
```bash
Solution:
1. Check container logs in Dockploy dashboard
2. Verify port 80 is exposed correctly
3. Check nginx configuration
```

**Issue**: Routing not working (404 on refresh)
```bash
Solution:
1. Nginx configuration includes try_files for SPA routing
2. Verify nginx.conf is copied correctly
3. Check that index.html exists in build output
```

#### **Performance Issues**

**Issue**: Slow loading times
```bash
Solution:
1. Enable gzip compression (already configured)
2. Set up CDN for static assets
3. Optimize images and bundle size
```

## 📊 Monitoring and Maintenance

### Health Monitoring
- Application health is checked every 30 seconds
- Automatic restart on failure
- View logs in Dockploy dashboard

### Updates and Redeployment
1. Push changes to GitHub repository
2. In Dockploy dashboard, click **"Redeploy"**
3. Monitor build logs
4. Verify update is live

### Scaling (If Needed)
1. Navigate to application settings
2. Increase replica count
3. Configure load balancing
4. Monitor resource usage

## 🛡️ Security Considerations

### HTTPS Configuration
- Always use SSL/TLS in production
- Enable HSTS headers (configured in nginx.conf)
- Use secure headers (already included)

### Domain Security
- Configure proper DNS settings
- Use strong SSL certificates
- Enable DDoS protection if available

## 📈 Performance Optimization

### Static Asset Optimization
- Assets are cached for 1 year
- Gzip compression enabled
- Optimized nginx configuration

### Monitoring Recommendations
- Set up uptime monitoring
- Monitor response times
- Track error rates
- Set up alerts for downtime

## 🔄 CI/CD Integration (Optional)

To set up automatic deployments:

1. **GitHub Actions** (if available):
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to Dockploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Deploy to Dockploy
           run: |
             curl -X POST "https://your-dockploy-instance.com/webhook/deploy"
   ```

2. **Webhook Integration**:
   - Configure Dockploy webhook
   - Set up automatic deployment on push

## 📋 Pre-Deployment Checklist

- [ ] Repository is public and accessible
- [ ] All dependencies are in package.json
- [ ] Build command works locally (`npm run build`)
- [ ] Docker files are in repository root
- [ ] Domain DNS is configured (if using custom domain)
- [ ] SSL certificate is ready
- [ ] Contact email (sales@datablize.com) is configured
- [ ] All pages are accessible
- [ ] Mobile responsiveness is tested

## 🆘 Support and Resources

### Dockploy Documentation
- [Dockploy Official Docs](https://dockploy.com/docs)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Nginx Configuration Guide](https://nginx.org/en/docs/)

### Contact Information
- **Technical Issues**: Check Dockploy community/support
- **Application Issues**: Contact development team
- **Sales Inquiries**: sales@datablize.com

---

## 🎉 Deployment Summary

Once deployed successfully, your Datablize application will be:

✅ **Accessible via your domain**  
✅ **Served over HTTPS**  
✅ **Optimized for performance**  
✅ **Monitored for health**  
✅ **Ready for production traffic**  

Your application will showcase:
- AI-powered document management features
- Enterprise security solutions
- Professional contact integration
- Responsive design across all devices

**Deployment Time**: Typically 5-10 minutes  
**Downtime**: Zero (blue-green deployment)  
**Rollback**: Available through Dockploy dashboard

---

🤖 *Generated with [Claude Code](https://claude.ai/code)*