# Subdomain Setup Guide for GalZip

This guide will help you configure `galzip.liteteam.app` to route to your GalZip landing page.

## What's Been Added

1. **Middleware** (`src/middleware.ts`): Automatically routes subdomain traffic to the correct app pages

## Vercel Configuration Steps

### Step 1: Add Domain to Vercel

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** > **Domains**
3. Add your main domain: `liteteam.app`
4. Follow Vercel's instructions to configure your DNS records

### Step 2: Add Subdomain

1. In the same **Domains** section, click **Add Domain**
2. Enter: `galzip.liteteam.app`
3. Click **Add**
4. Vercel will automatically configure it to point to your project

### Step 3: Configure DNS (If using external DNS provider)

If your domain is hosted elsewhere (GoDaddy, Cloudflare, Namecheap, etc.), add these DNS records:

**For the main domain:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 3600
```

**For the subdomain:**
```
Type: CNAME
Name: galzip
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**For wildcard subdomains (optional, for all app subdomains):**
```
Type: CNAME
Name: *
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

### Step 4: Add All App Subdomains (Optional)

To add subdomains for all your apps, repeat Step 2 for each:
- `galzip.liteteam.app`
- `fintools.liteteam.app`
- `noteflow.liteteam.app`
- `focustime.liteteam.app`
- `taskmaster.liteteam.app`

## How It Works

The middleware (`src/middleware.ts`) detects the subdomain from the hostname:

1. **When visiting `galzip.liteteam.app`**:
   - Automatically routes to `/galzip` page
   - Shows the GalZip landing page

2. **When visiting `liteteam.app`**:
   - Shows the main landing page (home)

3. **When visiting `liteteam.app/galzip`**:
   - Still works normally (direct URL access)

## Testing Locally

To test subdomain routing locally:

1. Edit your `/etc/hosts` file (macOS/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows):
   ```
   127.0.0.1 galzip.localhost
   127.0.0.1 liteteam.localhost
   ```

2. Run your dev server:
   ```bash
   npm run dev
   ```

3. Visit:
   - `http://liteteam.localhost:3000` (main site)
   - `http://galzip.localhost:3000` (GalZip page)

**Note:** Some browsers cache DNS aggressively. Use incognito/private mode for testing.

## Troubleshooting

### Subdomain not working after setup
- Wait 5-10 minutes for DNS propagation
- Clear your browser cache or use incognito mode
- Check Vercel deployment logs for errors

### SSL certificate errors
- Vercel automatically provisions SSL certificates
- This can take a few minutes after adding the domain
- Check domain status in Vercel dashboard

### 404 errors
- Ensure the middleware file is in the correct location: `src/middleware.ts`
- Redeploy your project to Vercel
- Check that the `/galzip` route exists in your app

## Alternative: Environment-Based Configuration

If you want different behavior based on environment, you can extend the middleware:

```typescript
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = hostname.includes('liteteam.app');
```

## Next Steps

1. ✅ Middleware is already configured
2. ⏳ Add domain in Vercel dashboard
3. ⏳ Configure DNS records
4. ⏳ Wait for propagation (5-30 minutes)
5. ✅ Test your subdomain!

For more information, see [Vercel's Multi-Zone documentation](https://vercel.com/docs/concepts/edge-network/domains).
