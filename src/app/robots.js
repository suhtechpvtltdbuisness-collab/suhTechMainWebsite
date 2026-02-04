export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/designer/'],
    },
    sitemap: 'https://www.suhtech.top/sitemap.xml',
  };
}

