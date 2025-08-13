// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Base URL of your site
const baseUrl = 'https://artalive.com.my';

// All your routes from <Routes>
const routes = [
  '/',
  '/about-us',
  '/contact-us',
  '/services',
  '/prosthetics',
  '/orthotics',
  '/pediatrics',
  '/thankyou',
  '/prostetik-anggota-bawah',
  '/prostetik-anggota-atas',
  '/prostetik-khas',
  '/ortotik-anggota-bawah',
  '/ortotik-anggota-atas',
  '/ortotik-khas',
  '/penyelesaian-penjagaan-kaki',
  '/myopro-orthosis',
  '/prostetik-3d',
  '/pengukuhan-anggota-bawah
',
  '/pendakap-scoliosis

',
  '/topi-keledar-tengkorak

',
  '/pediatrik-prostetik',
  '/privacy-policy',
  '/terms-and-conditions',
  '/video-gallery'
];

// Output file location
const sitemapPath = './public/sitemap.xml';
const writeStream = createWriteStream(sitemapPath);

// Create a new sitemap stream
const sitemapStream = new SitemapStream({ hostname: baseUrl });
sitemapStream.pipe(writeStream);

// Add each route to the sitemap
routes.forEach(path => {
  sitemapStream.write({
    url: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.8
  });
});

// End sitemap stream and save file
sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    console.log(`✅ Sitemap successfully created at ${sitemapPath}`);
  })
  .catch(err => {
    console.error('❌ Error generating sitemap:', err);
  });
