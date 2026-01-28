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
      title: 'Homepage',
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
      title: 'About Me',
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
      title: 'Contact',
      description:
        'Get in touch.',
      canonicalPath: '/contact'
    }
  });
});

export default router;
