import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ── Transport Security ───────────────────────────────────────────
          {
            // Force HTTPS for 2 years, include subdomains, submit to preload list
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // ── Framing & Content Type ───────────────────────────────────────
          {
            // Deny all framing to prevent clickjacking
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // Prevent MIME-type sniffing
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // ── Referrer & Permissions ───────────────────────────────────────
          {
            // Only send origin on cross-origin requests (no full URL path)
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // Deny camera, mic, geo, payment APIs — not needed on this site
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          // ── Cross-Origin Isolation (prevents Spectre-class side channels) ─
          {
            // Prevents this page from being opened in a cross-origin context
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            // Prevents other sites from reading this site's resources
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          // ── Adobe Flash / PDF cross-domain ──────────────────────────────
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          // ── Content Security Policy ──────────────────────────────────────
          // NOTE: 'unsafe-inline' on script-src is required by Next.js inline
          // hydration scripts. 'unsafe-eval' has been removed — not needed in prod.
          // ws://localhost:3000 removed — was a dev artifact leaking into prod.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Allow Next.js inline scripts + Google Tag Manager / Google Analytics + Vercel
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              // Allow images from approved CDNs + data URIs + Google Analytics
              "img-src 'self' data: blob: https://lh3.googleusercontent.com https://images.unsplash.com https://plus.unsplash.com https://img.youtube.com https://i.ytimg.com https://*.google-analytics.com https://*.googletagmanager.com",
              // Allow YouTube, Google Maps iframes
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com https://youtube.com",
              // API calls: self + Vercel Analytics + Google Analytics
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
              "worker-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
