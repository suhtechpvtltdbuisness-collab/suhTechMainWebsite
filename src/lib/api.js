// API utility for main website (Artofqr_main)
// All API calls use relative paths since they're on the same domain

const API_BASE = '/api';

export const api = {
  // Contact
  submitContact: async (data) => {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Newsletter
  subscribeNewsletter: async (email) => {
    const response = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return response.json();
  },

  // User Info (FAQ form)
  submitUserInfo: async (data) => {
    const response = await fetch(`${API_BASE}/newsletter/submit-user-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Testimonials (public)
  getTestimonials: async () => {
    const response = await fetch(`${API_BASE}/testimonials`);
    return response.json();
  },

  // Portfolio (public)
  getPortfolios: async () => {
    const response = await fetch(`${API_BASE}/portfolio`);
    return response.json();
  },

  getPortfolio: async (slug) => {
    const response = await fetch(`${API_BASE}/portfolio/${slug}`);
    return response.json();
  },

  // Blogs (public)
  getBlogs: async () => {
    const response = await fetch(`${API_BASE}/blogs`);
    return response.json();
  },

  getBlog: async (slug) => {
    const response = await fetch(`${API_BASE}/blogs/${slug}`);
    return response.json();
  },
};

export default api;

