export default function sitemap() {
  const baseUrl = 'https://www.suhtech.top';

  const routes = [
    '',
    '/services',
    '/portfolio',
    '/contact',
    '/careers',
    '/industries',
    '/insights',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/cloud-and-devops',
    '/services/ai-and-automation',
    '/services/cybersecurity',
    '/services/it-consulting',
    '/services/saas-development',
    '/services/maintenance-and-support',
    '/services/startup-solutions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

