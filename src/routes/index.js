// src/routes/index.js
import { Router } from 'express';

const router = Router();

const baseMeta = {
  siteName: 'Nolan Young | Web Marketing & Operations • CRO • Performance',
  baseUrl: 'https://young-marketing.io/' 
};

router.get('/', (req, res) => {
  res.render('pages/index', {
    meta: {
      ...baseMeta,
      title: 'Nolan Young | Web Marketing & Operations',
      description:
        'Portfolio website for Nolan Young outlining proficiencies in web marketing, operations, CRO, performance, and more.',
      canonicalPath: '/'
    }
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', {
    meta: {
      ...baseMeta,
      title: 'About | Nolan Young',
      description:
        'Learn about my background managing and optimizing high-traffic websites.',
      canonicalPath: '/about'
    }
  });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    meta: {
      ...baseMeta,
      title: 'Contact | Nolan Young',
      description:
        'Connect with Nolan Young on LinkedIn to discuss web operations, CRO, performance, or new opportunities.',
      canonicalPath: '/contact'
    }
  });
});

export default router;
