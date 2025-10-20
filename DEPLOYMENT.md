# ScholarRAG Helper - Deployment Guide

## 🚀 Live URLs

- **Production**: https://frontend-izujb4zoh-hosung-yous-projects.vercel.app
- **Repository**: https://github.com/HosungYou/ScholarRAG-helper
- **Main Project**: https://github.com/HosungYou/ScholarRAG

---

## ✅ Deployment Status

### Vercel Deployment
- ✅ **Status**: Successfully deployed
- ✅ **Build**: Production build completed
- ✅ **Environment Variables**: Configured in Vercel Dashboard
- ✅ **Domain**: Auto-generated Vercel domain active

### Features Deployed
1. ✅ **Homepage** - Feature overview and quick start
2. ✅ **Chatbot** (/chat) - Full-page AI assistant
3. ✅ **Floating Chat Widget** - Available on homepage
4. ✅ **Interactive Guide** (/guide) - 7-chapter navigation
5. ✅ **Resources Center** (/resources) - Download templates and docs
6. ✅ **API Routes** (/api/chat) - Claude 3.5 Sonnet integration

---

## 🔑 Environment Variables

### Required Variables (Set in Vercel Dashboard)
```bash
# Anthropic API
ANTHROPIC_API_KEY=sk-ant-... # ✅ Set

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://frontend-izujb4zoh-hosung-yous-projects.vercel.app # ✅ Set
```

### Optional Variables
```bash
# Vector Database (for future RAG enhancement)
VECTOR_DB_PATH=../chatbot/vector_db

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
```

---

## 📦 Build Configuration

### Next.js Configuration
```javascript
// next.config.mjs
{
  reactStrictMode: true,
  output: 'standalone', // Optimized for Vercel
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}
```

### Build Statistics
- **Build Time**: ~53 seconds
- **Bundle Size**:
  - Homepage: 108 KB
  - Chat Page: 109 KB
  - Guide Pages: 105 KB
  - API Route: 102 KB (serverless)
- **Routes**: 7 static pages + 1 dynamic API route

---

## 🔄 Deployment Process

### Automatic Deployment (Recommended)
Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
# Vercel automatically builds and deploys
```

### Manual Deployment
```bash
cd frontend
vercel --prod --yes
```

---

## 🧪 Testing

### Local Testing
```bash
cd frontend

# Development mode
npm run dev
# Visit http://localhost:3000

# Production build test
npm run build
npm start
# Visit http://localhost:3000
```

### Production Testing Checklist
- [ ] Homepage loads correctly
- [ ] Chatbot (/chat) responds to queries
- [ ] Floating chat widget opens and closes
- [ ] Guide pages navigate properly
- [ ] Resource links point to correct GitHub files
- [ ] API route returns Claude responses
- [ ] Mobile responsiveness works

---

## 🐛 Troubleshooting

### Common Issues

#### 1. API Key Error
**Symptom**: Chatbot returns "Authentication failed"

**Solution**:
1. Check Vercel Dashboard → Settings → Environment Variables
2. Verify `ANTHROPIC_API_KEY` is set correctly
3. Redeploy after changing environment variables

```bash
vercel --prod --yes
```

#### 2. Build Fails
**Symptom**: Deployment fails during build

**Solution**:
1. Test build locally: `npm run build`
2. Check for TypeScript errors
3. Verify all dependencies are in package.json

#### 3. 404 Errors
**Symptom**: Pages return 404

**Solution**:
1. Check file structure in `app/` directory
2. Ensure page.tsx files exist
3. Clear Vercel cache and redeploy

---

## 📊 Monitoring

### Vercel Dashboard
- **Deployments**: View all deployment history
- **Analytics**: Page views and performance
- **Logs**: Real-time function logs for API routes
- **Performance**: Web vitals and metrics

### Key Metrics to Monitor
- **API Response Time**: Should be < 5 seconds for chatbot
- **Build Time**: Should be < 2 minutes
- **Error Rate**: Should be < 1%
- **Page Load Time**: Should be < 2 seconds

---

## 🔐 Security

### Best Practices Implemented
- ✅ API keys stored in environment variables (not in code)
- ✅ CORS configured for API routes
- ✅ Rate limiting (via Anthropic API)
- ✅ No sensitive data in client-side code
- ✅ HTTPS enforced by Vercel

### Security Checklist
- [ ] API key rotated regularly
- [ ] No secrets in Git history
- [ ] Dependencies updated monthly
- [ ] Vercel security headers enabled

---

## 🚀 Performance Optimization

### Implemented Optimizations
- Next.js 15 with App Router (faster routing)
- Static generation for guide and resource pages
- Code splitting (automatic with Next.js)
- Image optimization (if/when images added)
- Tailwind CSS purging (removes unused styles)

### Future Optimizations
- [ ] Add service worker for offline docs
- [ ] Implement caching for API responses
- [ ] Add image CDN for assets
- [ ] Enable Vercel Edge Functions

---

## 📝 Deployment Checklist

### Pre-Deployment
- [x] All pages built successfully locally
- [x] Environment variables configured
- [x] API routes tested
- [x] No console errors
- [x] Mobile responsiveness verified
- [x] Git repository up to date

### Post-Deployment
- [x] Production URL accessible
- [x] Chatbot responds correctly
- [x] All navigation links work
- [x] External links to GitHub work
- [x] API key working in production

---

## 🔄 Update Workflow

### Deploying Updates

1. **Make Changes**
   ```bash
   # Edit files locally
   cd frontend
   npm run dev # Test changes
   ```

2. **Build Test**
   ```bash
   npm run build # Ensure no errors
   ```

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

4. **Verify Deployment**
   - Check Vercel Dashboard for build status
   - Visit production URL to verify changes
   - Test critical features (chatbot, navigation)

---

## 🎯 Custom Domain (Optional)

### Adding a Custom Domain

1. **Purchase Domain** (e.g., scholarag-helper.com)

2. **Configure in Vercel**
   - Go to Vercel Dashboard → Settings → Domains
   - Add custom domain
   - Follow DNS configuration instructions

3. **Update Environment Variables**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://scholarag-helper.com
   ```

4. **Redeploy**
   ```bash
   vercel --prod --yes
   ```

---

## 📞 Support

### Deployment Issues
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: https://github.com/HosungYou/ScholarRAG-helper/issues
- **Documentation**: https://nextjs.org/docs

### Contact
For deployment help, open an issue on GitHub with:
- Deployment URL
- Error logs from Vercel
- Steps to reproduce the issue

---

## 🎉 Success!

Your ScholarRAG Helper is now live and accessible to researchers worldwide!

**Next Steps**:
1. Share the URL with your research community
2. Monitor usage in Vercel Dashboard
3. Gather feedback and iterate
4. Update documentation based on user questions

---

_Last Updated: October 11, 2025_
_Deployment Version: v1.0.0_
