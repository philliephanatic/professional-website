// src/routes/index.js
import { Router } from 'express';

const router = Router();

const baseMeta = {
  siteName: 'Nolan Young | Web Marketing & CRO',
  baseUrl: 'https://example.com' // update before launch
};

router.get('/', (req, res) => {
  res.render('pages/index', {
    meta: {
      ...baseMeta,
      title: 'Web Marketing Leader Driving Revenue Through CRO & SEO',
      description:
        'Portfolio of Nolan Young, a web marketing and site optimization manager focused on revenue, CRO, and SEO for high-traffic brands.',
      canonicalPath: '/'
    }
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', {
    meta: {
      ...baseMeta,
      title: 'About Nolan Young | Web Marketing & Site Optimization',
      description:
        'Learn about Nolan Young’s background managing and optimizing high-traffic websites across Fortune 500 and growth-stage companies.',
      canonicalPath: '/about'
    }
  });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    meta: {
      ...baseMeta,
      title: 'Contact Nolan Young | Web Marketing & CRO Partner',
      description:
        'Get in touch with Nolan Young for web marketing, SEO, and conversion optimization opportunities.',
      canonicalPath: '/contact'
    }
  });
});

export default router;
