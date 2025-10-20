# Vercel Deployment Setup Guide

## Current Status (2025-10-11)

### ✅ Completed
- Repository connected to GitHub
- Latest commit pushed: `3e685ae` - "Simplify Vercel configuration for monorepo"
- Vercel project created: `scholar-rag-helper`
- Project URL: https://vercel.com/hosung-yous-projects/scholar-rag-helper

### ⚠️ Configuration Required

The deployment is currently failing because Vercel needs to know that this is a **monorepo** with the Next.js app in the `frontend/` subdirectory.

## Fix Instructions

### Option 1: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/hosung-yous-projects/scholar-rag-helper/settings
2. Navigate to **General** → **Build & Development Settings**
3. Set **Root Directory**: `frontend`
4. Framework Preset should auto-detect as **Next.js**
5. Leave other settings as default (Next.js will auto-detect commands)
6. Click **Save**
7. Go to **Deployments** tab and click **Redeploy** on the latest deployment

### Option 2: Vercel CLI (Alternative)

```bash
cd "/Volumes/External SSD/Projects/Research/ScholarRAG-helper"

# Link to the correct project
vercel link --project scholar-rag-helper --yes

# Set root directory via environment variable
vercel env add VERCEL_ROOT_DIR production
# Enter value: frontend

# Trigger new deployment
vercel --prod
```

### Option 3: Move Files (Not Recommended)

If you want to avoid monorepo configuration, you could move all frontend files to the root directory, but this would require restructuring the entire repository.

## Verification Steps

After configuring the root directory:

1. **Check Build Logs**:
   - Go to https://vercel.com/hosung-yous-projects/scholar-rag-helper/deployments
   - Click on the latest deployment
   - Verify it shows "Detected Next.js version: 15.5.4" (not an error)

2. **Test Production URL**:
   - Visit the production URL (will be something like `https://scholar-rag-helper.vercel.app`)
   - Verify the homepage loads with:
     - Purple/blue gradient background
     - Animated floating blobs
     - Glassmorphism cards
     - "ScholarRAG Helper" header

3. **Test Pages**:
   - Homepage: `/`
   - Guide: `/guide/01-introduction`
   - Chat: `/chat`
   - Resources: `/resources`

## Expected Production URL

Once configured correctly, your site will be available at:
- **Primary**: `https://scholar-rag-helper.vercel.app`
- **Alternative**: `https://scholarag-helper.vercel.app` (if claimed)

## Troubleshooting

### Error: "No Next.js version detected"
**Cause**: Root directory not set to `frontend`
**Fix**: Follow Option 1 above to set root directory in dashboard

### Error: "Authentication Required" (401)
**Cause**: Deployment preview is password-protected or private
**Fix**:
- Go to Settings → General → Deployment Protection
- Ensure "Vercel Authentication" is disabled for production deployments

### Build succeeds but 404 errors
**Cause**: Old builds cached or multiple projects conflicting
**Fix**:
- Delete old Vercel projects (you already did this)
- Clear browser cache
- Wait 2-3 minutes for DNS propagation

## Current Deployment Attempts

| Time | Deployment URL | Status | Issue |
|------|---------------|--------|-------|
| 16:41 | scholar-rag-helper-8oeotja2j | ❌ Error | No Next.js detected (root dir not set) |
| 16:41 | scholar-rag-helper-ia7mx8itt | ✅ Ready | But from old config |
| 16:47 | frontend-8hxae1x6q | ✅ Ready | Wrong project name (deployed from frontend/) |

## Next Steps

**User Action Required**:
1. Open Vercel dashboard
2. Set root directory to `frontend` in project settings
3. Redeploy

Once completed, the automatic GitHub → Vercel deployment will work correctly for all future commits.
